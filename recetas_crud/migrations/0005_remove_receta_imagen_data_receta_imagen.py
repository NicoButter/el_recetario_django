# Generated by Django 4.2.7 on 2023-12-09 21:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recetas_crud', '0004_remove_receta_imagen_receta_imagen_data'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='receta',
            name='imagen_data',
        ),
        migrations.AddField(
            model_name='receta',
            name='imagen',
            field=models.ImageField(blank=True, null=True, upload_to='recetas/imagenes/', verbose_name='Imagen'),
        ),
    ]
