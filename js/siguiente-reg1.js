var btnSiguiente = document.querySelector(".btnSiguiente");

function Siguiente(){
    let objeto = document.querySelector(".contenedor-datPersonales");
    let titulo = document.querySelector(".titulo-secundario");
    let contenedorFormacion = document.querySelector(".contenedor-formacion");

    titulo.textContent = "Formacion Academica";
    objeto.classList.add("ocultar");
    contenedorFormacion.classList.remove("ocultar");

}

btnSiguiente.addEventListener("click", Siguiente);
