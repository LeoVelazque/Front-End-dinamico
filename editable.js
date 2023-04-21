function cambiarParrafo() {
    document.getElementById("input").style.display="inline-block";
    let texto = document.getElementById("nombre").innerText;
    console.log(texto);
};

function escribir(valor) {
    document.getElementById("input").innerText=valor;
};

function logMessage(message) {
    console.log(message + "<br>");
}

//controla si se preciono enter
let textarea = document.getElementById("input")
textarea.addEventListener('keyup', (e) => {
    logMessage('key "${e.key}" released [event: keyup]');
    if (e.key == "Enter") {
        document.getElementById("input").style.display="none"
    }
});