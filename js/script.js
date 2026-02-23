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

const abrir = document.getElementById("abrirFormulario");
const modal = document.getElementById("modal");
const cerrar = document.getElementById("cerrarModal");

abrir.addEventListener("click", function(e){
        e.preventDefault();
        modal.style.display = "block";
});

cerrar.addEventListener("click", function(){
        modal.style.display = "none";
});

window.addEventListener("click", function(e){
    if(e.target === modal){
        modal.style.display = "none";
    }
});

const otroCheck = document.getElementById("otroCheck");
const otroGenero = document.getElementById("otroGenero");

otroCheck.addEventListener("change", function(){
    if(this.checked){
        otroGenero.style.display = "block";
        otroGenero.required = true;
    } else {
        otroGenero.style.display = "none";
        otroGenero.required = false;
    }
});

const generoFavorito = document.getElementById("generoFavorito");
const otroFavorito = document.getElementById("otroFavorito");

generoFavorito.addEventListener("change", function(){

    if(this.value === "otro"){
        otroFavorito.style.display = "block";
        otroFavorito.required = true;
    } else {
        otroFavorito.style.display = "none";
        otroFavorito.required = false;
    }
});


const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){
    const checkboxes = document.querySelectorAll(".checkbox-group input[type='checkbox']");
    let algunoMarcado = false;

    checkboxes.forEach(function(checkbox){
        if(checkbox.checked){
            algunoMarcado = true;
        }
    });

    if(!algunoMarcado){
        e.preventDefault();
        alert("Debes seleccionar al menos un género");
    }
});