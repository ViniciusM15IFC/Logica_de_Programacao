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
    var n1 = parseInt(n1.value);
    var n2 = document.getElementById("n2");
    var n2 = parseInt(n2.value);
    var soma = n1 + n2;
    var elemento = document.getElementById("resultado");
    elemento.value = soma;
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
function verificar() {
    var nome = document.getElementById("nome").value
    var email = document.getElementById("email").value
    var senha = document.getElementById("senha").value
    var idade = document.getElementById("idade").value
    var altura = document.getElementById("altura").value
    var peso = document.getElementById("peso").value
    if (nome != 'fulano') {
        alert('Nome errado')
        return
    }
    if (email != 'nada@nada.com') {
        alert('Email errado')
        return
    }
    if ((senha != '1234') && (senha != '4321')) {
        alert('Senha errada')
        return
    } 
    if (idade < 10) {
        alert('Idade errada')
        return
    }
    if (altura <= 1.40) {
        alert('Altura errada')
        return
    }
    if ((peso > 40) && (peso > 150)) {
        alert('Peso errado')
        return
    }
}
function validarEmail() {
    var email = document.getElementById("idEmail").value
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        alert("Email inválido")
        return
    }
}