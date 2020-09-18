from django.urls import path
from .views import BookAPIView, BookDetails

urlpatterns = [
    path('books/', BookAPIView.as_view()),
    path('book-detail/<int:id>/', BookDetails.as_view())
]
