from recetas_crud.models import Receta
from datetime import date

def carga_inicial():
    recetas = [
        {
            'nombre': 'Pizza',
            'descripcion': 'Deliciosa pizza con ingredientes frescos',
            'ingredientes': 'Masa, salsa de tomate, queso, pepperoni',
            'preparacion': 'Extender la masa, agregar salsa, queso y pepperoni. Hornear.',
            'fecha_de_creacion': date.today()
        },
        {
            'nombre': 'Salmón al horno',
            'descripcion': 'Salmón fresco horneado con hierbas',
            'ingredientes': 'Filete de salmón, limón, hierbas frescas',
            'preparacion': 'Sazonar el salmón, agregar limón y hierbas. Hornear.',
            'fecha_de_creacion': date.today()
        },
        {
            'nombre': 'Ñoquis de papa',
            'descripcion': 'Ñoquis caseros con salsa de tomate',
            'ingredientes': 'Papas, harina, huevo, salsa de tomate',
            'preparacion': 'Cocinar las papas, hacer puré, mezclar con harina y huevo. Formar los ñoquis. Cocinar y servir con salsa de tomate.',
            'fecha_de_creacion': date.today()
        },
        {
            'nombre': 'Cordero asado',
            'descripcion': 'Cordero marinado y asado lentamente',
            'ingredientes': 'Pierna de cordero, ajo, romero, aceite de oliva',
            'preparacion': 'Marinar el cordero con ajo, romero y aceite. Asar lentamente hasta que esté dorado.',
            'fecha_de_creacion': date.today()
        },
    ]
    for receta_data in recetas:
        Receta.objects.create(**receta_data)

if __name__ == '__main__':
    carga_inicial()