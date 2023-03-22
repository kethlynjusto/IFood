const alunos = ['João', 'Maria', 'Eduarda'];
//                [0]      [1]      [2]

console.log(alunos); // invoca todos os atributos dentro do array
console.log(alunos[0]); //invoca o atributo referente a posição [0].

alunos.push('Renan'); //vai para o final da lista

alunos[4] = 'Vinicius' //identifica exatamente a posição que quer colocar ou substituir o atributo da posição

alunos.pop();  //retira o ultimo da lista

alunos.shift(); //exclui o primeiro

console.log('#########################################')
console.log('Exemplo de soma com notas')


const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

console.log('Notas do semestre: ' + notas);
console.log('Quantidade de notas no semestre: ' + notas.length); //mostrar quantas notas tem

let soma = 0

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota
}

console.log('A soma é: ' + soma);

const media = soma / notas.length;

console.log('A média das notas é: ' + media)
