const pessoa = {
    nome: 'Kethlyn Diniz',
    idade: 31,

    descrever(){
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

pessoa.descrever();

const atributo = 'idade';

console.log(pessoa[atributo]);


class Pessoa {

    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const keth = new Pessoa('Kethlyn', 31);

console.log(keth);

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
    console.log(`${p1.nome} é mais velha que ${p2.nome}`);
    } else if (p1.idade < p2.idade){
    console.log(`${p2.nome} é mais velha que ${p1.nome}`);
    } else {
    console.log(`${p1.nome} tem a mesma idade que ${p2.nome}`);
    }
}

const pessoa1 = new Pessoa ('João', 31);
const pessoa2 = new Pessoa ('Kethlyn', 32);

compararPessoas(pessoa1, pessoa2);