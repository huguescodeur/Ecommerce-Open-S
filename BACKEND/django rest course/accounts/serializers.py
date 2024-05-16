from rest_framework import serializers
from .models import User, Client, Vendeur

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'nom', 'prenom', 'genre', 'role']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['username'],
            role=validated_data['role']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
    

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ['id', 'user', 'numero_de_client'] 

class VendeurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendeur
        fields = ['id', 'user', 'numero_de_vendeur']