//nav responsivo
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    }
    else (x.className = "")
}

//login
function registrarse() {
    var x = document.getElementById("login");
    if (x.style.display === "none") {
        x.style.display = "block"
    }
    else (x.style.display = "none")
}

function salir() {
    document.getElementById("login").style.display = "none";
}

function cambiarParrafo() {
    document.getElementById("espacio_escribir").style.display="block";
    let texto = document.getElementById("nombre_presentacion").innerText;
    console.log(texto);
};

function escribir(valor) {
    document.getElementById("nombre_presentacion").innerText=valor;
};

function logMessage(message) {
    console.log(message + "<br>");
}

//controla si se preciono enter
let textarea = document.getElementById("nombre_presentacion")
textarea.addEventListener('keyup', (e) => {
    logMessage('key "${e.key}" released [event: keyup]');
    if (e.key == "Enter") {
        document.getElementById("espacio_escribir").style.display="none"
    }
});

//carga el contenido del archivo de texto
//y lo muestra en el parrafo
function showFile(input) {
    let file = input.files[0];
    alert('file name: ${file.name}');
    alert('last modified: ${file.lastModified}');

let reader = new fileReader();
reader.readAsText(file);
reader.onload= function() {
    console.log(reader.result);
};
reader.onerror = function() {
    console.log(reader.error);
};
}
