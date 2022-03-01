
const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
    const context = this;
    const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

let sunAnimated = false;
let wateringcanAnimated = false;
let dogAnimated = false;

document.getElementById("logo").addEventListener("load", function() {
    const doc = this.getSVGDocument();
    let delay = 550;

    const letterG = doc.querySelector("#letter-g");

    letterG.animate([
        { transform: 'translateX(-15px)', opacity: '0' },
        { transform: 'translateX(0px)', opacity: '1' }
    ], {
        delay: delay,
        duration: 150,
        iterations: 1,
        fill: 'forwards'
    });
    
    const letterR = doc.querySelector("#letter-r");

    letterR.animate([
        { transform: 'translateX(-15px)', opacity: '0' },
        { transform: 'translateX(0px)', opacity: '1' }
    ], {
        delay: delay + 300,
        duration: 300,
        iterations: 1,
        fill: 'forwards'
    });
    
    const letterE = doc.querySelector("#letter-e");

    letterE.animate([
        { transform: 'translateX(-15px)', opacity: '0' },
        { transform: 'translateX(0px)', opacity: '1' }
    ], {
        delay: delay + 150,
        duration: 150,
        iterations: 1,
        fill: 'forwards'
    });
    
    const letterE2 = doc.querySelector("#letter-e-02");

    letterE2.animate([
        { transform: 'translateX(-15px)', opacity: '0' },
        { transform: 'translateX(0px)', opacity: '1' }
    ], {
        delay: delay + 300,
        duration: 150,
        iterations: 1,
        fill: 'forwards'
    });
    
    const letterN = doc.querySelector("#letter-n");

    letterN.animate([
        { transform: 'translateX(-15px)', opacity: '0' },
        { transform: 'translateX(0px)', opacity: '1' }
    ], {
        delay: delay + 450,
        duration: 450,
        iterations: 1,
        fill: 'forwards'
    });
    
    const letterT = doc.querySelector("#letter-t");

    letterT.animate([
        { transform: 'translateX(-15px)', opacity: '0' },
        { transform: 'translateX(0px)', opacity: '1' }
    ], {
        delay: delay + 600,
        duration: 150,
        iterations: 1,
        fill: 'forwards'
    });
    
    const letterH = doc.querySelector("#letter-h");

    letterH.animate([
        { transform: 'translateX(-15px)', opacity: '0' },
        { transform: 'translateX(0px)', opacity: '1' }
    ], {
        delay: delay + 750,
        duration: 300,
        iterations: 1,
        fill: 'forwards'
    });
    
    const letterU = doc.querySelector("#letter-u");

    letterU.animate([
        { transform: 'translateX(-15px)', opacity: '0' },
        { transform: 'translateX(0px)', opacity: '1' }
    ], {
        delay: delay + 850,
        duration: 150,
        iterations: 1,
        fill: 'forwards'
    });
    
    const letterM = doc.querySelector("#letter-m");

    letterM.animate([
        { transform: 'translateX(-15px)', opacity: '0' },
        { transform: 'translateX(0px)', opacity: '1' }
    ], {
        delay: delay + 1000,
        duration: 150,
        iterations: 1,
        fill: 'forwards'
    });
    
    const letterB = doc.querySelector("#letter-b");

    letterB.animate([
        { transform: 'translateX(-15px)', opacity: '0' },
        { transform: 'translateX(0px)', opacity: '1' }
    ], {
        delay: delay + 1050,
        duration: 450,
        iterations: 1,
        fill: 'forwards'
    });
});

window.addEventListener('scroll', debounce(function() {
    addingClassAnimatedOnScrolling();
}, 200));

document.getElementById("image-sun").addEventListener("load", function() {
    const doc = this.getSVGDocument();
    
    window.addEventListener('scroll', debounce(function() {
        const element = document.querySelector('.main-panel');
        
        if( element.classList.contains('animated') && !sunAnimated ) {
            sunAnimated = true;
            animateSun(doc);
        }
    }, 200));
});

document.getElementById("image-wateringcan").addEventListener("load", function() {
    const doc = this.getSVGDocument();

    window.addEventListener('scroll', debounce(function() {
        const element = document.querySelector('.main-panel');
        
        if( element.classList.contains('animated') && !wateringcanAnimated ) {
            wateringcanAnimated = true;
            animateWateringcan( doc );
        }
    }, 200));    
});

document.getElementById("image-dog").addEventListener("load", function() {
    const doc = this.getSVGDocument();

    window.addEventListener('scroll', debounce(function() {
        const element = document.querySelector('.main-panel');
        
        if( element.classList.contains('animated') && !dogAnimated ) {
            dogAnimated = true;
            animateDog( doc );
        }
    }, 200));
});

document.getElementById("image-pick").addEventListener("load", function() {
    const pick = this.getSVGDocument();
    
    const hand = pick.querySelector("#hand");
    gsap.fromTo( hand, { opacity: 0, x: -120 }, { opacity: 1, x: 0, duration: .85, delay: .45, ease: 'back' });

    const plant = pick.querySelector("#plant");
    gsap.fromTo( plant, { opacity: 0, rotate: 200, x: 120, scale: 1.2 }, { opacity: 1, rotate: 0, x: 0, scale: 1, duration: 1.35, delay: 1.35, ease: 'back' });
});

function addingClassAnimatedOnScrolling() {
    const panelSearch = document.getElementById("search");
    const windowTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;

    if( windowTop * 2 > (panelSearch.offsetTop / 2) - 200 ) {
        const mainPanel = document.querySelector('.main-panel');
        mainPanel.classList.add("animated");
    }
}

function animateSun( doc ) {
    var countTime = 0;

    const line01 = doc.querySelector("#line-01");
    gsap.fromTo( line01, { opacity: 0 }, { opacity: 1, duration: .65, delay: (.18 * countTime) });
    
    const line02 = doc.querySelector("#line-02");
    gsap.fromTo( line02, { opacity: 0 }, { opacity: 1, duration: .65, delay: (.18 * countTime++) });
    
    const line03 = doc.querySelector("#line-03");
    gsap.fromTo( line03, { opacity: 0 }, { opacity: 1, duration: .65, delay: (.18 * countTime++) });
    
    const line04 = doc.querySelector("#line-04");
    gsap.fromTo( line04, { opacity: 0 }, { opacity: 1, duration: .65, delay: (.18 * countTime++)});
    
    const line05 = doc.querySelector("#line-05");
    gsap.fromTo( line05, { opacity: 0 }, { opacity: 1, duration: .65, delay: (.18 * countTime++) });
    
    const line06 = doc.querySelector("#line-06");
    gsap.fromTo( line06, { opacity: 0 }, { opacity: 1, duration: .65, delay: (.18 * countTime++) });
    
    const line07 = doc.querySelector("#line-07");
    gsap.fromTo( line07, { opacity: 0 }, { opacity: 1, duration: .65, delay: (.18 * countTime++) });
    
    const line08 = doc.querySelector("#line-08");
    gsap.fromTo( line08, { opacity: 0 }, { opacity: 1, duration: .65, delay: (.18 * countTime++) });
    
    const line09 = doc.querySelector("#line-09");
    gsap.fromTo( line09, { opacity: 0 }, { opacity: 1, duration: .65, delay: (.18 * countTime++) });
    
    const line10 = doc.querySelector("#line-10");
    gsap.fromTo( line10, { opacity: 0 }, { opacity: 1, duration: .65, delay: (.18 * countTime++) });

    const base = doc.querySelector("#base");
    gsap.fromTo( base, { opacity: 0 }, { opacity: 1, duration: .65, delay: (.18 * countTime++) });

    const glass = doc.querySelector("#glass");
    gsap.fromTo( glass, { opacity: 0, y: -15 }, { opacity: 1, y: 0, duration: .65, delay: (.18 * countTime++), ease: 'back' });

    const mouth = doc.querySelector("#mouth");
    gsap.fromTo( mouth, { opacity: 0, y: -15 }, { opacity: 1, y: 0, duration: .65, delay: (.18 * countTime++), ease: 'bounce' });
}

function animateWateringcan( doc ) {
    const wateringcan = doc.querySelector("svg");

    gsap.fromTo( wateringcan, { opacity: 0, rotation: 120, scale: 1.1 }, { opacity: 1, rotation: 0, scale: 1, duration: 1.35, delay: 2.3, ease: 'back' });
    
    const eyeRight = doc.querySelector("#eye-right");
    gsap.fromTo( eyeRight, { opacity: 0, y: -15 }, { opacity: 1, y: 0, delay: 3, ease: 'bounce' });
    
    const eyeLeft = doc.querySelector("#eye-left");
    gsap.fromTo( eyeLeft, { opacity: 0, y: -15 }, { opacity: 1, y: 0, delay: 3.35, ease: 'bounce' });
    
    const mouth = doc.querySelector("#mouth");
    gsap.fromTo( mouth, { opacity: 0, y: 3 }, { opacity: 1, y: 0, delay: 3.7, ease: 'back' });
}

function animateDog( doc ) {
    const dog = doc.querySelector("svg");
    gsap.fromTo( dog, { opacity: 0, x: -120, scale: 1.1 }, { opacity: 1, x: 0, scale: 1, duration: .85, delay: 3.5 });

    const dogEar = doc.querySelector("#ear");
    gsap.fromTo( dogEar, { rotate: 45, scale: 1.1 }, { rotate: 0, scale: 1, duration: .85, delay: 4.35 });

    const dogEye = doc.querySelector("#eye");
    gsap.fromTo( dogEye, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1.2, duration: .85, delay: 4.5 });

    const dogNose = doc.querySelector("#nose");
    gsap.fromTo( dogNose, { opacity: 0, x: 35 }, { opacity: 1, x: 0, duration: .85, delay: 4.5, ease: 'back' });

    const dogTeeth = doc.querySelector("#teeth");
    gsap.fromTo( dogTeeth, { opacity: 0, x: 35 }, { opacity: 1, x: 0, duration: .85, delay: 4.65, ease: 'back' });
}