from django.urls import path 
from api import views 
from .views import CreateProjectView

urlpatterns = [
    path('student/',views.StudentList.as_view()),
    path('project/',views.ProjectList.as_view()),
    path('createproject/',CreateProjectView.as_view()),
]
