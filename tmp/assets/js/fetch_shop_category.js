"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var current_URL = window.location.search;
  var search_params = new URLSearchParams(current_URL);
  var params_category = search_params.get("category");
  fetch("data/product_data_dummy.json").then(function (response) {
    return response.json();
  }).then(function (data) {
    var shop_box = document.querySelector(".shop__kategorier_nest");
    var breadcrumbs_text = document.querySelector(".breadcrumbs");
    var currentPageTitle = document.querySelector(".currentpage-titel");
    var current_data;

    if (params_category == "Shop by brand" || params_category == "Shop now") {
      current_data = data.products;
    } else {
      current_data = data.products.filter(function (product) {
        return product.category == params_category;
      });
    }

    if (params_category) {
      breadcrumbs_text.innerHTML = "<span class=\"breadcrumbs__home\"><a href=\"kategoriliste.html\" class=\"breadcrumbs__home_active\">Home</a></span> / ".concat(params_category, "</a></span>");
      currentPageTitle.innerHTML = "".concat(params_category);
    }

    current_data.forEach(function (product) {
      var shop_varer = document.createElement("div");
      shop_varer.className = "shopkategorier__varer";
      shop_varer.setAttribute("data-id", product.id);
      shop_varer.innerHTML = "\n            <div class=\"shop__kategorier_box\">\n                <img class=\"shop__kategorier_varebillede\" src=\"images/produktbilleder/".concat(product.image_folder, "/").concat(product.image, "\" alt=\"varebillede\">\n            </div>\n                <p class=\"product__text\">").concat(product.name, "</p>\n            <div class=\"price-boxes\">\n                <p class=\"product__pricesale\">").concat(product.price, "</p>\n                <p class=\"product__price\">").concat(product.sale, "</p>\n            </div>\n                <a class=\"putinbasket button_brown-button\" href=\"product.html?id=").concat(product.id, "\">ADD TO CART</a>\n            ");
      shop_box.appendChild(shop_varer);
    });
  });
});
//# sourceMappingURL=fetch_shop_category.js.map
