from django.urls import path
from . import views

urlpatterns = [
    path('listproduits/', views.list_produit, name="listproduits"),
    path('listcategories/', views.list_categorie, name="listcategories"),
   
]


 # path('home/', views.homePage, name="homepage"),
    # path('<int:post_id>', views.postdetails, name="postdetails"),
    # path('update/<int:post_id>', views.updatepost, name="updatepost"),
    # path('delete/<int:post_id>', views.deletepost, name="deletepost"),
    