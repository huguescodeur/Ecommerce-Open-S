from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from produits.models import Produits, Categorie
from .serializers import ProduitsSerializer, CategorieSerializer
from django.db.models import Count

# from django.shortcuts import get_object_or_404

# Create your views here.
# ? Add & List Produits
@api_view(http_method_names=['GET', 'POST'])
def list_produit(request):
    if request.method == 'POST':
        serializer = ProduitsSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            
            response = {
                "message": "Produit created",
                "data": serializer.data
            }
            
            return Response(data=response, status=status.HTTP_201_CREATED)
        
        return Response(data=serializer.error, status=status.HTTP_400_BAD_REQUEST)
        
    else:
        produits = Produits.objects.all()
        serializer = ProduitsSerializer(produits, many=True)
        data = serializer.data
        print(f"Produits: {data}")
        return Response(data=data, status=status.HTTP_200_OK)
    
    
# ? Add Catégorie
@api_view(['GET', 'POST'])
def list_categorie(request):
    if request.method == 'POST':
        serializer = CategorieSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            response = {
                "message": "Produit created",
                "data": serializer.data
            }
            
            return Response(data=response, status=status.HTTP_201_CREATED)
        
        return Response(data=serializer.error, status=status.HTTP_400_BAD_REQUEST)
    
    
    else:
        # categorie = Categorie.objects.all()
        categorie = Categorie.objects.annotate(product_count=Count('produits')).filter(product_count__gt=0)

        serializer = CategorieSerializer(categorie, many=True)
        data = serializer.data
        print(f"Categorie: {data}")
        return Response(data=data, status=status.HTTP_200_OK)

