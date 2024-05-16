import logging
import re
from django.core.exceptions import ValidationError
from django.http import JsonResponse
from rest_framework.decorators import api_view
# from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.core.exceptions import ObjectDoesNotExist
from .serializers import UserSerializer
from validate_email_address import validate_email
from django.contrib.auth.hashers import make_password
from .models import User, Client, Vendeur
from rest_framework_simplejwt.tokens import RefreshToken



from .models import User


# Create your views here.

# ? Register User
# @api_view(['POST'])
# def register_user(request):
#     try:
#         serializer = UserSerializer(data=request.data)
#         if serializer.is_valid():
#             username = serializer.validated_data['username']
#             email = serializer.validated_data['email']
#             password = serializer.validated_data.get('password')
#             confirm_password = request.data.get('confirm_password')

#             if User.objects.filter(username=username).exists():
#                 print('Le nom d\'utilisateur existe déjà.')
#                 return Response({'error': 'Le nom d\'utilisateur existe déjà.'}, status=status.HTTP_400_BAD_REQUEST)

#             elif User.objects.filter(email=email).exists():
#                 print('L\'email existe déjà.')
#                 return Response({'error': 'L\'email existe déjà.'}, status=status.HTTP_400_BAD_REQUEST)

#             elif password != confirm_password:
#                 print('Les mots de passe ne correspondent pas.')
#                 return Response({'error': 'Les mots de passe ne correspondent pas.'}, status=status.HTTP_400_BAD_REQUEST)

#             user = User(
#                 username=serializer.validated_data['username'],
#                 email=serializer.validated_data['email'],
#                 role='client'
#             )
#             user.set_password(serializer.validated_data['password'])
#             user.save()

#             return Response(serializer.data, status=status.HTTP_201_CREATED)

#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#     except Exception as e:
#         print(f"Erreur lors de l'inscription : {e}")
#         return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

logger = logging.getLogger(__name__)

# @api_view(['POST'])
# def register_user(request):
#     data = request.data
#     username = data['username']
#     email = data['email']
#     password = data['password']
#     confirm_password = data['confirm_password']
#     username_regex = r'^[a-zA-Z0-9.@+-]+$'
#     print(data)
#     if validate_email(email):
#         if User.objects.filter(username=username).exists():
#             print("Nom d'utilisateur déjà utilisé !")
#             return Response({"erreur": "Nom d'utilisateur déjà utilisé !"}, status=status.HTTP_400_BAD_REQUEST)
        
#         elif not re.match(username_regex, username):
#             return Response({
#                                 "erreur": "Entrez un nom d'utilisateur valide. Cette valeur peut contenir uniquement des lettres, des chiffres et des caractères  spéciaux: ., @, +, -, et _ "},
#                             status=status.HTTP_400_BAD_REQUEST)

#         elif User.objects.filter(email=email).exists():
#             print("Email déjà utilisé !")
#             return Response({"erreur": "Email déjà utilisé !"}, status=status.HTTP_400_BAD_REQUEST)
        
#         elif password != confirm_password:
#             return Response({"erreur": "Les mots de passe ne correspondent pas."}, status=status.HTTP_400_BAD_REQUEST)
#         serializer = UserSerializer(data=data)
        
#         if serializer.is_valid():
#             user = serializer.save()
#             print(f"Le type est: {type(user)}")
            
#             if user.role == 'client':
#                 Client.objects.create(user=user)
                
#             elif user.role == 'vendeur':
#                 Vendeur.objects.create(user=user)
                
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
        
#         else:
#             logger.error(f"Serializer errors: {serializer.errors}")
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
#     else:
#         return Response({'error': 'E-mail invalide'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def register_user(request):
    def create_user_profile(user, role):
        if role == 'client':
            Client.objects.create(user=user)
        elif role == 'vendeur':
            Vendeur.objects.create(user=user)
    
    data = request.data
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    confirm_password = data.get('confirm_password')
    role = data.get('role', 'client')
    username_regex = r'^[a-zA-Z0-9.@+-]+$'

    try:
        validate_email(email)
    except ValidationError:
        print('E-mail invalide')
        return Response({'error': 'E-mail invalide'}, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(username=username).exists():
        print("Nom d'utilisateur déjà utilisé !")
        return Response({"erreur": "Nom d'utilisateur déjà utilisé !"}, status=status.HTTP_400_BAD_REQUEST)

    if not re.match(username_regex, username):
        print("Username incorrect")
        return Response({
            "erreur": "Entrez un nom d'utilisateur valide. Cette valeur peut contenir uniquement des lettres, des chiffres et des caractères  spéciaux: ., @, +, -, et _ "
        }, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(email=email).exists():
        print("Email déjà utilisé !")
        return Response({"erreur": "Email déjà utilisé !"}, status=status.HTTP_400_BAD_REQUEST)

    if password != confirm_password:
        print("Les mots de passe ne correspondent pas.")
        return Response({"erreur": "Les mots de passe ne correspondent pas."}, status=status.HTTP_400_BAD_REQUEST)

    serializer = UserSerializer(data=data)

    if serializer.is_valid():
        user = serializer.save()  
        create_user_profile(user=user, role=role)

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    logger.error(f"Serializer errors: {serializer.errors}")
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# ? Login User
@api_view(['POST'])
def user_login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    if validate_email(email):
        try:
            user = User.objects.get(email=email)
            
        except ObjectDoesNotExist:
            return Response({'erreur': 'E-mail ou mot de passe incorrect'}, status=status.HTTP_401_UNAUTHORIZED)

        if user.check_password(password):
            print('Connexion réussie')
            serializer = UserSerializer(user)
            
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)
            
            return Response({'user': serializer.data,'access_token': access_token,'refresh_token': str(refresh)}, status=status.HTTP_200_OK)
        else:
            print('E-mail ou mot de passe incorrect')
            return Response({'erreur': 'E-mail ou mot de passe incorrect'}, status=status.HTTP_401_UNAUTHORIZED)
    else:
        return Response({'erreur': 'E-mail invalide'}, status=status.HTTP_400_BAD_REQUEST)
    

# ? Get User Info
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_info(request):
    serializer = UserSerializer(request.user)
    data = serializer.data
    print(data)
    return Response(serializer.data)
        
# @api_view(['POST'])
# def user_login(request):
#     if request.method == 'POST':
#         username = request.data.get('username')
#         password = request.data.get('password')

#         user = None
#         if '@' in username:
#             try:
#                 user = User.objects.get(email=username)
#             except ObjectDoesNotExist:
#                 pass

#         if not user:
#             user = authenticate(username=username, password=password)

#         if user:
#             token, _ = Token.objects.get_or_create(user=user)
#             return Response({'token': token.key}, status=status.HTTP_200_OK)

#         return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
    
# # ? User Logout
# @api_view(['POST'])    
# @permission_classes([IsAuthenticated])
# def user_logout(request):
#     # if request.method == 'POST':
#     try:
#         # Delete the user's token to logout
#         request.user.auth_token.delete()
#         return Response({'message': 'Successfully logged out.'}, status=status.HTTP_200_OK)
#     except Exception as e:
#         return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)