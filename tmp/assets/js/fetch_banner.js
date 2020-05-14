"use strict";

document.addEventListener("DOMContentLoaded", function () {
  fetch("data/banner_text.json").then(function (response) {
    return response.json();
  }).then(function (data) {
    var bannerSection = document.querySelector('.banner');
    data.banner.forEach(function (banner) {
      var section = document.createElement('section');
      section.className = "banner__text";
      section.innerHTML = " \n                \n                ".concat(banner.text, "\n        \n            ");
      bannerSection.appendChild(section);
    });
  });
});
//# sourceMappingURL=fetch_banner.js.map
