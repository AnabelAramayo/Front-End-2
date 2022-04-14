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

let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

// buttonLogin.addEventListener('click', function (e) {
//   let emailval = emailValidation()
//   let passwordval = passwordValidation()
//   console.log(emailValidation())
//   console.log(passwordValidation())

//   for (let i of baseDeDatos.usuarios) {
//     // let esValido = expReg.test(i.email);
//     if (emailInput.value == "" || emailInput.value != (i.email) || passwordInput.value != (i.password) || emailval || passwordval) {
//       divError.classList.remove('hidden')
//       small.innerHTML = `Alguno de los datos ingresados son incorrectos`;
//       e.preventDefault();
//     } else {
//       loading.classList.remove('hidden')
//       divError.classList.add('hidden')
//       console.log(divError.classList.contains('hidden')); //lo contiene pero no lo oculta!
//       setTimeout(function () {
//         loading.classList.add('hidden')
//       }, 3000)
//     }
//   }
// })



//variable contador de pruebas pasadas para que si no es igual a la cantidad de validaciones, no pase la funcion final
//variable bandera para que se vuelva en false o true y después en la funcion de validación final no de

// VALIDACIONES DE EMAIL

function noEstaVacio() {
  return emailInput.value != "";
  // let bandera = true;
  // if (emailInput.value == "") {
  //   bandera = false;
  // }
  // return bandera;
  // console.log('funcion no esta vacio: ' + bandera)
}

//tendria que devolver true

function estaEnElArrayEmail() {
  let bandera = true;
  for (let i of baseDeDatos.usuarios) {
    if (emailInput.value != (i.email)) {
      bandera = false;
    }
  }
  return bandera;
  console.log('funcion esta en el array email : ' + bandera)
}
//deberia retornar true

function emailValidation() {
  return expReg.test(emailInput.value);
  // let esValido = expReg.test(emailInput.value);
  // if (esValido==false){
  //   console.log('no es valido');
  // } else {
  //   console.log('es valido')
  // }
  console.log('funcion email validation: ' + expReg.test(emailInput.value))
}

// VALIDACION DE CONTRASEÑA

function estaEnElArrayContrasenia() {
  let bandera = true;
  for (let i of baseDeDatos.usuarios) {
    if (passwordInput.value != (i.password)) {
      bandera = false;
    }
  }
  return bandera;
}

function passwordValidation() {
  return passwordInput.value.trim().length >= 5;
}

// VALIDACIONES GENERALES

// function emailValidationFinal() {
//   return noEstaVacio() &&
//     estaEnElArrayEmail() &&
//     emailValidation();
//     console.log(noEstaVacio())
// }

// function passwordValidationFinal() {
//   return estaEnElArrayContrasenia() &&
//     passwordValidation();
// }

function validationFinal() {
  return noEstaVacio() &&
    estaEnElArrayContrasenia() &&
    passwordValidation() &&
    emailValidation() &&
    estaEnElArrayEmail()
  }
  
  // LOGIN
  
  buttonLogin.addEventListener('click', function (e) {
    if (!validationForm()) {
      e.preventDefault();
      console.log('no esta pasando por el login')
    }
  })
  
  
  // VALIDACIONES FINALES
  
  function validationForm() {
    console.log(`¿La validacion final salio bien? : ${validationFinal()}`)
    console.log(`¿No esta vacio el campo de email?: ${noEstaVacio()}`);
    console.log(`¿Esta en el array contraseña?: ${estaEnElArrayContrasenia()}`)
    console.log(`¿La contraseña es mayor a 5 digitos?: ${passwordValidation()}`)
    console.log(`¿El email tiene un arroba y un punto, sin ningun caracter raro?: ${emailValidation()}`)
    console.log(`¿Esta en el array email?: ${estaEnElArrayEmail()}`)


  if (validationFinal()) {
    loading.classList.remove('hidden')
    divError.classList.add('hidden')
    // console.log(divError.classList.contains('hidden'));
    //lo contiene pero no lo oculta!
    setTimeout(function () {
      loading.classList.add('hidden')
    }, 3000)
    console.log('esta pasando el validation form')
  } else {
    divError.classList.remove('hidden')
    small.innerHTML = `Alguno de los datos ingresados son incorrectos`;
    // e.preventDefault();
    console.log('no esta pasando el validation form')
  }
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
