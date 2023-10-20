
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
function trocarTexto() {
    var elemento = document.getElementById("frase");
    var elementoNovo = document.getElementById("novafrase").value;
    elemento.innerHTML = elementoNovo;
}
function somar() {
    var n1 = document.getElementById("n1");
    var n2 = document.getElementById("n2");
    var soma = n1 + n2
    var elemento = document.getElementById("resultado").value;
    elemento.innerHTML = soma
}