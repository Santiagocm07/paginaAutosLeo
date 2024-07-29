const llave = document.getElementById('llave');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector("#lista-llave tbody");
const vaciarLlaveBtn = document.getElementById('vaciar-llave');

cargarEventListeners();

function cargarEventListeners() {
    elementos1.addEventListener('click', comprarElemento);
    llave.addEventListener('click', eliminarElemento);
    vaciarLlaveBtn.addEventListener('click', vaciarLlave);
}

function comprarElemento(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-llave')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        /*precio: elemento.querySelector('.precio').textContent,*/
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarLlave(infoElemento);
}

function insertarLlave(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
           <img src="${elemento.imagen}" width=100 >
        </td>
        <td>
           ${elemento.titulo}
        </td>
        <td>
           <a herf="#" class="borrar" data-id="${elemento.id}" > X </a>
        </td>
    `;
    lista.appendChild(row);
}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoId;
    if (e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');
    }
}

function vaciarLlave() {
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}