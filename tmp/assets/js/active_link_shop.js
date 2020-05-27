document.addEventListener("DOMContentLoaded", function () {

  function setNavigation() {

    let currentLocation = location.pathname.split('/')[1];

    if (currentLocation === "") return;

    let menuItem = document.querySelector(".navigation").getElementsByClassName("navigation__link");
    let menuLength = menuItem.length;

    for (let i = 0; i < menuLength; i++) {
      if (menuItem[i].getAttribute("href").indexOf(currentLocation) == 1) {
        menuItem[i].classList.add('navigation__link_active');
      } else {
        menuItem[i].classList.remove('navigation__link_active');
      }
    }
  }

  setNavigation()







});
//# sourceMappingURL=active_link_shop.js.map
