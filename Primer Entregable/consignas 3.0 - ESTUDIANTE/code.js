/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
  imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
  lenguajes: "HTML y CSS",
  bimestre: "1er bimestre",
},
{
  imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
  lenguajes: "Javascript",
  bimestre: "2do bimestre",
},
{
  imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
  lenguajes: "React JS",
  bimestre: "3er bimestre",
},
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt('Ingresa tu nombre');
  datosPersona.edad = prompt('Ingresa el año en que naciste');
  datosPersona.ciudad = prompt('Ingresa la ciudad donde vives');
  datosPersona.interesPorJs = confirm('¿Te interesa Javascript?');
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.getElementById('nombre').innerText = datosPersona.nombre;
  document.getElementById('edad').innerText = 2022 - datosPersona.edad;
  document.getElementById('ciudad').innerText = datosPersona.ciudad;
  document.getElementById('javascript').innerText = datosPersona.interesPorJs ? 'Si' : 'No';
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */

  let contenedor = document.getElementById('fila');

  for (let item of listado) {
    let divCaja = document.createElement('div');
    divCaja.classList.add('caja')

    let imagenMateria = document.createElement('img');
    imagenMateria.setAttribute('src', item.imgUrl);
    imagenMateria.setAttribute('alt', item.lenguajes);

    let parrafoMateria = document.createElement('p');
    let textParrafoMateria = document.createTextNode(item.lenguajes);
    parrafoMateria.appendChild(textParrafoMateria);
    parrafoMateria.classList.add('lenguajes');

    let parrafoBimestre = document.createElement('p');
    let textParrafoBimestre = document.createTextNode(item.bimestre);
    parrafoBimestre.appendChild(textParrafoBimestre);
    parrafoBimestre.classList.add('bimestre');

    divCaja.appendChild(imagenMateria)
    divCaja.appendChild(parrafoMateria)
    divCaja.appendChild(parrafoBimestre)

    contenedor.appendChild(divCaja)
  }

  materiasBtn.disabled = true;
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  let pagina = document.getElementById('sitio');
  let botonCambiarTema = document.getElementById('cambiar-tema');

  botonCambiarTema.addEventListener('click', () => {
    pagina.classList.toggle('dark')
  });

}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

window.addEventListener('keypress', function(e) {
  let sobreMi = document.getElementById('sobre-mi');
  if (e.key == 'f') {
    sobreMi.classList.remove('oculto')
  }
})



