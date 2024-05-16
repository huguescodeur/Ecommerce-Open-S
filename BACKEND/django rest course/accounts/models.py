from django.contrib.auth.models import User, AbstractUser, Group, Permission

from django.db import models

class User(AbstractUser):
    ROLE_CHOICES = (
        ('client', 'Client'),
        ('vendeur', 'Vendeur'),
        ('admin', 'Admin'),
    )
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='client')
    
    email = models.EmailField(unique=True)
    nom = models.CharField(max_length=100, null=True, blank=True)
    prenom = models.CharField(max_length=100, null=True, blank=True)
    genre = models.CharField(max_length=50, null=True, blank=True)

    
    groups = models.ManyToManyField(Group, related_name="%(app_label)s_%(class)s_related")
    user_permissions = models.ManyToManyField(Permission, related_name="%(app_label)s_%(class)s_related")
    

class Vendeur(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    numero_de_vendeur = models.CharField(max_length=30, null=True, blank=True)
    

class Client(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    numero_de_client = models.CharField(max_length=30, null=True, blank=True)
    
# class Administrateur(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     niveau_acces = models.CharField(max_length=100, null=True, blank=True)
#     departement = models.CharField(max_length=100, null=True, blank=True)



    def __str__(self):
        return self.username