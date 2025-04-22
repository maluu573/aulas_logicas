// Crie uma função que recebe um número como parâmetro e exiba a tabuada até o
// 10, chame essa função por 3 vezes enviando parâmetros diferentes

function tabuada(numero) {
    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
    console.log('')
}
tabuada(2);
tabuada(5);
tabuada(7);
