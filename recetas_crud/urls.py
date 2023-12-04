from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('listado', views.RecetaListView.as_view(), name='receta_listado'),
    path('crear', views.RecetaCreateView.as_view(), name='receta_crear'),
    path('detalle/<pk>', views.RecetaDetailView.as_view(), name='receta_detalle'),
    path('modificar/<pk>', views.RecetaUpdateView.as_view(), name='receta_modificar'),
    path('borrar/<pk>', views.RecetaDeleteView.as_view(), name='receta_borrar')

    # Ejemplo de Url parametrizada
    #path('saludar/<str:nombre_usuario>', views.saludar_por_nombre, name='saludar_por_nombre')
]