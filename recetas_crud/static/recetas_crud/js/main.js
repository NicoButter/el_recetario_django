function calcularNivelDirectorio() {
    var urlActual = window.location.href;
    console.log("La url actual es: " + urlActual);

    var partesURL = urlActual.split("/");
    console.log("Las partesURL es: " + partesURL);
    
    console.log("PartesURL.LENGTH es: " + partesURL.length);

    if (urlActual.startsWith("https")) {
        var nivelSubdirectorio = partesURL.length - 4;
        console.log("La resta es: " + (partesURL.length - 4));
        //nivelSubdirectorio -= 1;
    }
    else{
        var nivelSubdirectorio = partesURL.length - 3;
        console.log("La resta es: " + (partesURL.length - 3));
    }

    console.log("las partesURL es resta: " + partesURL);
    console.log("El nivel actual es: " + nivelSubdirectorio);

    // Si estás en la raíz, el prefijo es "./"
    if (nivelSubdirectorio === 1) {
        return "./";
    }

    // Si estás en un subdirectorio, devuelve ".." repetido según el nivel
    if (nivelSubdirectorio >= 2) {
        return "../".repeat(nivelSubdirectorio - 1);
    }

    console.log("El nivel actual es: " + nivelSubdirectorio);
}

function cargarHeaderYFooter() {

    var relativePrefix = calcularNivelDirectorio();
    var rutaHeader = relativePrefix + "pages/header.html";
    var rutaFooter = relativePrefix + "pages/footer.html";

    console.log("La ruta al header es: " + rutaHeader);
    
    console.log("La ruta al footer es: " + rutaFooter);
        
    // Cargar el header
    fetch(rutaHeader)
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
    
            // Actualizar las rutas de las imágenes en el header
            var logoDelicias = document.querySelector(".logoDelicias");
            logoDelicias.src =  relativePrefix + "images/logo_recetas_deliciosas.png";
    
            var enlaceLogoDelicias = document.querySelector(".enlace_logo_delicias");
            enlaceLogoDelicias.href = relativePrefix + "index.html";
                          
            var fotoNicolas = document.querySelector(".foto_nicolas");
            fotoNicolas.src = relativePrefix + "images/foto_nicolas.jpg";
    
            var enlaceNicolas = document.querySelector(".enlace_nicolas");
            enlaceNicolas.href = relativePrefix + "pages/nicorecetas.html";
    
            var fotoSabrina = document.querySelector(".foto_sabrina");
            fotoSabrina.src = relativePrefix + "images/foto_sabrina.jpg";
    
            var enlaceSabrina = document.querySelector(".enlace_sabrina");
            enlaceSabrina.href = relativePrefix + "pages/recetas_sabrina.html";
    
            var fotoNati = document.querySelector(".foto_natalia");
            fotoNati.src = relativePrefix + "images/foto_natalia.jpeg";
    
            var enlaceNatalia = document.querySelector(".enlace_natalia");
            enlaceNatalia.href = relativePrefix + "pages/recetas_natalia.html";
                
            var fotoPablo = document.querySelector(".foto_pablo");
            fotoPablo.src = relativePrefix + "images/foto_pablo.jpg";
    
            var enlacePablo = document.querySelector(".enlace_pablo");
            enlacePablo.href = relativePrefix + "pages/recetas_pablo.html";
    });
    
    // Cargar el footer
    fetch(rutaFooter)
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
    
            // Actualizar las rutas de las imágenes en el footer
            var logoGrupo = document.querySelector(".logo-grupo");
            logoGrupo.src = relativePrefix + "images/logo_grupo_8.png";
    
            var logoCodoACodo = document.querySelector(".logo-codo-a-codo");
            logoCodoACodo.src = relativePrefix + "images/logo_codo_a_codo.png";

            var enlaceContacto = document.querySelector(".enlace-contacto");
            enlaceContacto.href = relativePrefix + "pages/contacto.html";
    });

}    

cargarHeaderYFooter();

var header = document.querySelector(".header");

// Función para agregar o quitar la clase "shrink" al header al hacer scroll hacia abajo
function shrinkHeader() {
    if (window.scrollY > 0) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
}

// Agrega un evento de desplazamiento (scroll) para llamar a la función shrinkHeader
window.addEventListener("scroll", shrinkHeader);

// Asignar la función al evento 'submit' del formulario
document.getElementById("formulario-contacto").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se recargue la página
    mostrarMensaje(); // Llama a la función para mostrar el mensaje
});

function mostrarMensaje() {
    // Aca personalizar el mensaje
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo muy pronto.");
}

// // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Obtén una referencia al formulario y al campo de entrada
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

searchForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que se envíe el formulario y se recargue la página

    const searchTerm = searchInput.value;

    if (searchTerm) {
        // Realiza la solicitud a la API con el término de búsqueda
        const apiUrl = `https://world.openfoodfacts.org/api/v2/product/${searchTerm}.json`;

        // Abre una nueva ventana o pestaña con el resultado de la búsqueda
        window.open(apiUrl);
    }
});


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById("search-form");

    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const searchInput = document.getElementById("search-input").value;

        // Redirige al usuario a la nueva página con el valor de búsqueda como parámetro
        window.location.href = `product.html?product-name=${searchInput}`;
    });
});



































/*function cargarHeaderYFooter() {
    // Obtener el nivel de subdirectorio actual (ajustado a 3 niveles)
    var nivelSubdirectorio = 3;

    // Construir un prefijo relativo para las imágenes en base al nivel del subdirectorio
    var relativePrefix = "";
    for (var i = 0; i < nivelSubdirectorio; i++) {
        relativePrefix += "../";
    }

    // Construir la ruta al archivo del header
    var rutaHeader = relativePrefix + "pages/header.html";
    // Construir la ruta al archivo del footer
    var rutaFooter = relativePrefix + "pages/footer.html";

    // Cargar el header
    fetch(rutaHeader)
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });

    // Cargar el footer
    fetch(rutaFooter)
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;

            var logoGrupo = document.querySelector(".logo-grupo");
            logoGrupo.src = relativePrefix + "images/logo_grupo_8.png";

            var logoCodoACodo = document.querySelector(".logo-codo-a-codo");
            logoCodoACodo.src = relativePrefix + "images/logo_codo_a_codo.png";
        });
}

cargarHeaderYFooter();

var header = document.querySelector(".header");

// Función para agregar o quitar la clase "shrink" al header al hacer scroll hacia abajo
function shrinkHeader() {
    if (window.scrollY > 0) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
}


// Agrega un evento de desplazamiento (scroll) para llamar a la función shrinkHeader
window.addEventListener("scroll", shrinkHeader);

// Asignar la función al evento 'submit' del formulario
document.getElementById("formulario-contacto").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se recargue la página
    mostrarMensaje(); // Llama a la función para mostrar el mensaje
});

function mostrarMensaje() {
    // Puedes personalizar el mensaje aquí
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo muy pronto.");
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*var header = document.querySelector(".header");

// Función para agregar o quitar la clase "shrink" al header al hacer scroll hacia abajo
function shrinkHeader() {
    if (window.scrollY > 0) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
}

// Agrega un evento de desplazamiento (scroll) para llamar a la función shrinkHeader
window.addEventListener("scroll", shrinkHeader);

function cargarHeaderYFooter() {
    // Obtener la ruta absoluta actual
    //var rutaAbsoluta = window.location.href;
    var rutaAbsoluta = location.pathname;

    // Calcular el nivel de subdirectorio actual
    var nivelSubdirectorio = (rutaAbsoluta.match(/\//g) || []).length;

    // Construir un prefijo relativo para las imágenes en base al nivel del subdirectorio
    var relativePrefix = "";
    for (var i = 0; i < nivelSubdirectorio; i++) {
        relativePrefix += "../";
    }

    // Construir la ruta al archivo del header
    var rutaHeader = "/pages/header.html";
    // Construir la ruta al archivo del footer
    var rutaFooter = "/pages/footer.html";
    
    // Cargar el header
    fetch(rutaHeader)
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;

            // Actualizar las rutas de las imágenes en el header
            var logoDelicias = document.querySelector(".logoDelicias");
            logoDelicias.src = relativePrefix + "/images/logo_recetas_deliciosas.png";

            var enlaceLogoDelicias = document.querySelector(".enlace_logo_delicias");
            enlaceLogoDelicias.href = relativePrefix + "/index.html";
                      
            var fotoNicolas = document.querySelector(".foto_nicolas");
            fotoNicolas.src = relativePrefix + "/images/foto_nicolas.jpg";

            var enlaceNicolas = document.querySelector(".enlace_nicolas");
            enlaceNicolas.href = relativePrefix + "/pages/nicorecetas.html";

            var fotoSabrina = document.querySelector(".foto_sabrina");
            fotoSabrina.src = relativePrefix + "/images/foto_sabrina.jpg";

            var enlaceSabrina = document.querySelector(".enlace_sabrina");
            enlaceSabrina.href = relativePrefix + "/pages/recetas_sabrina.html";

            var fotoNati = document.querySelector(".foto_natalia");
            fotoNati.src = relativePrefix + "/images/foto_natalia.jpeg";

            var enlaceNatalia = document.querySelector(".enlace_natalia");
            enlaceNatalia.href = relativePrefix + "/pages/recetas_natalia.html";
            
            var fotoPablo = document.querySelector(".foto_pablo");
            fotoPablo.src = relativePrefix + "/images/foto_pablo.jpg";

            var enlacePablo = document.querySelector(".enlace_pablo");
            enlacePablo.href = relativePrefix + "/pages/recetas_pablo.html";
        });

    // Cargar el footer
    fetch(rutaFooter)
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;

            // Actualizar las rutas de las imágenes en el footer
            var logoGrupo = document.querySelector(".logo-grupo");
            logoGrupo.src = relativePrefix + "/images/logo_grupo_8.png";

            var logoCodoACodo = document.querySelector(".logo-codo-a-codo");
            logoCodoACodo.src = relativePrefix + "/images/logo_codo_a_codo.png";
        });
}

cargarHeaderYFooter();

// Asignar la función al evento 'submit' del formulario
document.getElementById("formulario-contacto").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se recargue la página
    mostrarMensaje(); // Llama a la función para mostrar el mensaje
});

function mostrarMensaje() {
    // Puedes personalizar el mensaje aquí
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto con vos muy pronto.");
}*/
