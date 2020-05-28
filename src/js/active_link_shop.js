document.addEventListener("DOMContentLoaded", function () {

  function setNavigation() {

    let currentLocation = location.pathname.split('/')[1];

    if (currentLocation === "") return;

    let menuItem = document.querySelector(".navigation").getElementsByClassName("navigation__link");
    let menuLength = menuItem.length;
    let shop = "kategoriliste";
    let product = "/";


    for (let i = 0; i < menuLength; i++) {
      if (menuItem[i].getAttribute("href").indexOf(currentLocation) == 1) {
        menuItem[i].classList.add('navigation__link_active');
      }else if(
        menuItem[i].getAttribute("href").indexOf(shop) == 1 || menuItem[i].getAttribute("href").indexOf(product) == 1){
        menuItem[i].classList.add('navigation__link_active')
      }else {
        menuItem[i].classList.remove('navigation__link_active');
      }
    }
  }

  setNavigation()

  //  netilify video https://www.youtube.com/watch?v=rs690lwkZ2E&list=PL14RtI8hHAjTGmSVsR-MpV2hReVNMqbEY&index=16
});