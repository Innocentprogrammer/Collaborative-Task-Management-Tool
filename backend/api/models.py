from django.db import models

class Student(models.Model):
    student=models.CharField(max_length=100)
    email=models.CharField(max_length=100)

class Project(models.Model):
    projectName=models.CharField(max_length=150)
    startDate=models.DateField()
    dueDate=models.DateField()
    projectHeadName=models.CharField(max_length=100)
    teamMemberName=models.CharField(max_length=500)
    Description=models.CharField(max_length=1000)
    status=models.CharField(max_length=15)
    
    

# Create your models here.
