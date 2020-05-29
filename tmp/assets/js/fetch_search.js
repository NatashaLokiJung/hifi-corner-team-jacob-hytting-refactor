document.addEventListener("DOMContentLoaded", function (){

    let current_URL = window.location.search;
    let search_params = new URLSearchParams(current_URL);
    let params_search = search_params.get("searchbar");


    fetch("https://hifi-corner.herokuapp.com/api/v1/products", {
        "method": "GET",
    })
        .then(response => response.json())
        .then(data => {

        let shop_box = document.querySelector(".shop__kategorier_nest");
        let breadcrumbs_text = document.querySelector(".breadcrumbs");
        let currentPageTitle = document.querySelector(".currentpage-titel");
        let current_data = filterSearch(data, params_search);

        
        function filterSearch(arr, search) {
            return arr.filter(function(el) {
                return (el.model.indexOf(search) !== -1 || el.category.indexOf(search) !== -1 || el.make.indexOf(search) !== -1)
            });
        }
        
        console.log(current_data);

        if (params_search) {
            breadcrumbs_text.innerHTML = `<span class="breadcrumbs__home"><a href="kategoriliste/" class="breadcrumbs__home_active">Home</a></span> / ${params_search}</a></span>`;
            currentPageTitle.innerHTML = `${params_search}`;
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
                <a class="putinbasket button_brown-button" href="/product/?id=${product.sku}">ADD TO CART</a>
            `;

            shop_box.appendChild(shop_varer);
        });
    });
});
//# sourceMappingURL=fetch_search.js.map
