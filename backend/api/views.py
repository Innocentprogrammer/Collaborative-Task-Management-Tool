from django.shortcuts import render
from .models import Student,Project
from .serializers import StudentSerializer, ProjectSerializer, CreateProjectSerializer
from rest_framework.generics import ListAPIView
from rest_framework import status
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework.views import APIView



# Create your views here.
class StudentList(ListAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

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
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    

# @csrf_exempt
# @api_view(['POST'])
# def create_project(request):
#     if request.method == 'POST':
#         serializer = ProjectSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

