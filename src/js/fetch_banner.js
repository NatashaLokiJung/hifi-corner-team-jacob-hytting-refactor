
    fetch("data/banner_text.json")
        .then(response => response.json())
        .then(data => {

            let bannerSection = document.querySelector('.banner');
            data.banner.forEach(banner => {

                let section = document.createElement('section');
                section.className = "banner__text";
                section.innerHTML = ` 
                
                ${banner.text}
        
            `;
                bannerSection.appendChild(section);
            });
        })

