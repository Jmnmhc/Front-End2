// document.querySelector("form").addEventListener("submit", validarDatos());
const boton = document.querySelector(".botonEnviar");

boton.addEventListener("click", (evento) =>{
    evento.preventDefault();
    console.log(document.form.nombreApellido.value);
    validarDatos();
});

function validarDatos(){

    if (document.form.nombreApellido.value ==""){
        alert("Campo nombre obligatorio");
        document.form.nombreApellido.focus();
    }
    else if (document.form.correoElectronico.value ==""){
        alert("Campo Email obligatorio");
        document.form.correoElectronico.focus();
    }
    else if ((document.form.correoElectronico.value.indexOf("@")== -1) ||(document.form.correoElectronico.value.indexOf(".")== -1)){
        alert("el email es invalido");
        document.form.correoElectronico.focus();
    }

    else if (document.form.asunto.value ==""){
        alert("Campo asunto obligatorio");
        document.form.asunto.focus();

    }
    else if ((document.form.mensaje.value =="") || (document.form.mensaje.length > 51)){
        alert("Campo mensaje obligatorio");
        document.form.mensaje.focus();
    }

}







































// const boton = document.querySelector(".botonEnviar");

// boton.addEventListener("click", (evento) =>{
//     evento.preventDefault();
//     let enviar = true
//     const textoNombre = document.querySelector("#nombreApellido");
//     const textoMail = document.querySelector("#correoElectronico");
//     const textoTelefono = document.querySelector("#telefono");
//     const textoMensaje = document.querySelector("#mensaje");
    

//     validarEmail(textoMail)


//     if ((textoNombre.value.length < 1) || (textoNombre.value.length > 50)) {
//         alert("el nombre no puede estar vacío y tiene que tener un máximo de 50 caracteres");
//         nombreApellido.focus();
//         enviar = false;
//         } else {console.log(textoNombre.value.length)}


// //if (enviar){
// //    console.log("el mensaje ha sido enviado")
// //    textoNombre.value = "";
// //    textoMail.value = "";
// //    textoTelefono.value = "";
// //    textoMensaje.value="";
// //}






// });

// function validarEmail(textoMail) {
//     const regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/);
    
//     if (regex.test(textoMail)){
//      alert("La dirección de email " + textoMail + " es correcta.");
//     } else {
//      alert("La dirección de email es incorrecta.");
//     }
// }




