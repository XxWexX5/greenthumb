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

function searchProduct( sunlight, water, pets ) {
     const valueSunlight = selectSunlight.options[selectSunlight.selectedIndex].value;
     const valueWater = selectWater.options[selectWater.selectedIndex].value;
     const valuePets = selectPets.options[selectPets.selectedIndex].value;

     const url = `https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${ valueSunlight }&water=${ valueWater }&pets=${ valuePets }`;

     fetch(url)
          .then((resp) => resp.json())
          .then(function(data) {
               const results = document.querySelector('.results');
               const noResults = document.querySelector('.no-results');

               console.log( data );

               if( data.length > 0 ) {
                    results.classList.remove("hide");
                    noResults.classList.add("hide");

                    const card = document.createElement("div");
                    card.setAttribute("class", "card card-product product-staff-favorite");

                    addingTagStaffFavorite( card );
                    creatingMainCardProduct( card );       
                    creatingFooterCardProduct( card );       

                    // ✨ Staff favorite

                    const elementWrapperProducts = document.getElementById("wrapper-products");
                    elementWrapperProducts.appendChild(card);

                    /*
                    <div class="card card-product">
                         
                    </div>
                    */
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

function creatingMainCardProduct( card ) {
     const mainCard = document.createElement("main");
     mainCard.setAttribute("class", "main-card");

     const divContainerImage = document.createElement("div");
     divContainerImage.setAttribute("class", "container-image");

     const img = document.createElement("img");
     img.setAttribute("class", "image");
     img.src = "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/ficus-lyrata.png";
     img.alt = "Image Product.";

     divContainerImage.appendChild( img );
     mainCard.appendChild( divContainerImage );

     return card.appendChild( mainCard );
}

function creatingFooterCardProduct( card ) {
     const footerCard = document.createElement("footer");
     footerCard.setAttribute("class", "footer-card");

     const row01 = document.createElement("div");
     row01.setAttribute("class", "row row-01");
     
     const col01 = document.createElement("div");
     col01.setAttribute("class", "col col-01");
     
     const h3 = document.createElement("h3");
     const nodeH3 = document.createTextNode("Bunny ears cacti");
     h3.setAttribute("class", "title-product");
     h3.appendChild( nodeH3 );

     col01.appendChild( h3 );
     row01.appendChild( col01 );
     footerCard.appendChild( row01 );

     const row02 = document.createElement("div");
     row02.setAttribute("class", "row row-02");

     const col01Row02 = document.createElement("div");
     col01Row02.setAttribute("class", "col col-01");

     const strong = document.createElement("strong");
     const nodeStrong = document.createTextNode("$25");
     strong.setAttribute("class", "text-price");
     strong.appendChild( nodeStrong );

     col01Row02.appendChild( strong );
     row02.appendChild( col01Row02 );

     const col02Row02 = document.createElement("div");
     col02Row02.setAttribute("class", "col col-02");

     const divWapperIcons = document.createElement("div");
     divWapperIcons.setAttribute("class", "wrapper-icons");

     const containerImageDog = document.createElement("div");
     containerImageDog.setAttribute("class", "container-image container-image-dog");
     
     const containerImageSun = document.createElement("div");
     containerImageSun.setAttribute("class", "container-image container-image-sun");
     
     const containerImageWater = document.createElement("div");
     containerImageWater.setAttribute("class", "container-image container-image-water");

     divWapperIcons.appendChild( containerImageDog );
     divWapperIcons.appendChild( containerImageSun );
     divWapperIcons.appendChild( containerImageWater );

     col02Row02.appendChild( divWapperIcons );
     row02.appendChild( col02Row02 );

     footerCard.appendChild( row02 );

     return card.appendChild( footerCard );

     /*
          <footer class="footer-card">
               <div class="row row-02">
                    <div class="col col-02">
                         <div class="wrapper-icons">
                              <div class="">
                                   <img src="images/icon-dog.svg" class="image image-dog" alt="Icon dog." />
                              </div>
                              
                              <div class="container-image container-image-sun">
                                   <img src="images/icon-sun.svg" class="image image-sun" alt="Icon sun." />
                              </div>
                              
                              <div class="container-image container-image-water">
                                   <img src="images/icon-water.svg" class="image image-water" alt="Icon water." />
                              </div>
                         </div>
                    </div>
               </div>
          </footer>
     */
}