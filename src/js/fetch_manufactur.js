document.addEventListener("DOMContentLoaded", function (){

    let manufacturers = [];

   fetch("https://hifi-corner.herokuapp.com/api/v1/brands", {
        "method": "GET",
       
    })
        .then(response => response.json())
        .then(data => {

        let manuAside = document.querySelector('.manufacturer__aside_right');
        
        data.forEach(brands => {
            if (manufacturers.indexOf(brands.name) != -1) { return; }
            manufacturers.push(brands.name);

            let section = document.createElement('ul');
            section.setAttribute('data-brand', brands.name);
            section.innerHTML = `  
            <li class="manufacturer__links"><a class="manufacturer__links_url" href="shop_kategorier.html?brand=${brands.name}">${brands.name}</a></li> 
            `;
            
            manuAside.appendChild(section);
        });
    })
})