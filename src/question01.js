import leia from 'readline-sync';

var num1 = leia.questionInt("INFORME PRIMEIRO NÚMERO: ");
var num2 = leia.questionInt("INFORME SEGUNDO NÚMERO: ");
var num3 = leia.questionInt("INFORME TERCEIRO NÚMERO: ");
var aux;

if (num1 > num2) {
    aux = num1;
    num1 = num2;
    num2 = aux;
}

if (num1 > num3) {
    aux = num1;
    num1 = num3;
    num3 = aux;
}

if (num2 > num3) {
    aux = num2;
    num2 = num3;
    num3 = aux;
}

console.log("Números em ordem crescente:");
console.log(num1, num2, num3);