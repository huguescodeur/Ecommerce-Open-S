from django.urls import path
from . import views

urlpatterns = [
    path('listposts', views.listposts, name="listposts"),
    path('home/', views.homePage, name="homepage"),
    path('<int:post_id>', views.postdetails, name="postdetails"),
    path('update/<int:post_id>', views.updatepost, name="updatepost"),
    path('delete/<int:post_id>', views.deletepost, name="deletepost"),
    
]