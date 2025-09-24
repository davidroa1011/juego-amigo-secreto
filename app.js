// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Declaramos array para guardar lista de amigos inscritos
let amigos=[];

//Creamos funcion para agragar amigo secreto al array amigos 
function agregarAmigo(){
    
    // Definimos nombre Amigo y lo conectamos con el valor dentro de HTML definido en la caja de texto
    const inputAmigo = (document.getElementById("amigo").value);
    // Utilizamos .trim para eliminar espacios a inicio y final del nombre
    const nombre = inputAmigo.trim();
    //Cambiamos la primera letra a mayuscula
    const nombreAmigo = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    
    if (nombreAmigo===""){
        alert("Por favor inserte un nombre");
        return; // Detenemos en este punto la ejecucion de la funcion si no se ingresa el nombre del amigo
    }

    // Valiamos la no duplicidad del nombre el amigo 
    if (amigos.includes(nombreAmigo)){
        alert(`El nombre ${nombreAmigo} ya esta incluido en la lista`)
        return;
    }
    
    // Agregamos nombre de amigos al array
    amigos.push(nombreAmigo);
    //Actualizamos lista HTML
    actualizarLista();
    //Mostramos en la consola la distribucion del array amigos 
    console.log(amigos);

    //Limpiamos caja con funcion limpiar Caja
    limpiarCaja();  
}

// Definimos funcion para limpiar caja
function limpiarCaja(){
    // Asignamos un valor vacio al campo de nombre de amigos para limpiarlo
    document.getElementById("amigo").value = "";
}

// Funcion para actualizar la lista de amigos en la interfaz de la pagina 
function actualizarLista(){
    // Guardamos en lista de amigos el valor del ID listaAmigos
    const listaAmigos = document.getElementById("listaAmigos");

    // Limpiamos contenido actual de la lista 
    // Con innerHTML asignamos un valor a lista de amigos en este caso sin valor 
    listaAmigos.innerHTML = ""; // Borra contenido previo dentro de lista de amigos

    // Recorremos el array con un ciclo for 
    for(let i = 0; i<amigos.length;i++){
        // Creamos un elemento tipo li (lista)
        const li = document.createElement("li");
        // Agreaga a la lista el valor del array en la posicion i
        li.textContent = amigos[i]; 
        //Agrega el li en HTML
        listaAmigos.appendChild(li);
    }
}

// Funcion para seleccionar un amigo aleatorio 
function sortearAmigo(){
    // Validamos amigos disponibles en la lista 
    if (amigos.length===0){// Comprobamos que el array amigos no este vacio
        alert("No hay amigos agregados")
        return;
    }
    // Genera indice aleatorio para sortear el amigo 
    // Generamos numeor aleatorio entre 0 y largo del array amigos 
    const indiceAleatorio = Math.floor(Math.random()*amigos.length);

    // Usamos indice aleatorio para para escoger un elemento dentro de la lista amigos 
    const amigoAleatorio = amigos[indiceAleatorio];

    // Mostramos resultado en HTML 
    const resultado = document.getElementById("resultado");
    resultado.innerHTML =`El nombre de tu amigo secreto es <Strong> ${amigoAleatorio}</Strong>`;

}


agregarAmigo();

