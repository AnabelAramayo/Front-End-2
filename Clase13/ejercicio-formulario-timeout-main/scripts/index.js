// Esta es la base de datos de nuestros usuarios
const baseDeDatos = {
  usuarios: [
    {
      id: 1,
      name: "Steve Jobs",
      email: "steve@jobs.com",
      password: "Steve123",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "shanna@melissa.tv",
      password: "Ervin345",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "nathan@yesenia.net",
      password: "Floppy39876",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "julianne.oconner@kory.org",
      password: "MysuperPassword345",
    },
  ],
};

// ACTIVIDAD

// Paso a paso:

// 1) Escuchar el evento necesario para reaccionar cuando la persona
// haga click en el botón iniciar sesión.

// 2) El proceso de inicio de sesión deberá tener una demora de 3 segundos.
// Deberás agregar la función correspondiente para simular dicha demora.

// 3) Durante el tiempo indicado anteriormente, se deberá mostrar el mensaje "Iniciando sesión..."

let buttonLogin = document.querySelector('.login-btn');
let emailInput = document.querySelector('#email-input');
let passwordInput = document.querySelector('#password-input')

let loading = document.querySelector('#loader');
let divError = document.querySelector('#error-container');
let small = document.createElement('small');
divError.appendChild(small);

let expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;



buttonLogin.addEventListener('click', function (e) {
  for (let i of baseDeDatos.usuarios) {
    // let esValido = expReg.test(i.email);
    if (emailInput.value == "" || emailInput.value != (i.email) || passwordInput.value != (i.password)) {
      divError.classList.remove('hidden')
      small.innerHTML = `Alguno de los datos ingresados son incorrectos`;
      e.preventDefault();
    } else {
      loading.classList.remove('hidden')
      divError.classList.add('hidden')
      console.log(divError.classList.contains('hidden')); //lo contiene pero no lo oculta!
      setTimeout(function () {
        loading.classList.add('hidden')
      }, 3000)
    }
  }
})


function emailValidation () {
return expReg.test(emailInput.value);

  // let esValido = expReg.test(emailInput.value);
  // if (esValido==false){
  //   console.log('no es valido');
  // } else {
  //   console.log('es valido')
  // }
}



function passwordValidation() {
  return passwordInput.value.trim().length >= 5;
}





// 4) A partir de los inputs ingresados en el formulario, se deberan realizar las siguientes validaciones:
// 1) Que el primer input sea un email válido.
// 2) Que la contraseña tenga al menos 5 caracteres.
// 3) Que los datos ingresados corresponden a una
// persona que se encuentre registrada en la base de datos.
// En caso de que alguna de las validaciones no sea exitosa,
// se deberá mostrar un mensaje de error que diga "Alguno de los datos ingresados son incorrectos"

// 5) En caso de que los datos ingresados sean correctos, se deberá ocultar el formulario y mostrar
// un mensaje de bienvenida al sitio.

/* 
TIPS:
  - Puedes averiguar acerca de la manera de validar el formato de un email utilizando Javascript, buscando
    en internet frases como "Validar email con Javascript o similar".

  - Recuerda que puedes seleccionar y manipular los elementos del archivo index.html, usando los
    recursos que Javascript te ofrece para ello. Además, en el archivo styles.css tiene algunas clases y 
    estilos predefinidos para ayudarte a completar la actividad.

  - También te dejamos algunos mensajes que te pueden ser de utilidad:
  
   Mensaje de error => <small>Alguno de los datos ingresados son incorrectos</small>

   Mensaje de bienvenida => "<h1> Bienvenido al sitio 😀 </h1>";

   ¡Manos a la obra!
 */
