# Generated by Django 5.1 on 2024-08-16 19:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_report'),
    ]

    operations = [
        migrations.AlterField(
            model_name='report',
            name='reportfile',
            field=models.FileField(default=None, null=True, upload_to='report/'),
        ),
    ]
