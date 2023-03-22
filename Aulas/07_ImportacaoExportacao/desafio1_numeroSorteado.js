/*
Uma sala de aula contem 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

Dados de entrada:
5
50
10
98
23

Saída:
98
*/

const {gets, print} = require('./desafio1_funcoes')

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numerosSorteado = gets();
    numerosSorteados.push(numerosSorteado)
}

print(numerosSorteados)

let maiorNumero = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numerosSorteado = numerosSorteados[i]

    if(numerosSorteado > maiorNumero){
        maiorNumero = numerosSorteado;
    }
}

print(maiorNumero)

print('\n_________Outra forma_________\n')

let maiorValorEncontrado = 0;

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();

    if (numeroSorteado > maiorValorEncontrado){
        maiorValorEncontrado = numeroSorteado;
    }
    
}

print(maiorValorEncontrado);