document.addEventListener("DOMContentLoaded", function () {

    let manufacturers = [];

    fetch("https://hifi-corner.herokuapp.com/api/v1/brands", {
        "method": "GET",

    })
        .then(response => response.json())
        .then(data => {

            let manuAsideLeft = document.querySelector('.shopkategorier__aside_left-2');

            data.forEach(brands => {
                if (manufacturers.indexOf(brands.name) != -1) { return; }
                manufacturers.push(brands.name);

                let sectionLeft = document.createElement('ul');
                sectionLeft.setAttribute('data-brand', brands.name);
                sectionLeft.innerHTML = `  
                <li class="shopkategorier__links_manufacturer"><a class="shopkategorier__links_sorterurl" href="/shop_kategorier/?brand=${brands.name}">${brands.name}</a></li>
                `;

                manuAsideLeft.appendChild(sectionLeft);
            });
        })
})
//# sourceMappingURL=fetch_manufactur_left.js.map
