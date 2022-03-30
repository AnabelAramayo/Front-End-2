// function escribirHTML(titulo, parrafo) {
//     let contenido = `<h1>${titulo}</h1>
//                     <p>${parrafo}</p>`;
//     document.getElementById('body').innerHTML+=contenido;
// }



function escribirHTML(titulo, texto) {
    const body = document.getElementById('body');
    const miTemplate = `
    <h1>${titulo}</h1>
    <p>${texto}</p>
    `;
    body.innerHTML +=miTemplate;
}

escribirHTML('Este es mi titulo', 'Hola parrafo');