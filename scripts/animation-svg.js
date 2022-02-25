document.getElementById("logo").addEventListener("load", function() {
    const doc = this.getSVGDocument();

    const letterG = doc.querySelector("#letter-g");

    letterG.animate([
        { transform: 'translateX(-15px)', opacity: '0' },
        { transform: 'translateX(0px)', opacity: '1' }
    ], {
        duration: 150,
        iterations: 1,
        fill: 'forwards'
    });
    
    const letterR = doc.querySelector("#letter-r");

    letterR.animate([
        { transform: 'translateX(-15px)', opacity: '0' },
        { transform: 'translateX(0px)', opacity: '1' }
    ], {
        delay: 300,
        duration: 300,
        iterations: 1,
        fill: 'forwards'
    });
    
    const letterE = doc.querySelector("#letter-e");

    letterE.animate([
        { transform: 'translateX(-15px)', opacity: '0' },
        { transform: 'translateX(0px)', opacity: '1' }
    ], {
        delay: 150,
        duration: 150,
        iterations: 1,
        fill: 'forwards'
    });
    
    const letterE2 = doc.querySelector("#letter-e-02");

    letterE2.animate([
        { transform: 'translateX(-15px)', opacity: '0' },
        { transform: 'translateX(0px)', opacity: '1' }
    ], {
        delay: 300,
        duration: 150,
        iterations: 1,
        fill: 'forwards'
    });
    
    const letterN = doc.querySelector("#letter-n");

    letterN.animate([
        { transform: 'translateX(-15px)', opacity: '0' },
        { transform: 'translateX(0px)', opacity: '1' }
    ], {
        delay: 450,
        duration: 450,
        iterations: 1,
        fill: 'forwards'
    });
    
    const letterT = doc.querySelector("#letter-t");

    letterT.animate([
        { transform: 'translateX(-15px)', opacity: '0' },
        { transform: 'translateX(0px)', opacity: '1' }
    ], {
        delay: 600,
        duration: 150,
        iterations: 1,
        fill: 'forwards'
    });
    
    const letterH = doc.querySelector("#letter-h");

    letterH.animate([
        { transform: 'translateX(-15px)', opacity: '0' },
        { transform: 'translateX(0px)', opacity: '1' }
    ], {
        delay: 750,
        duration: 300,
        iterations: 1,
        fill: 'forwards'
    });
    
    const letterU = doc.querySelector("#letter-u");

    letterU.animate([
        { transform: 'translateX(-15px)', opacity: '0' },
        { transform: 'translateX(0px)', opacity: '1' }
    ], {
        delay: 850,
        duration: 150,
        iterations: 1,
        fill: 'forwards'
    });
    
    const letterM = doc.querySelector("#letter-m");

    letterM.animate([
        { transform: 'translateX(-15px)', opacity: '0' },
        { transform: 'translateX(0px)', opacity: '1' }
    ], {
        delay: 1000,
        duration: 150,
        iterations: 1,
        fill: 'forwards'
    });
    
    const letterB = doc.querySelector("#letter-b");

    letterB.animate([
        { transform: 'translateX(-15px)', opacity: '0' },
        { transform: 'translateX(0px)', opacity: '1' }
    ], {
        delay: 1050,
        duration: 450,
        iterations: 1,
        fill: 'forwards'
    });
});