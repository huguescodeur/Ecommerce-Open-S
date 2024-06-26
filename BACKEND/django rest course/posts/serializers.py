from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    title = serializers.CharField(max_length=100)
    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'created_at']
        
    def create(self, validated_data):
        return Post.objects.create(**validated_data)