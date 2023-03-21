/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.*/

class Carro {

    marca;
    cor;
    gastoMedioCombustivel;

    constructor(marca, cor, gastoMedioCombustivel){
        this.marca = marca
        this.cor = cor
        this.gastoMedioCombustivel = (1 / gastoMedioCombustivel)
    }

    calcularGastoPercurso(distanciaKm, precoCombustivel){
        return distanciaKm * this.gastoMedioCombustivel * precoCombustivel;
    }
}

const Carro1 = new Carro('Fiat', 'Prata', 10);


resultado = Carro1.calcularGastoPercurso(70,5);
console.log(resultado);