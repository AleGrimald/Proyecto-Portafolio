var btnSiguiente = document.querySelector(".btnSiguiente");
var btnAgregar = document.querySelector(".btnAgregar");


function ocultarObjetor(){
    let objeto = document.querySelector(".contenedor-datPersonales");
    let objeto2 = document.querySelector(".contenedor-Formacion");
    let titulo = document.querySelector(".titulo-secundario");

    
    titulo.textContent = "Formacion Academica";
    objeto.classList.add("ocultar");
    objeto2.classList.remove("ocultar");
}

function agregarInput() {
    let formulario = document.getElementById("form-formacion").innerHTML=`
    <input type="text" name="" id="" placeholder="Hola Mundo">
    `
    return formulario;
}


btnSiguiente.addEventListener("click", ocultarObjetor);
btnAgregar.addEventListener("click", agregarInput);