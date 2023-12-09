from django.shortcuts import render
from django.http import HttpResponse
from datetime import datetime
from django.views.generic.list import ListView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.views.generic.detail import DetailView
from django.urls import reverse, reverse_lazy

from .models import Receta

def index(request):
    return render(request, 'recetas_crud/index.html')
   
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
    template_name = 'recetas_crud/receta_borrar.html'
    success_url = reverse_lazy('receta_listado')
