/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem. */

const precoEtanol = 5;
const precoGasolina = 10;
const kmPorLitro = 10;
const distanciaEmKM = 100;
const tipoCombustivel = 'Etanol';

const litrosConsumidos = distanciaEmKM / kmPorLitro;

if(tipoCombustivel === 'Gasolina'){
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto); //para arredondar em 2 casas decimais
} else {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto); //para arredondar em 2 casas decimais
}



