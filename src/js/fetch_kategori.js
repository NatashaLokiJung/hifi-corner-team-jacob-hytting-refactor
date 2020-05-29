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
            <div class="kategori__box" style="background-image: url('/assets/images/category_list/${kategori}.jpg" alt="${kategori.model}')";> 
            <a class="kategori__link" href="/shop_kategorier/?category=${kategori}">${kategori}
            </a></div>
            `;
            
            kategoriSection.appendChild(section);
        });
    })
})
