const arrowDown = document.getElementById("wrapper-move-down");

arrowDown.addEventListener("click", scrollToIdOnClick);

function scrollToIdOnClick( event ) {
    event.preventDefault();

    console.log(event.target);

    const element = event.target;
    const goTo = getScrollTopByHref( element );

    scrollToPosition( goTo );
}

function getScrollTopByHref( element ) {
    if( element.getAttribute("href") ) {
        const id = element.getAttribute("href");
        return document.querySelector(id).offsetTop;
    }
        
    const id = element.parentElement.getAttribute("href");    
    return document.querySelector(id).offsetTop;
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