alert('Olá galera')
function trocarFrase() {
    var elemento = document.getElementById("frase");
    elemento.innerHTML = 'Funcionou, a frase mudou!';
    elemento.style.color = "red";
    elemento.style.fontSize = "25px";
    elemento.style.backgroundColor = "green";
    document.body.style.backgroundColor = "blue";
    elemento.innerHTML = "<img src='img/download.png'>"
}
function trocarClasse() {
    var fraseAtual = document.getElementById("frase")
    fraseAtual.className = "h1_2"
}