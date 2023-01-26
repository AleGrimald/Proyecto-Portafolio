var btnSiguiente = document.querySelector(".btnSiguiente");
var btnSiguiente2 = document.querySelector(".btn-siguiente2");
var btnAgregar = document.querySelector(".btn-agregar");

function Siguiente(){
    let objeto = document.querySelector(".contenedor-datPersonales");
    let titulo = document.querySelector(".titulo-secundario");
    let contenedorFormacion = document.querySelector(".contenedor-formacion");

    titulo.textContent = "Formacion Academica";
    objeto.classList.add("ocultar");
    contenedorFormacion.classList.remove("ocultar");

}

function Siguiente2(){
    let titulo = document.querySelector(".titulo-secundario");
    let contenedorFormacion = document.querySelector(".contenedor-formacion");
    let links = document.querySelector(".contenedor-links");

    titulo.textContent = "Links de Proyectos";
    contenedorFormacion.classList.add("ocultar");
    links.classList.remove("ocultar");
}


/*----------------------------------------------------------------------------------------------------------*/ 
function crearElemento() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    
    if (inputValue === '') {
        alert("Por favor agrega una certificacion");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";


    //Botones Borrar li y check al hacer click
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    //oculta los li que son marcados y borrados
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
    }
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    }
}, false);
/*----------------------------------------------------------------------------------------------------------*/ 


btnSiguiente2.addEventListener("click", Siguiente2);
btnSiguiente.addEventListener("click", Siguiente);
btnAgregar.addEventListener("click", crearElemento);
