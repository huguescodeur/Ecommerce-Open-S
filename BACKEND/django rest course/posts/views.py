# from django.shortcuts import render
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from .models import Post
from .serializers import PostSerializer
from django.shortcuts import get_object_or_404

# Create your views here.

@api_view(http_method_names=['GET', 'POST'])
def homePage(request: Request):
    
    if request.method == 'POST':
        data = request.data
        print(data)
        response_data = {
            "message": "Hello, world!", 
            "data": data
        }
        return Response(data=response_data, status=status.HTTP_201_CREATED)
    
    response_data = {"message": "Hello, world!"}
    return Response(data = response_data, status=status.HTTP_200_OK)


@api_view(['GET', 'POST'])
def listposts(request):
    if request.method == 'POST':
        # data_all = request.data
        serializer = PostSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            
            response = {
                "message": "Post created",
                "data": serializer.data
            }
            
            return Response(data=response, status=status.HTTP_201_CREATED)
        
        return Response(data=serializer.error, status=status.HTTP_400_BAD_REQUEST)
        
    else:
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        data = serializer.data
        return Response(data=data, status=status.HTTP_200_OK)

@api_view(['GET'])
def postdetails(request, post_id:int):
    post = get_object_or_404(Post, pk=post_id)
    
    serializer = PostSerializer(instance=post)
    data = serializer.data
    
    return Response(data = data, status=status.HTTP_200_OK)
    
@api_view(['PUT'])
def updatepost(request, post_id:int):
    post = get_object_or_404(Post, pk=post_id)
    
    data = request.data 
    
    serializer = PostSerializer(instance=post, data=data)
    
    if serializer.is_valid():
        serializer.save()
        
        response = {
            "message": "Post updated",
            "data": serializer.data
        }
        
        return Response(data=response, status=status.HTTP_200_OK)
    
    return Response(data=serializer.error, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def deletepost(request, post_id:int):
    post = get_object_or_404(Post, pk=post_id)
    
    post.delete()
    
    response = {
        "message": "Post deleted"
    }
    
    return Response(data=response, status=status.HTTP_204_NO_CONTENT)
