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

logger = logging.getLogger(__name__)


# ? Register
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
        
