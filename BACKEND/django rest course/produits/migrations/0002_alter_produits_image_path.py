# Generated by Django 5.0.6 on 2024-05-28 00:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('produits', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='produits',
            name='image_path',
            field=models.CharField(max_length=255),
        ),
    ]