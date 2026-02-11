const carrusel = document.getElementById("carrusel");

carrusel.innerHTML += carrusel.innerHTML;

let scrollAmount = 0;
const speed = 0.8;

function moverCarrusel(){
    scrollAmount += speed;

    if (scrollAmount >= carrusel.scrollWidth / 2){
        scrollAmount = 0;   
    }

    carrusel.style.transform = `translateX(-${scrollAmount}px)`;

    requestAnimationFrame(moverCarrusel);
}

moverCarrusel();