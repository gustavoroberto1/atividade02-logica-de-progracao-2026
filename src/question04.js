import leia from 'readline-sync';

var dias = leia.questionInt("INFORME A QUANTIDADE DE DIARIAS: ");
var idade = leia.questionInt("INFORME A IDADE DO HOSPEDE: ");

var valorDiaria;

if (dias <= 5) {
    valorDiaria = 100;
} else if (dias <= 10) {
    valorDiaria = 90;
} else {
    valorDiaria = 80;
}

var valorTotal = dias * valorDiaria;

if (idade > 60) {
    valorTotal = valorTotal * 0.8;
}

console.log("Valor da diária: R$ " + valorDiaria.toFixed(2));
console.log("Valor total da hospedagem: R$ " + valorTotal.toFixed(2));