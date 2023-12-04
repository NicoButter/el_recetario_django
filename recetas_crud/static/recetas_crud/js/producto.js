document.addEventListener("DOMContentLoaded", function() {
    const productDetails = document.getElementById("product-details");

    // Obtiene el nombre del producto de la URL
    const searchParams = new URLSearchParams(window.location.search);
    const productName = searchParams.get("product-name");

    // Realiza la solicitud a la API para buscar el producto por nombre
    fetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${productName}&json=1`)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo obtener el producto');
            }
            return response.json();
        })
        .then(data => {
            if (data.products.length > 0) {
                const productContainer = document.getElementById("product-container");

                // Dentro del bucle que itera a través de los productos
                data.products.forEach(product => {
                    const productContainer = document.getElementById("product-container");
                
                    // Crea un elemento de botón para mostrar detalles en el modal
                    const productButton = document.createElement("button");
                    productButton.classList.add("product-button");
                    productButton.setAttribute("data-product-id", product._id);
                    productButton.innerHTML = `
                        <div>
                            <h2>${product.product_name}</h2>
                            <img src="${product.image_url}" alt="${product.product_name}">
                            <p>${product.generic_name}</p>
                        </div>
                        <h3>detalles del producto</h3>
                    `;
                    productContainer.appendChild(productButton);
                });

            } else {
                productDetails.textContent = "Producto no encontrado";
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
    const productContainer = document.getElementById("product-container");
    const productModal = document.getElementById("product-modal");
    const productDetailsInModal = document.getElementById("product-details-in-modal");
    const closeModalButton = document.getElementById("close-modal-button");

    // Obtener los detalles del producto desde la API
    function getProductDetails(productID) {
        fetch(`https://world.openfoodfacts.org/api/v0/product/${productID}.json`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("No se pudo obtener los detalles del producto");
                }
                return response.json();
            })
            .then((data) => {
                // Crea la estructura de detalles del producto en el modal
                const productInfo = data.product;

                const productTitle = document.createElement("h2");
                productTitle.textContent = productInfo.product_name;

                const productImage = document.createElement("img");
                productImage.src = productInfo.image_url;
                productImage.alt = productInfo.product_name;

                // Agrega más detalles según tus necesidades
                const productDescription = document.createElement("p");
                productDescription.textContent = productInfo.generic_name;

                // Limpia cualquier contenido previo en el modal
                productDetailsInModal.innerHTML = "";

                // Agrega los detalles al modal
                productDetailsInModal.appendChild(productTitle);
                productDetailsInModal.appendChild(productImage);
                productDetailsInModal.appendChild(productDescription);

                // Abre el modal
                productModal.style.display = "block";
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    // Maneja el clic en un resultado
    productContainer.addEventListener("click", function (event) {
        const target = event.target;
        if (target.classList.contains("product-button")) {
            // Obtiene el ID del producto desde el atributo "data-product-id" del botón
            const productID = target.getAttribute("data-product-id");
            if (productID) {
                getProductDetails(productID);
            }
        }
    });

    // Cierra el modal cuando se hace clic en el botón de cierre
    closeModalButton.addEventListener("click", function () {
        productModal.style.display = "none";
    });
});