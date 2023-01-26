var btnLogin = document.querySelector(".btn-login");
var inpUsuario = document.querySelector(".inp-usuario");
var inpPassw = document.querySelector(".inp-contrasena");

function validarLogin(){
    let user = "alegrimaldi";
    let password = "78531015alejandro";
    if (inpPassw.value == password && inpUsuario.value == user) {
        window.location = "index.html";
    }else{
        alert("Usuario o Contraseña invalidos");
    }

    inpUsuario.value=null;
    inpPassw.value=null;
}
btnLogin.addEventListener("click", validarLogin)