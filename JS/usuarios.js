var Nombre_completo = document.getElementById("Nombre_completo")
var Telefono = document.getElementById("Telefono")
var Direccion = document.getElementById("Direccion")
var correo = document.getElementById("correo")
var Contraseña = document.getElementById("Contraseña")
var fecha_nacimiento = document.getElementById("fecha_nacimiento")
var profesion = document.getElementById("profesion")
var Documento_de_identidad = document.getElementById("Documento")

function ValidarDatos() {
    if (Nombre_completo == '' || Telefono == '' || correo == '') {
        console.log("los campos estan vacios")
    }
    else {
        if (Nombre_completo != /[ a-zA-Z]/) {
            console.log("Los datos son incorrectos")
        }
        if (Telefono.length() >= 10) {
            console.log("Los datos son incorrectos")
        }
        if (correo != /[@]/) {
            console.log("Los datos son incorrectos")
        }
        if(Contraseña.length() > 8){
            console.log("los datos son incorrectos")
        }
        if(Documento_de_identidad == /[a-zA-Z]/) {
            console.log("los datos son incorrectos")
        }
    }
}
