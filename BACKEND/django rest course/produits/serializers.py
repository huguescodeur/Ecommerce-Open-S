from rest_framework import serializers
from .models import Produits, Categorie

class ProduitsSerializer(serializers.ModelSerializer):
    nom_categorie = serializers.CharField(source='categorie.nom_categorie', read_only=True)
    class Meta:
        model = Produits
        fields = ['id', 'nom_produit', 'description', 'prix', 'categorie', 'nom_categorie', 'image_path']
        
    def create(self, validated_data):
        return Produits.objects.create(**validated_data)
    

class CategorieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categorie
        fields = '__all__'
        
    def create(self, validated_data):
        return Categorie.objects.create(**validated_data)
