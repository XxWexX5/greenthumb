const selectSunlight = document.getElementById("options-sunlight");
const selectWater = document.getElementById("options-water");
const selectPets = document.getElementById("options-pets");
const allOptions = document.querySelectorAll(".select");

allOptions.forEach( option => {
     option.addEventListener( "change", searchProduct );
});

function getValueSelect( element ) {
     return element.options[element.selectedIndex].value;
}

function searchProduct() {
     const valueSunlight = selectSunlight.options[selectSunlight.selectedIndex].value;
     const valueWater = selectWater.options[selectWater.selectedIndex].value;
     const valuePets = selectPets.options[selectPets.selectedIndex].value;

     const url = `https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${ valueSunlight }&water=${ valueWater }&pets=${ valuePets }`;

     fetch(url)
          .then((resp) => resp.json())
          .then(function(data) {
               const results = document.querySelector('.results');
               const noResults = document.querySelector('.no-results');

               const elementWrapperProducts = document.getElementById("wrapper-products");
               elementWrapperProducts.innerHTML = "";

               if( data.length > 0 ) {
                    results.classList.remove("hide");
                    noResults.classList.add("hide");

                    data.filter( element => element.staff_favorite ).map( productStaffFavorite => {
                         addingProductStaffFavorite( productStaffFavorite );
                    })
                    
                    data.filter( element => !element.staff_favorite ).map( product => {
                         addingProduct( product );
                    })

               }else {
                    noResults.classList.remove("hide");
                    results.classList.add("hide");

                    const distanceTop = document.body.scrollTop;
                    smoothScrollTo(  0, distanceTop + 500, 650 );
               }
          })
          .catch(function( error ) {
               console.log(error);
          });
}

function smoothScrollTo(endX, endY, duration) {
     const startX = window.scrollX || window.pageXOffset;
     const startY = window.scrollY || window.pageYOffset;
     const distanceX = endX - startX;
     const distanceY = endY - startY;
     const startTime = new Date().getTime();

     duration = typeof duration !== 'undefined' ? duration : 400;

     // Easing function
     const easeInOutQuart = (time, from, distance, duration) => {
       if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
       return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
     };

     const timer = setInterval(() => {
          const time = new Date().getTime() - startTime;
          const newX = easeInOutQuart(time, startX, distanceX, duration);
          const newY = easeInOutQuart(time, startY, distanceY, duration);
          if (time >= duration) {
               clearInterval(timer);
          }
          window.scroll(newX, newY);
     }, 1000 / 60); // 60 fps
};

function addingTagStaffFavorite( card ) {
     const tagFavorite = document.createElement("div");
     tagFavorite.setAttribute("class", "tag-favorite tag-showing");

     const strongFavorite = document.createElement("strong");
     const nodeStrongFavorite = document.createTextNode("✨ Staff favorite");

     strongFavorite.setAttribute("class", "text");
     strongFavorite.appendChild( nodeStrongFavorite );

     tagFavorite.appendChild( strongFavorite );

     return card.appendChild( tagFavorite );
}

function creatingMainCardProduct( card, product ) {
     console.log( product );

     const mainCard = document.createElement("main");
     mainCard.setAttribute("class", "main-card");

     const divContainerImage = document.createElement("div");
     divContainerImage.setAttribute("class", "container-image");

     const img = document.createElement("img");
     img.setAttribute("class", "image");
     img.src = product.url;
     img.alt = product.name;

     divContainerImage.appendChild( img );
     mainCard.appendChild( divContainerImage );

     return card.appendChild( mainCard );
}

function creatingFooterCardProduct( card, product ) {
     console.log( product )

     const footerCard = document.createElement("footer");
     footerCard.setAttribute("class", "footer-card");

     const row01 = document.createElement("div");
     row01.setAttribute("class", "row row-01");
     
     const col01 = document.createElement("div");
     col01.setAttribute("class", "col col-01");
     
     const h3 = document.createElement("h3");
     const nodeH3 = document.createTextNode("Bunny ears cacti");
     h3.setAttribute("class", 'title-product');
     h3.appendChild( nodeH3 );

     col01.appendChild( h3 );
     row01.appendChild( col01 );
     footerCard.appendChild( row01 );

     const row02 = document.createElement("div");
     row02.setAttribute("class", "row row-02");

     const col01Row02 = document.createElement("div");
     col01Row02.setAttribute("class", "col col-01");

     const strong = document.createElement("strong");
     const nodeStrong = document.createTextNode(product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
     strong.setAttribute("class", "text-price");
     strong.appendChild( nodeStrong );

     col01Row02.appendChild( strong );
     row02.appendChild( col01Row02 );

     const col02Row02 = document.createElement("div");
     col02Row02.setAttribute("class", "col col-02");

     const divWapperIcons = document.createElement("div");
     divWapperIcons.setAttribute("class", "wrapper-icons");

     const containerImagePets = document.createElement("div");
     containerImagePets.setAttribute("class", "container-image container-image-pets");

     const containerImageNoPets = document.createElement("div");
     containerImageNoPets.setAttribute("class", "container-image container-image-no-pets");
     
     const containerImageSunHigh = document.createElement("div");
     containerImageSunHigh.setAttribute("class", "container-image container-image-sun-high");
     
     const containerImageSunLow = document.createElement("div");
     containerImageSunLow.setAttribute("class", "container-image container-image-sun-low");
     
     const containerImageSunNo = document.createElement("div");
     containerImageSunNo.setAttribute("class", "container-image container-image-sun-no");
     
     const containerImageWaterRarely = document.createElement("div");
     containerImageWaterRarely.setAttribute("class", "container-image container-image-water-rarely");
     
     const containerImageWaterDaily = document.createElement("div");
     containerImageWaterDaily.setAttribute("class", "container-image container-image-water-daily");
     
     const containerImageWaterRegularly = document.createElement("div");
     containerImageWaterRegularly.setAttribute("class", "container-image container-image-water-regularly");

     if( !!product.toxicity ) {
          divWapperIcons.appendChild( containerImageNoPets );
     } else {
          divWapperIcons.appendChild( containerImagePets );
     }

     if( product.sun === "high" ) {
          divWapperIcons.appendChild( containerImageSunHigh );
     } else if( product.sun === "low" ) {
          divWapperIcons.appendChild( containerImageSunLow );
     } else {
          divWapperIcons.appendChild( containerImageSunNo );
     }

     if( product.water === 'rarely' ) {
          divWapperIcons.appendChild( containerImageWaterRarely );
     } else if( product.water === 'daily' ) {
          divWapperIcons.appendChild( containerImageWaterDaily );
     } else {
          divWapperIcons.appendChild( containerImageWaterRegularly );
     }

     col02Row02.appendChild( divWapperIcons );
     row02.appendChild( col02Row02 );

     footerCard.appendChild( row02 );

     return card.appendChild( footerCard );
}

function addingProductStaffFavorite( product ) {
     const cardProduct = document.createElement("div");
     cardProduct.setAttribute("class", "card card-product product-staff-favorite");

     addingTagStaffFavorite( cardProduct );
     creatingMainCardProduct( cardProduct, product );       
     creatingFooterCardProduct( cardProduct, product );

     const elementWrapperProducts = document.getElementById("wrapper-products");
     elementWrapperProducts.appendChild(cardProduct);
}

function addingProduct( product ) {
     const cardProduct = document.createElement("div");
     cardProduct.setAttribute("class", "card card-product");

     creatingMainCardProduct( cardProduct, product );       
     creatingFooterCardProduct( cardProduct, product );

     const elementWrapperProducts = document.getElementById("wrapper-products");
     elementWrapperProducts.appendChild(cardProduct);
}