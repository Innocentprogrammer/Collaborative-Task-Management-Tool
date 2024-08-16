from django.contrib import admin
from .models import Student, Project, Report

class StudentAdmin(admin.ModelAdmin):
    list_display = ('student', 'email')

admin.site.register(Student,StudentAdmin)

class ProjectAdmin(admin.ModelAdmin):
    list_display =('projectName','startDate','dueDate','projectHeadName','teamMemberName','Description','status')
admin.site.register(Project,ProjectAdmin)

class ReprotAdmin(admin.ModelAdmin):
    list_display = ('reportType','projectName','reportfile')
admin.site.register(Report, ReprotAdmin)

# Register your models here.
