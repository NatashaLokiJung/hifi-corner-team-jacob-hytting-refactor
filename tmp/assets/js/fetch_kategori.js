"use strict";

document.addEventListener("DOMContentLoaded", function () {
  fetch("data/fetch_kategori.json").then(function (response) {
    return response.json();
  }).then(function (data) {
    var kategoriSection = document.querySelector('.kategori');
    data.kategori.forEach(function (kategori) {
      var section = document.createElement('section');
      section.setAttribute('data-category', kategori.name);
      section.innerHTML = "  \n            <div class=\"kategori__box\" style=\"background-image: url('images/".concat(kategori.image_folder, "/").concat(kategori.image, "\" alt=\"").concat(kategori.name, "');\"> \n            <a class=\"kategori__link\" href=\"shop_kategorier.html?category=").concat(kategori.category, "\">").concat(kategori.name, "\n            </a></div>\n            ");
      kategoriSection.appendChild(section);
    });
  });
});
//# sourceMappingURL=fetch_kategori.js.map
