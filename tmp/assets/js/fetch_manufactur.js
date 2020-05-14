"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var manufacturers = [];
  fetch("data/product_data_dummy.json").then(function (response) {
    return response.json();
  }).then(function (data) {
    var manuAside = document.querySelector('.manufacturer__aside_right');
    data.products.forEach(function (products) {
      if (manufacturers.indexOf(products.brand) != -1) {
        return;
      }

      manufacturers.push(products.brand);
      var section = document.createElement('ul');
      section.setAttribute('data-brand', products.brand);
      section.innerHTML = "  \n            <li class=\"manufacturer__links\"><a class=\"manufacturer__links_url\" href=\"shop_kategorier.html?brand=".concat(products.brand, "\">").concat(products.brand, "</a></li> \n            ");
      manuAside.appendChild(section);
    });
  });
});
//# sourceMappingURL=fetch_manufactur.js.map
