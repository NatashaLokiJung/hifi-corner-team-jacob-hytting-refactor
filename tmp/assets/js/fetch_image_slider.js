"use strict";

document.addEventListener("DOMContentLoaded", function () {
  fetch("data/product_data_dummy.json").then(function (response) {
    return response.json();
  }).then(function (data) {
    var sliderSection = document.querySelector('.image-slider__container_image');
    data.products.forEach(function (products) {
      var section = document.createElement('section');
      section.className = "mySlides";
      section.setAttribute('data-id', products.id);
      section.innerHTML = " \n                <div class=\"image-slider__container\">\n                        <div class=\"image-slider__text\">\n                        ".concat(products.name, "\n                    </div>\n                        <div class=\"fade\">\n                        <a href=\"shop_kategorier.html?id=").concat(products.name, "\">\n                        <img src=\"images/produktbilleder/").concat(products.image_folder, "/").concat(products.image, "\" class=\"pics\" alt=\"").concat(products.name, "\" /></a>\n                        </div>\n                </div>\n            ");
      sliderSection.appendChild(section);
    });
  }).then(function () {
    var slideIndex = 0;
    showSlides();
    var prev = document.querySelector("#prev");
    var next = document.querySelector("#next");
    prev.addEventListener("click", nextSlide);

    function nextSlide() {
      plusSlides(-1);
    }

    next.addEventListener("click", nextSlide);

    function nextSlide() {
      plusSlides(1);
    }

    var slides, timer;

    function showSlides() {
      var i;
      slides = document.getElementsByClassName("mySlides");

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      slideIndex++;

      if (slideIndex > slides.length) {
        slideIndex = 1;
      }

      slides[slideIndex - 1].style.display = "block";
      timer = setTimeout(showSlides, 4000); // antal milisekunder pr. billede
    }

    function plusSlides(position) {
      //stopper timeren ved klik
      clearTimeout(timer);
      slideIndex += position;

      if (slideIndex > slides.length) {
        slideIndex = 1;
      } else if (slideIndex < 1) {
        slideIndex = slides.length;
      }

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      slides[slideIndex - 1].style.display = "block"; // laver en ny timer

      timer = setTimeout(showSlides, 4000);
    }

    function currentSlide(index) {
      //stopper timeren ved klik
      clearTimeout(timer);

      if (index > slides.length) {
        index = 1;
      } else if (index < 1) {
        index = slides.length;
      } //sæt slideIndex med index af funktionen


      slideIndex = index;

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      slides[index - 1].style.display = "block"; // laver en ny timer

      timer = setTimeout(showSlides, 4000);
    }
  });
});
//# sourceMappingURL=fetch_image_slider.js.map
