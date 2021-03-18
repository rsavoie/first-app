const listaMascotas = document.getElementById("lista-mascotas");
const tipo = document.getElementById("tipo");
const nombre = document.getElementById("nombre");
const dueño = document.getElementById("dueño");
const form = document.getElementById("form");
const btnGuardar = document.getElementById("btn-guardar");
const indice = document.getElementById("indice");

let mascotas = [
    {
        tipo:"Gato",
        nombre:"Manchas",
        dueño:"Ale"
    }
];

function listarMascotas(){
    let htmlMascotas = mascotas.map((mascota, index)=>
        `<th scope="row">${index}</th>
        <td>${mascota.tipo}</td>
        <td>${mascota.nombre}</td>}
        <td>${mascota.dueño}</td>
        <td>
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary editar" data-indice= ${index} onclick="editar(this)"><i class="far fa-edit"></i></button>
            <button type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
        </div>
        </td>
    </tr>`).join("");
    listaMascotas.innerHTML = htmlMascotas;
    /*Array.from(document.getElementsByClassName("editar")).forEach((botonEditar)=>botonEditar.onclick=editar);*/
}

function editar(evento){
    console.dir(evento);
}

function enviarDatos(evento){
    evento.preventDefault();
    let datos= {
        tipo: tipo.value,
        nombre: nombre.value,
        dueño: dueño.value
    };
    mascotas.push(datos);
    listarMascotas();
}

listarMascotas();

form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;