# Generated by Django 5.1 on 2024-08-16 18:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_project'),
    ]

    operations = [
        migrations.CreateModel(
            name='Report',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reportType', models.CharField(max_length=20)),
                ('projectName', models.CharField(max_length=150)),
                ('startDate', models.DateField()),
                ('dueDate', models.DateField()),
                ('reportfile', models.FileField(upload_to='report/')),
            ],
        ),
    ]
