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
    var n1 = parseInt(n1.value)
    var n2 = document.getElementById("n2");
    var n2 = parseInt(n2.value)
    var soma = n1 + n2
    var elemento = document.getElementById("resultado");
    elemento.value = soma
}
function subtrair() {
    var n1 = document.getElementById("n1");
    var n1 = parseInt(n1.value)
    var n2 = document.getElementById("n2");
    var n2 = parseInt(n2.value)
    var diferença = n1 - n2
    var elemento = document.getElementById("resultado");
    elemento.value = diferença
}
function multiplicar() {
    var n1 = document.getElementById("n1");
    var n1 = parseInt(n1.value)
    var n2 = document.getElementById("n2");
    var n2 = parseInt(n2.value)
    var produto = n1 * n2
    var elemento = document.getElementById("resultado");
    elemento.value = produto
}
function dividir() {
    var n1 = document.getElementById("n1");
    var n1 = parseInt(n1.value)
    var n2 = document.getElementById("n2");
    var n2 = parseInt(n2.value)
    var quociente = n1 / n2
    var elemento = document.getElementById("resultado");
    elemento.value = quociente
}
function validar() {
    var elemento = document.getElementById("teste").value
    if (elemento == 'sim') {
        alert('deu certo')
    }
    else {
        alert('não deu certo')
    }
}
function numeros() {
    var n1 = prompt('diga um numero')
    var n1 = parseFloat(n1)
    var n2 = 5
    var total = n1 + n2
    alert('Total = ' + total)
}
function login() {
    var usuario = document.getElementById("usuario")
    var senha = document.getElementById("senha")
    if (usuario == nome123) {
        if (senha == 12345) {
            alert('certo')
        }
    }
}