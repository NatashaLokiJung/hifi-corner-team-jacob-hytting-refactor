document.addEventListener("DOMContentLoaded", function (){

    let current_URL = window.location.search;
    let search_params = new URLSearchParams(current_URL);
    let params_category = search_params.get("category");

    fetch("https://hifi-corner.herokuapp.com/api/v1/products", {
  "method": "GET",
 
})

    .then(response => response.json())
    .then(data => {

        let shop_box = document.querySelector(".shop__kategorier_nest");
        let breadcrumbs_text = document.querySelector(".breadcrumbs");
        let currentPageTitle = document.querySelector(".currentpage-titel")
        let current_data;

        if (params_category == "Shop by brand" || params_category == "Shop now") {
            current_data = data;
        }
        else {
            current_data = data.filter(product => product.category == params_category);
        }

        if (params_category) {
            breadcrumbs_text.innerHTML = `<span class="breadcrumbs__home"><a href="/kategoriliste" class="breadcrumbs__home_active">Home</a></span> / ${params_category}</a></span>`;
            currentPageTitle.innerHTML = `${params_category}`;
        }

        current_data.forEach(product => {

            let shop_varer = document.createElement("div");
            shop_varer.className = "shopkategorier__varer";
            shop_varer.setAttribute(`data-id`, product.sku);

            shop_varer.innerHTML = `
            <div class="shop__kategorier_box">
                <img class="shop__kategorier_varebillede" src="${product.images[0]}" alt="varebillede">
            </div>
                <p class="product__text">${product.model}</p>
            <div class="price-boxes">
                <p class="product__pricesale">${product.price}</p>
                
            </div>
                <a class="putinbasket button_brown-button" href="/product/?id=${product.sku}">ADD TO CART</a>
            `;

            shop_box.appendChild(shop_varer);
        });
    });
});