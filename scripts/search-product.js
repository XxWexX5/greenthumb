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

     if( 
          (valueSunlight !== "") &&  
          (valueWater !== "") &&  
          (valuePets !== "")
     ) {
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

                    const distanceTop = results.offsetTop;
                    smoothScrollTo(  0, distanceTop, 650 );

                    data.filter( element => element.staff_favorite ).map( productStaffFavorite => {
                         addingProductStaffFavorite( productStaffFavorite );
                    })
                    
                    data.filter( element => !element.staff_favorite ).map( product => {
                         addingProduct( product );
                    })

               }else {
                    noResults.classList.remove("hide");
                    results.classList.add("hide");

                    const distanceTop = noResults.offsetTop;
                    smoothScrollTo(  0, distanceTop, 650 );
               }
          })
          .catch(function( error ) {
               console.log(error);
          });
     }
}

function addingTagStaffFavorite( card ) {
     const tagFavorite = document.createElement("div");
     tagFavorite.setAttribute("class", "tag-favorite tag-showing");

     const strongFavorite = document.createElement("strong");
     const nodeStrongFavorite = document.createTextNode("✨ Staff favorite");

     strongFavorite.setAttribute("tabindex", "0");
     strongFavorite.setAttribute("class", "text");
     strongFavorite.appendChild( nodeStrongFavorite );

     tagFavorite.appendChild( strongFavorite );

     return card.appendChild( tagFavorite );
}

function creatingMainCardProduct( card, product ) {
     const mainCard = document.createElement("main");
     mainCard.setAttribute("class", "main-card");

     const divContainerImage = document.createElement("div");
     divContainerImage.setAttribute("class", "container-image");

     const img = document.createElement("img");
     img.setAttribute("tabindex", "0");
     img.setAttribute("class", "image");
     img.src = product.url;
     img.alt = product.name;

     divContainerImage.appendChild( img );
     mainCard.appendChild( divContainerImage );

     return card.appendChild( mainCard );
}

function creatingFooterCardProduct( card, product ) {
     const footerCard = document.createElement("footer");
     footerCard.setAttribute("class", "footer-card");

     const row01 = document.createElement("div");
     row01.setAttribute("class", "row row-01");
     
     const col01 = document.createElement("div");
     col01.setAttribute("class", "col col-01");
     
     const h3 = document.createElement("h3");
     const nodeH3 = document.createTextNode(product.name);
     h3.setAttribute("tabindex", "0");
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
     strong.setAttribute("tabindex", "0");
     strong.setAttribute("class", "text-price");
     strong.appendChild( nodeStrong );

     col01Row02.appendChild( strong );
     row02.appendChild( col01Row02 );

     const col02Row02 = document.createElement("div");
     col02Row02.setAttribute("class", "col col-02");

     const divWapperIcons = document.createElement("div");
     divWapperIcons.setAttribute("class", "wrapper-icons");

     if( !!product.toxicity ) {
          const containerImageNoPets = document.createElement("div");
          containerImageNoPets.setAttribute("aria-label", "No pet.");
          containerImageNoPets.setAttribute("tabindex", "0");
          containerImageNoPets.setAttribute("class", "container-image container-image-no-pets");

          divWapperIcons.appendChild( containerImageNoPets );
     } else {
          const containerImagePets = document.createElement("div");
          containerImagePets.setAttribute("aria-label", "With pet.");
          containerImagePets.setAttribute("tabindex", "0");
          containerImagePets.setAttribute("class", "container-image container-image-pets");

          divWapperIcons.appendChild( containerImagePets );
     }

     if( product.sun === "high" ) {
          const containerImageSunHigh = document.createElement("div");
          containerImageSunHigh.setAttribute("aria-label", "With sun high.");
          containerImageSunHigh.setAttribute("tabindex", "0");
          containerImageSunHigh.setAttribute("class", "container-image container-image-sun-high");

          divWapperIcons.appendChild( containerImageSunHigh );
     } else if( product.sun === "low" ) {
          const containerImageSunLow = document.createElement("div");
          containerImageSunLow.setAttribute("aria-label", "With sun low.");
          containerImageSunLow.setAttribute("tabindex", "0");
          containerImageSunLow.setAttribute("class", "container-image container-image-sun-low");

          divWapperIcons.appendChild( containerImageSunLow );
     } else {
          const containerImageSunNo = document.createElement("div");
          containerImageSunNo.setAttribute("aria-label", "With no sun.");
          containerImageSunNo.setAttribute("tabindex", "0");
          containerImageSunNo.setAttribute("class", "container-image container-image-sun-no");

          divWapperIcons.appendChild( containerImageSunNo );
     }

     if( product.water === 'rarely' ) {
          const containerImageWaterRarely = document.createElement("div");
          containerImageWaterRarely.setAttribute("aria-label", "Water rarely.");
          containerImageWaterRarely.setAttribute("tabindex", "0");
          containerImageWaterRarely.setAttribute("class", "container-image container-image-water-rarely");

          divWapperIcons.appendChild( containerImageWaterRarely );
     } else if( product.water === 'daily' ) {
          const containerImageWaterDaily = document.createElement("div");
          containerImageWaterDaily.setAttribute("aria-label", "Water daily.");
          containerImageWaterDaily.setAttribute("tabindex", "0");
          containerImageWaterDaily.setAttribute("class", "container-image container-image-water-daily");

          divWapperIcons.appendChild( containerImageWaterDaily );
     } else {
          const containerImageWaterRegularly = document.createElement("div");
          containerImageWaterRegularly.setAttribute("aria-label", "Water regularly.");
          containerImageWaterRegularly.setAttribute("tabindex", "0");
          containerImageWaterRegularly.setAttribute("class", "container-image container-image-water-regularly");

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
     cardProduct.setAttribute("id", `card-product-${ product.id }`);

     addingTagStaffFavorite( cardProduct );
     creatingMainCardProduct( cardProduct, product );       
     creatingFooterCardProduct( cardProduct, product );

     const elementWrapperProducts = document.getElementById("wrapper-products");
     elementWrapperProducts.appendChild(cardProduct);
}

function addingProduct( product ) {
     const cardProduct = document.createElement("div");
     cardProduct.setAttribute("class", "card card-product");
     cardProduct.setAttribute("id", `card-product-${ product.id }`);

     creatingMainCardProduct( cardProduct, product );       
     creatingFooterCardProduct( cardProduct, product );

     const elementWrapperProducts = document.getElementById("wrapper-products");
     elementWrapperProducts.appendChild(cardProduct);
}

function smoothScrollTo(endX, endY, duration) {
     const startX = window.scrollX || window.pageXOffset;
     const startY = window.scrollY || window.pageYOffset;
     const distanceX = endX - startX;
     const distanceY = endY - startY;
     const startTime = new Date().getTime();

     duration = typeof duration !== 'undefined' ? duration : 400;

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
     }, 1000 / 60);
};
