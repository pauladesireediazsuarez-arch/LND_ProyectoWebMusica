const menuToggle = document.getElementById("menuToggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("abierto");
    menuToggle.classList.toggle("activo");
});


// ==========================
// DROPDOWNS PRINCIPALES
// ==========================

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(drop => {
    drop.addEventListener("click", function(e){

        if(e.target.closest(".submenu")) return;

        dropdowns.forEach(d => {
            if(d !== drop) d.classList.remove("open");
        });

        drop.classList.toggle("open");
    });
});


// ==========================
// GÉNEROS INTERNOS
// ==========================

const genres = document.querySelectorAll(".genre");

genres.forEach(genre => {

    const header = genre.querySelector(".genre-header");

    header.addEventListener("click", function(e){

        e.stopPropagation();

        genres.forEach(g => {
            if(g !== genre) g.classList.remove("open");
        });

        genre.classList.toggle("open");
    });
});


// ==========================
// CARRUSEL
// ==========================

const carrusel = document.getElementById("carrusel");

if (carrusel) {

    carrusel.innerHTML += carrusel.innerHTML;

    let scrollAmount = 0;
    const speed = 0.8;

    function moverCarrusel(){

        scrollAmount += speed;

        if(scrollAmount >= carrusel.scrollWidth / 2){
            scrollAmount = 0;
        }

        carrusel.style.transform = `translateX(-${scrollAmount}px)`;
        requestAnimationFrame(moverCarrusel);
    }

    moverCarrusel();
}


// ==========================
// MODAL
// ==========================

const abrir = document.getElementById("abrirFormulario");
const abrirMenu = document.getElementById("abrirFormularioMenu");
const modal = document.getElementById("modal");
const cerrar = document.getElementById("cerrarModal");

if(abrir){
    abrir.addEventListener("click", e => {
        e.preventDefault();
        modal.style.display = "flex";
    });
}

if(abrirMenu){
    abrirMenu.addEventListener("click", () => {
        modal.style.display = "flex";
    });
}

if(cerrar){
    cerrar.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

window.addEventListener("click", e => {
    if(e.target === modal){
        modal.style.display = "none";
    }
});

// ==========================
// BOTÓN INICIO
// ==========================

const inicioBtn = document.getElementById("inicioBtn");
const artistasSection = document.getElementById("ArtistasSection");
const topsContainer = document.querySelector(".scroll");

if(inicioBtn){
    inicioBtn.addEventListener("click", () => {

        if(artistasSection){
            artistasSection.style.display = "none";
        }

        if(topsContainer){
            topsContainer.style.display = "block";
        }

        if(tablaAlbumes){
            tablaAlbumes.style.display = "block";
        }

        if(curiosidades){
            curiosidades.style.display = "block";
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        if(menu.classList.contains("abierto")){
            menu.classList.remove("abierto");
            menuToggle.classList.remove("activo");
        }
    });
}


// ==========================
// SECCIÓN ARTISTAS
// ==========================

const artistasBtn = document.getElementById("artistasBtn");
const tablaAlbumes = document.querySelector(".tabla-albumes");
const curiosidades = document.querySelector(".curiosidades");

if(artistasBtn){

    artistasBtn.addEventListener("click", () => {

        if(topsContainer){
            topsContainer.style.display = "none";
        }

        if(tablaAlbumes){
            tablaAlbumes.style.display = "none";
        }

        if(curiosidades){
            curiosidades.style.display = "none";
        }

        if(artistasSection){
            artistasSection.style.display = "block";
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        menu.classList.remove("abierto");
        menuToggle.classList.remove("activo");
    });
}

// ==========================
// BOTÓN ... MÁS
// ==========================

const botonesMas = document.querySelectorAll(".btn-mas");

botonesMas.forEach(boton => {

    boton.addEventListener("click", () => {

        const card = boton.closest(".artista-card");
        const textoLargo = card.querySelector(".texto-largo");

        if(textoLargo.style.display === "block"){
            textoLargo.style.display = "none";
            boton.textContent = "...más";
        } else {
            textoLargo.style.display = "block";
            boton.textContent = "ver menos";
        }

    });
});