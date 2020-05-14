"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var current_URL = window.location.search;
  var search_params = new URLSearchParams(current_URL);
  var params_search = search_params.get("searchbar");
  fetch("data/product_data_dummy.json").then(function (response) {
    return response.json();
  }).then(function (data) {
    var shop_box = document.querySelector(".shop__kategorier_nest");
    var breadcrumbs_text = document.querySelector(".breadcrumbs");
    var currentPageTitle = document.querySelector(".currentpage-titel");
    var current_data = filterSearch(data.products, params_search);

    function filterSearch(arr, search) {
      return arr.filter(function (el) {
        return el.name.indexOf(search) !== -1 || el.category.indexOf(search) !== -1 || el.brand.indexOf(search) !== -1;
      });
    }

    console.log(current_data);

    if (params_search) {
      breadcrumbs_text.innerHTML = "<span class=\"breadcrumbs__home\"><a href=\"kategoriliste.html\" class=\"breadcrumbs__home_active\">Home</a></span> / ".concat(params_search, "</a></span>");
      currentPageTitle.innerHTML = "".concat(params_search);
    }

    current_data.forEach(function (product) {
      var shop_varer = document.createElement("div");
      shop_varer.className = "shopkategorier__varer";
      shop_varer.setAttribute("data-id", product.id);
      shop_varer.innerHTML = "\n            <div class=\"shop__kategorier_box\">\n                <img class=\"shop__kategorier_varebillede\" src=\"images/produktbilleder/".concat(product.image_folder, "/").concat(product.image, "\" alt=\"varebillede\">\n            </div>\n                <p class=\"product__text\">").concat(product.name, "</p>\n                <a class=\"putinbasket button_brown-button\" href=\"product.html?id=").concat(product.id, "\">ADD TO CART</a>\n            ");
      shop_box.appendChild(shop_varer);
    });
  });
});
//# sourceMappingURL=fetch_search.js.map
