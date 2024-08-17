from django.urls import path 
from api import views 
from .views import CreateProjectView, CreateReportView, TodoListCreate, TodoRetrieveUpdateDestroy

urlpatterns = [
    path('project/',views.ProjectList.as_view()),
    path('createproject/',CreateProjectView.as_view()),
    path('report/',views.ReportList.as_view()),
    path('createreport/',CreateReportView.as_view()),
    path('todos/', TodoListCreate.as_view(), name='todo-list-create'),
    path('todos/<int:pk>/', TodoRetrieveUpdateDestroy.as_view(), name='todo-retrieve-update-destroy'),

]
