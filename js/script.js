const menuToggle = document.getElementById("menuToggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("abierto");
    menuToggle.classList.toggle("activo");
});

// Dropdown principal
const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach(drop => {
    drop.addEventListener("click", function(e){
        if(e.target.closest(".submenu")) return;
        dropdowns.forEach(d => { if(d !== drop) d.classList.remove("open"); });
        drop.classList.toggle("open");
    });
});

// Géneros
const genres = document.querySelectorAll(".genre");
genres.forEach(genre => {
    const header = genre.querySelector(".genre-header");
    header.addEventListener("click", function(e){
        e.stopPropagation();
        genres.forEach(g => { if(g !== genre) g.classList.remove("open"); });
        genre.classList.toggle("open");
    });
});

// Carrusel
const carrusel = document.getElementById("carrusel");
carrusel.innerHTML += carrusel.innerHTML;
let scrollAmount = 0; const speed = 0.8;
function moverCarrusel(){
    scrollAmount += speed;
    if(scrollAmount >= carrusel.scrollWidth / 2){ scrollAmount = 0; }
    carrusel.style.transform = `translateX(-${scrollAmount}px)`;
    requestAnimationFrame(moverCarrusel);
}
moverCarrusel();

// Modal
const abrir = document.getElementById("abrirFormulario");
const modal = document.getElementById("modal");
const cerrar = document.getElementById("cerrarModal");
abrir.addEventListener("click", e => { e.preventDefault(); modal.style.display = "block"; });
cerrar.addEventListener("click", () => { modal.style.display = "none"; });
window.addEventListener("click", e => { if(e.target === modal) modal.style.display = "none"; });

// Scroll suave para todos los enlaces
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();
        const targetID = this.getAttribute("href").slice(1);
        const targetSection = document.getElementById(targetID);
        window.scrollTo({ top: targetSection.offsetTop - 60, behavior: "smooth" });
        if(menu.classList.contains("abierto")){
            menu.classList.remove("abierto");
            menuToggle.classList.remove("activo");
        }
    });
});