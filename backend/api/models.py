from django.db import models

class Project(models.Model):
    projectName=models.CharField(max_length=150)
    startDate=models.DateField()
    dueDate=models.DateField()
    projectHeadName=models.CharField(max_length=100)
    teamMemberName=models.CharField(max_length=500)
    Description=models.CharField(max_length=1000)
    status=models.CharField(max_length=15)
    
class Report(models.Model):
    reportType = models.CharField(max_length=20)
    projectName = models.CharField(max_length=150)
    reportfile = models.CharField(max_length=7000)

class Task(models.Model):
    task = models.CharField(max_length=200)

# Create your models here.
