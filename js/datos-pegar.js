var nomAp = document.querySelector("#nombre-apellido-DP");
var dni = document.querySelector("#dni-DP");
var fechNac = document.querySelector("#fecha-nacimiento-DP");
var domicilio = document.querySelector("#domicilio-DP");
var telefono = document.querySelector("#telefono-DP");
var email = document.querySelector("#email-DP");
//Creo una funcion de tipo asincronica
async function obtenerDatos() {
    //Primero necesito hacer una solicitud HTTP
    const response = await fetch("http://127.0.0.1:5500/Ejercicios/Portafolio/json/datos.json");
    const json = await response.json();
    
    nomAp.textContent = json.persona[0].nombre_apellido;
    dni.textContent = json.persona[0].dni;
    fechNac.textContent=json.persona[0].fecha_nacimiento;
    domicilio.textContent=json.persona[0].domicilio;
    telefono.textContent = json.persona[0].telefono;
    email.textContent = json.persona[0].email;

}

obtenerDatos();