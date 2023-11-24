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
function contar() {  
    var a = ["Celso Portiolli", "Barack Obama", "Wagner", "Jazzghost", "Joe Biden"]
    var position = a.indexOf(prompt("Diga um nome"))
    if (position != -1) {
        alert("encontrado")
    }
    else {
        alert("não encontrado")
    }
    for ( let index = 0; index < a.length; index++) {
        const nome = a[index]
        if(nome == "Jazzghost") {
            alert("casinha " + index + " tem " + nome )
        }
    }
    console.table(a)
}
function contar2() {
    var n = 0
    while (n != 25) {
        n = prompt('diga um número')
    }
}
function listas() {
    var lista = [1,2,3,4,5,6,7]
    for ( var cont = 0; cont < lista.length; cont++) {
        var texto = lista[cont]
        console.log(texto)
    }
}
function numeros() {
    var array = []
    var n1 = parseInt(prompt('Diga um número'))
    for ( let cont = 0; cont <= n1; cont++) {
        array.push(cont)
    }
    console.table(array)
    var n2 = parseInt(prompt('Diga um número para ser removido'))
    for ( let index = 0; index < array.length; index++) {
        const nome = array[index]
        if(nome == n2) {
            break
        }
    }
    const index = array.indexOf(n2)
    if (index == -1) {
        alert('Não está na lista')
        return
    }
    array.splice(index, 1)
}
function notasCalc() {
    var notas = []
    const nota1 = parseFloat(prompt('Digite sua primeira nota'))
    notas.push(nota1)
    const nota2 = parseFloat(prompt('Digite sua segunda nota'))
    notas.push(nota2)
    let soma = parseFloat(0)
    for ( let index = 0; index < notas.length; index++) {
        const nota = notas[index]
        soma += nota
    }
    var nota3 = 18 - soma
    if (nota3 < 0) {
        var nota3 = 0
    }
    console.log(nota3)
}
function ListaNumeros() {
    var lista = []
    for ( let i = 1; i < 6; i++) {
        let num = parseInt(prompt('Diga um Número'))
        lista.push(num)
    }
    ListaNumerosPrint(lista)
    ListaNumerosSoma(lista)
}
function ListaNumerosPrint(lista) {
    for ( let index = 0; index < lista.length; index++) {
        const num = lista[index]
        document.write(num + "<br>")
    }
}
function ListaNumerosSoma(lista) {
    let soma = 0
    for ( let index = 0; index < lista.length; index++) {
        const num = lista[index]
        soma += num
    }
    console.log(soma)
}
function ListaNumerosPares(lista) {

}
function ListaNumerosImpares(lista) {

}
function ListaNumerosSomaPares(lista) {

}
function ListaNumerosSomaImpares(lista) {

}
