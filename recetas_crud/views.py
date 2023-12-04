from django.shortcuts import render
from django.http import HttpResponse
from datetime import datetime
from django.views.generic.list import ListView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.views.generic.detail import DetailView
from django.urls import reverse, reverse_lazy

from .models import Receta

def index(request):
    # La data real eventualmente será obtenida de la BBDD

    context = {
        'username': 'Chef Nicolas',
        'fecha_hoy': datetime.now(),
        'edad': 25
    }

    return render(request, 'recetas_crud/index.html', context)
    
def crear_tarea(request):
    return HttpResponse("Trabajo en progreso - En esta vista se van a poder dar de alta nuevas recetas")

# def tareas_listado(request):
#     # Estoy yendo a la BBDD a buscar todas las tareas
#     listado_tareas = Tarea.objects.all()

#     context = {
#         'listado_tareas': listado_tareas,
#         'usuario_activo': False
#     }

#     return render(request, 'web/tareas_listado.html', context)


def saludar_por_nombre(request, nombre_usuario):
    return HttpResponse(f"Bienvenid@ <b>{nombre_usuario}</b>")

# Vistas basadas en Clases -----------------------------------------------------------

class RecetaListView(ListView):
    model = Receta
    context_object_name = 'receta_listado'
    template_name = 'recetas_crud/receta_listado.html'


class RecetaCreateView(CreateView):
    model = Receta
    template_name = 'recetas_crud/receta_crear.html'
    success_url = 'listado'
    fields = '__all__'


class RecetaDetailView(DetailView):
    model = Receta
    template_name = 'recetas_crud/receta_detalle.html'


class RecetaUpdateView(UpdateView):
    model = Receta
    template_name = 'recetas_crud/receta_modificar.html'
    fields = '__all__'

    def get_success_url(self):
        return reverse('receta_detalle', kwargs={'pk': self.object.pk})
    

class RecetaDeleteView(DeleteView):
    model = Receta
    template_name = 'recetas_curd/receta_borrar.html'
    success_url = reverse_lazy('receta_listado')
