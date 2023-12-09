from django.db import models

class Receta(models.Model):
    nombre = models.CharField(max_length=100, verbose_name='Titulo')
    descripcion = models.CharField(max_length=500, verbose_name='Descripcion')
    ingredientes = models.CharField(max_length=250, verbose_name='Ingredientes', null=True)
    preparacion = models.CharField(max_length=250, verbose_name='Preparacion', null=True)
    imagen = models.ImageField(upload_to='recetas/imagenes/', null=True, blank=True, verbose_name='Imagen')
    autor = models.CharField(max_length=100, null=True, blank=True, verbose_name='Autor')
    fecha_de_creacion = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creacion')
    class Meta:
        db_table = 'receta'

    def __str__(self):
        return f"{self.nombre} {self.imagen} {self.descripcion} {self.ingredientes} {self.autor} {self.preparacion} - ({self.fecha_de_creacion})"
