from django.shortcuts import render
from .models import Project, Report, Task
from .serializers import ProjectSerializer, ReportSerializer, TaskSerializer
from .serializers import CreateProjectSerializer, CreateReportSerializer
from rest_framework.generics import ListAPIView, ListCreateAPIView ,RetrieveUpdateDestroyAPIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


# Create your views here.
class ProjectList(ListAPIView):
    queryset = Project.objects.all()
    total_entries = Project.objects.count()
    serializer_class = ProjectSerializer

class CreateProjectView(APIView):
    serializer = CreateProjectSerializer
    def post(self,request, format=None):
        serializer = CreateProjectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
class ReportList(ListAPIView):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer

class CreateReportView(APIView):
    serializer = ReportSerializer
    def post(self, request, format=None):
        serializer = CreateReportSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class TodoListCreate(ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class TodoRetrieveUpdateDestroy(RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
