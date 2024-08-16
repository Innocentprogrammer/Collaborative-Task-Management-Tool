from django.contrib import admin
from .models import Student 
from .models import Project

class StudentAdmin(admin.ModelAdmin):
    list_display = ('student', 'email')

admin.site.register(Student,StudentAdmin)

class ProjectAdmin(admin.ModelAdmin):
    list_display =('projectName','startDate','dueDate','projectHeadName','teamMemberName','Description','status')
admin.site.register(Project,ProjectAdmin)

# Register your models here.
