from django.contrib import admin
from .models import Project, Report, Task


class ProjectAdmin(admin.ModelAdmin):
    list_display =('projectName','startDate','dueDate','projectHeadName','teamMemberName','Description','status')
admin.site.register(Project,ProjectAdmin)

class ReprotAdmin(admin.ModelAdmin):
    list_display = ('reportType','projectName','reportfile')
admin.site.register(Report, ReprotAdmin)

class TaskAdmin(admin.ModelAdmin):
    list_display = ('task',)
admin.site.register(Task, TaskAdmin)
# Register your models here.
