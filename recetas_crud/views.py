from django.shortcuts import render

def index(request):
    return render(request, 'recetas_crud/index.html', {})