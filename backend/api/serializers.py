from rest_framework import serializers
from .models import Project, Report, Task


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

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task 
        fields= ['id','task']
