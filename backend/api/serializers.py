from rest_framework import serializers
from .models import Student, Project, Report

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Student
        fields=['id','student','email']

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model=Project
        fields=['id','projectName','startDate','dueDate','projectHeadName','teamMemberName','Description','status']

class CreateProjectSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Project
        fields=['projectName','startDate','dueDate','projectHeadName','teamMemberName','Description','status']

class  ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = ['id','reportType','projectName','reportfile']

class CreateReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report 
        fields = ['reportType','projectName','reportfile']