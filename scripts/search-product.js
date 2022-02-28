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