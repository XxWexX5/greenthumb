const arrowDown = document.getElementById("wrapper-move-down");
const buttonTop = document.getElementById("button-go-top");
const selectSun = document.getElementById("options-sunlight");
const selectWater = document.getElementById("options-water");
const selectDog = document.getElementById("options-pets");

arrowDown.addEventListener("click", scrollToIdOnClick);
buttonTop.addEventListener("click", scrollToTop);

selectSun.addEventListener("change", function() {
    const distanceTop = selectWater.parentElement.offsetTop;

    smoothScrollTo(  0, distanceTop - 50, 650 );
});

selectWater.addEventListener("change", function() {
    const distanceTop = selectDog.parentElement.offsetTop;

    smoothScrollTo(  0, distanceTop - 50, 650 );
});

function scrollToTop( event ) {
    event.preventDefault();

    smoothScrollTo(  0, 0, 650 );
}

function scrollToIdOnClick( event ) {
    event.preventDefault();

    const element = event.target;
    const goTo = getScrollTopByHref( element );

    scrollToPosition( goTo );
}

function getScrollTopByHref( element ) {
    if( element.getAttribute("href") ) {
        const id = element.getAttribute("href");
        return (document.querySelector(id).offsetTop - 65);
    }
        
    const id = element.parentElement.getAttribute("href");    
    return (document.querySelector(id).offsetTop - 65);
}

function scrollToPosition( goTo ) {
    /*
    window.scroll({
        top: goTo,
        behavior: "smooth"
    });
    */

    smoothScrollTo(  0, goTo, 450 );
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