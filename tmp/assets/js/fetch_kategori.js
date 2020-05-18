document.addEventListener("DOMContentLoaded", function (){

    fetch("https://hifi-corner.herokuapp.com/api/v1/categories", {
        "method": "GET",

     })
    .then(response => response.json())
    .then(data => {

        let kategoriSection = document.querySelector('.kategori');
        
        data.forEach(kategori => {

            let section = document.createElement('section');
            section.setAttribute('data-category', kategori);
            section.innerHTML = `  
            <div class="kategori__box" style="background-image: url('images/${kategori}/${kategori}" alt="${kategori}');"> 
            <a class="kategori__link" href="/shop_kategorier/index.html?category=${kategori}">${kategori}
            </a></div>
            `;
            
            kategoriSection.appendChild(section);
        });
    })
})

//# sourceMappingURL=fetch_kategori.js.map
