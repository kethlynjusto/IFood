function teste(){  //executa o bloco de códigos sempre que a função é chamada
      console.log('teste');
}

teste(); //aqui manda executar a função


console.log('######################');

function sayMyName(name){
    console.log('Your name is: ' + name);
}

sayMyName('Kethlyn');
sayMyName('Maria');

console.log('######################');

function quadrado(valor){
    return valor * valor; //devolver é para reutilizar essa operação em outro lugar
}

const resquadrado = quadrado(10);
console.log(resquadrado);

console.log('######################');
