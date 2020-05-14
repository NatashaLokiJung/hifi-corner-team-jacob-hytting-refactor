"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var manufacturers = [];
  fetch("data/product_data_dummy.json").then(function (response) {
    return response.json();
  }).then(function (data) {
    var manuAsideLeft = document.querySelector('.shopkategorier__aside_left-2');
    data.products.forEach(function (products) {
      if (manufacturers.indexOf(products.brand) != -1) {
        return;
      }

      manufacturers.push(products.brand);
      var sectionLeft = document.createElement('ul');
      sectionLeft.setAttribute('data-brand', products.brand);
      sectionLeft.innerHTML = "  \n                <li class=\"shopkategorier__links_manufacturer\"><a class=\"shopkategorier__links_sorterurl\" href=\"shop_kategorier.html?brand=".concat(products.brand, "\">").concat(products.brand, "</a></li>\n                ");
      manuAsideLeft.appendChild(sectionLeft);
    });
  });
});
//# sourceMappingURL=fetch_manufactur_left.js.map
