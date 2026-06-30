import leia from 'readline-sync';

var tempAtual = leia.questionFloat("INFORME A TEMPERATURA ATUAL: ");
var opcao = leia.keyInSelect(
    ["C -> F", "C -> K", "F -> C", "F -> K", "K -> C", "K -> F"],
    "INFORME A CONVERSÃO"
);

switch (opcao) {
    case 0:
        // Conversão C -> F
        var F = (tempAtual * 1.8) + 32;
        console.log("Temperatura convertida: " + F.toFixed(2) + " °F");
        break;

    case 1:
        // Conversão C -> K
        var K = tempAtual + 273.15;
        console.log("Temperatura convertida: " + K.toFixed(2) + " K");
        break;

    case 2:
        // Conversão F -> C
        var C = (tempAtual - 32) * (5 / 9);
        console.log("Temperatura convertida: " + C.toFixed(2) + " °C");
        break;

    case 3:
        // Conversão F -> K
        var K = (tempAtual - 32) * (5 / 9) + 273.15;
        console.log("Temperatura convertida: " + K.toFixed(2) + " K");
        break;

    case 4:
        // Conversão K -> C
        var C = tempAtual - 273.15;
        console.log("Temperatura convertida: " + C.toFixed(2) + " °C");
        break;

    case 5:
        // Conversão K -> F
        var F = (tempAtual - 273.15) * 1.8 + 32;
        console.log("Temperatura convertida: " + F.toFixed(2) + " °F");
        break;

    default:
        console.log("Nenhuma opção selecionada.");
}