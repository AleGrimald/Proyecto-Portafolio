var btnSiguiente2 = document.querySelector(".btn-siguiente2");
function Siguiente2(){
    let titulo = document.querySelector(".titulo-secundario");
    let contenedorFormacion = document.querySelector(".contenedor-formacion");
    let links = document.querySelector(".contenedor-links");

    titulo.textContent = "Links de Proyectos";
    contenedorFormacion.classList.add("ocultar");
    links.classList.remove("ocultar");
}
btnSiguiente2.addEventListener("click", Siguiente2);
