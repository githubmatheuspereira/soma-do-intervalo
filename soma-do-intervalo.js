//Digite os números para executar a soma do intervalo:

let x = 1;
let y = 200;

console.log(soma_intervalo());

function soma_intervalo(){
    let total, resultado_parcial = 0;
    total = y/2;
    resultado_parcial = y+x;

    let resultado = total * resultado_parcial;
    return resultado;
}

//Código com meu pensamento lógico:
let a = 1;
let b = 200;
let total = 0;

total = ((b/2) * (b+a));

console.log('Feito pelo Matheus: ' + total)