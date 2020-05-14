"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var current_URL = window.location.search;
  var search_params = new URLSearchParams(current_URL);
  var params_id = parseInt(search_params.get("id"));
  fetch("https://hifi-corner.herokuapp.com/api/v1/products").then(function (response) {
    return response.json();
  }).then(function (data) {
    var current_data = data.products.find(function (product) {
      return product.id == params_id;
    });
    var product_box = document.querySelector(".product-box");
    var product_preview = document.createElement("article");
    var product_description = document.createElement("article");
    var product_cart = document.createElement("article");
    var product_info = document.createElement("article");
    var product_details = document.createElement("article");
    var product_call = document.createElement("article");
    var h4 = document.createElement("h4");
    h4.className = "product-breadcrumbs";
    h4.innerHTML = "<a href=\"kategoriliste.html\" class=\"breadcrumbs__home_active\">Home</a> / \n                            <a href=\"shop_kategorier.html?category=".concat(current_data.category, "\" class=\"breadcrumbs__home_active\">").concat(current_data.category, "</a> \n                            / ").concat(current_data.name);
    product_box.appendChild(h4);
    product_preview.className = "product-preview";
    product_preview.innerHTML = "\n                <div class=\"preview-box\">\n                \n                    <div class=\"preview__image-box\">\n                        <img class=\"image-box__image\" src=\"images/produktbilleder/".concat(current_data.image_folder, "/").concat(current_data.image, "\">\n                    </div>\n\n                    <h2 class=\"heading__preview-text\">more views</h2>\n\n                    <ul class=\"thumb-list preview-box__thumb-list\">\n                        <li class=\"thumb\"><img class=\"thumb__image\" src=\"images/produktbilleder/").concat(current_data.image_folder, "/").concat(current_data.image, "\"></li>\n                        <li class=\"thumb\"><img class=\"thumb__image\" src=\"images/category_list/cat_amplifyer.jpg\"></li>\n                        <li class=\"thumb\"><img class=\"thumb__image\" src=\"images/category_list/cat_cd_players.jpg\"></li>\n                        <li class=\"thumb\"><img class=\"thumb__image\" src=\"images/category_list/cat_vinyl.jpg\"></li>\n                    </ul>\n                </div>\n            ");
    product_box.appendChild(product_preview);
    product_description.className = "product-description";
    product_description.innerHTML = "\n                <h2 class=\"heading__product-name\">".concat(current_data.name, "</h2>\n                <h4 class=\"link link__brand-link\">See other ").concat(current_data.brand, " products</h4>\n                <div class=\"price-box\">\n                <h3 class=\"heading__product-price\">").concat(current_data.price, "</h3>\n                <h2 class=\"heading__product-sale\">").concat(current_data.sale, "</h2>               \n                </div>\n                <p class=\"text__product-description\">").concat(current_data.description, "</p>\n\n                <ul class=\"button-list product__button-list\">\n                    <li class=\"button-list__item\"><a class=\"button button_brown-button\">ask a question</a></li>\n                    <li class=\"button-list__item\"><a class=\"button button_brown-button\">part exchange</a></li>\n                    <li class=\"button-list__item\"><a class=\"button button_brown-button\">pay by finance</a></li>\n                    <li class=\"button-list__item\"><a class=\"button button_brown-button\">seen a better price?</a></li>\n                </ul>\n            ");
    product_box.appendChild(product_description);
    product_cart.className = "product-cart";
    product_cart.innerHTML = "\n                <form class=\"product-form\">\n\n                    <fieldset class=\"product-form__variant\">\n\n                        <h3 class=\"product-variant__title\">Finish <span class=\"star\">*</span></h3>\n                        \n                        <div class=\"fetch-variant\"></div>\n\n                    </fieldset>\n\n                    <fieldset class=\"product-form__quantity\">\n\n                        <div class=\"product-form__quantity-box\">\n                            <label class=\"product-quantity__label\">Qty:</label>\n                            <input class=\"product-quantity__input\" type=\"number\" oninput=\"this.value=this.value.slice(0,this.maxLength)\" onkeypress=\"return isNumberKey(event)\" maxlength=\"2\" min=\"1\" max=\"99\" name=\"quantity\" value=\"1\">\n                            <button class=\"button product-form__submit button_brown-button\" type=\"submit\">add to cart</button>\n                            <p class=\"or\">-or-</p>\n                            <div class=\"paypal-button\" id=\"paypal-button\"></div>\n                        </div>\n\n                    </fieldset>\n\n                </form>\n            ";
    product_box.appendChild(product_cart);
    current_data.arrays.finish.forEach(function (finish) {
      var product_variant = document.querySelector(".fetch-variant");
      var variant_box = document.createElement("div");
      variant_box.className = "product-variant__variant-box";
      variant_box.innerHTML = "\n                    <input class=\"product-variant__input\" type=\"radio\" name=\"variant\" value=\"".concat(finish.text, "\">\n                    <label class=\"product-varaint__label\" for=\"black\">").concat(finish.text, "</label>\n                ");
      product_variant.appendChild(variant_box);
    });
    product_info.className = "product-info";
    product_info.innerHTML = "\n                <h2 class=\"heading__product-info\">additional information</h2>\n\n                <table class=\"info-table product-info__info-table\"></table>\n            ";
    product_box.appendChild(product_info);
    current_data.arrays.info.forEach(function (info) {
      var info_table = document.querySelector(".product-info__info-table");
      var table_row = document.createElement("tr");
      table_row.className = "info-table__table-row";
      table_row.innerHTML = "\n                    <td class=\"info-table__data-title\">".concat(info.text, "</td>\n                    <td class=\"info-table__data-value\">").concat(info.value, "</td>\n                ");
      info_table.appendChild(table_row);
    });
    product_details.className = "product-details";
    product_details.innerHTML = "\n                <h2 class=\"heading__product-details\">description</h2>\n\n                <table class=\"table product-detail__detail-table\"></table>\n            ";
    product_box.appendChild(product_details);
    current_data.arrays.detail.forEach(function (detail) {
      var detail_table = document.querySelector(".product-detail__detail-table");
      var table_row = document.createElement("tr");
      table_row.className = "detail-table__row";
      table_row.innerHTML = "\n                    <td class=\"detail-table__data-title\">".concat(detail.text, "</td>\n                    <td class=\"detail-table__data-value\">").concat(detail.value, "</td>\n                ");
      detail_table.appendChild(table_row);
    });
    product_call.className = "product-call";
    product_call.innerHTML = "\n                <article class=\"product-call\">\n                    <button class=\"product-call__button\" href=\"tel:888-888\"><i class=\"fas fa-phone-alt\"></i> CALL US ABOUT THIS PRODUCT</button>\n                </article>\n            ";
    product_box.appendChild(product_call);
  }).then(function () {
    var preview = document.querySelector(".image-box__image");
    var imgs = Array.from(document.querySelectorAll(".thumb"));
    imgs.forEach(function (thumb) {
      var thumbSrc = thumb.firstChild.getAttribute("src");
      thumb.addEventListener("click", function () {
        preview.setAttribute("src", thumbSrc);
      });
    });
  }).then(function () {
    paypal.Button.render({
      // Configure environment
      env: 'sandbox',
      client: {
        sandbox: 'demo_sandbox_client_id',
        production: 'demo_production_client_id'
      },
      // Customize button (optional)
      locale: 'en_US',
      style: {
        size: 'small',
        color: 'gold',
        shape: 'pill'
      },
      // Enable Pay Now checkout flow (optional)
      commit: true,
      // Set up a payment
      payment: function payment(data, actions) {
        return actions.payment.create({
          transactions: [{
            amount: {
              total: '0.01',
              currency: 'USD'
            }
          }]
        });
      },
      // Execute the payment
      onAuthorize: function onAuthorize(data, actions) {
        return actions.payment.execute().then(function () {
          // Show a confirmation message to the buyer
          window.alert('Thank you for your purchase!');
        });
      }
    }, '#paypal-button');
  });
});
//# sourceMappingURL=product_details.js.map
