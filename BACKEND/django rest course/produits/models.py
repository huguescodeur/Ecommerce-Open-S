from django.db import models
from accounts.models import Vendeur

# Create your models here.

class Categorie(models.Model):
    nom_categorie = models.CharField(max_length=255)

    
class Produits(models.Model):
    nom_produit = models.CharField(max_length=255)
    description = models.TextField()
    prix = models.DecimalField(max_digits=10, decimal_places=2)
    categorie = models.ForeignKey(Categorie, on_delete=models.CASCADE)
    image_path = models.CharField(max_length=255)
    
class Stocks(models.Model):
    produit = models.ForeignKey(Produits, on_delete=models.CASCADE)
    vendeur = models.ForeignKey(Vendeur, on_delete=models.CASCADE)