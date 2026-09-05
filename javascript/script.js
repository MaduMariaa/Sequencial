//variáveis
let numero1, numero2, resultado1;

function somar() {
    numero1 = parseInt(document.getElementById("numero1").value); //pegar o valor em número com parseInt
    numero2 = parseInt(document.getElementById("numero2").value);
    resultado1 = numero1 + numero2;
    document.getElementById("resultado1").innerHTML = "Resultado: " + resultado1;
}

let celsius, resultado2;

function converter() {
    celsius = parseFloat(document.getElementById("celsius").value);
    resultado2 = (celsius * 9 / 5) + 32;
    document.getElementById("resultado2").innerHTML = "Resultado: " + resultado2 + "°F"; 
}

//parseFloat para pegar o valor em número decimal, pois a temperatura pode ser decimal.

let raio, altura, resultado3;

function calcularCilindro(){
    raio = parseFloat(document.getElementById("raio").value);
    altura = parseFloat(document.getElementById("altura").value);
    resultado3 = 3.141559 * (raio*raio)* altura;
    document.getElementById("resultado3").innerHTML = "Resultado: " + resultado3 + " cm³";
}

let comprimento, largura, altura1, resultado4;

function calcularPrisma() {
    comprimento = parseFloat(document.getElementById("comprimento").value);
    largura = parseFloat(document.getElementById("largura").value);
    altura1 = parseFloat(document.getElementById("altura1").value);
    resultado4 = comprimento * largura * altura1;
    document.getElementById("resultado4").innerHTML = "Resultado: " + resultado4 + " cm³";
}