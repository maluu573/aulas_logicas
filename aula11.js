// //trabalhando com laços de repetiçao(while)

// //executar o laço x vezes

// let contador = 1
 
// //irá repetir enquanto a condiçao for verdadeira
// //ou seja sera verdade enquanto o contador for menor ou igual a 5
// while(contador <= 5){
//     console.log(`o contador é ${contador}`)
//     //incrementando a variavel ou seja adicionando valor a ela 
//     //para que continue o processo ate que a conduçao seja atinginda
//     //contador = contador ++
//     contador = contador + 1
// }

// console.log("Fim")

const prompt = require('prompt-sync')()
// let senha_senai = '12345'

// while(true){
//     let senha = prompt('digite a senha:')
//     if(senha_senai == senha){
//         console.log('voce hackeou a senha')
//         break
//     }else if(senha == 'desisto'){
//         break

//     }
// }


// // escreva um programa que fique recebendo o valor de vários produto
// //ate que eu digite 0,
// //e exiba no final a soma da minha compra e a quantidade de produtos lidos

// let soma = 0 
// let qtd = 0

// while(true){
//     let valor = Number(prompt('digite o valor do produto(0 para encerrar):'))
//     if(valor == 0){
//         break
//     }
//     else{
//         soma = soma + valor 
//         qtd++
//     }
// }

// console.log(`foram informados ${qtd}`)
// //toFixed para colocar somente dois digitos apos a virgula
// console.log(`valor total dos produtos ${soma.toFixed(2)}`);

// let soma2 = 0 
// let qtd2 = 0
// let encerrar = ""

// while(encerrar != "SUB-TOTAL"){
//     let valor = Number(prompt('digite o valor do produto:'))
//     soma2 = soma + valor
//     qtd2++
//     encerrar = prompt("Deseja continuar: (digite SUB-TOTAL")
//     }

// console.log(`foram informados ${qtd}`)
// //toFixed para colocar somente dois digitos apos a virgula
// console.log(`valor total dos produtos ${soma2.toFixed(2)}`);


//crie um jogo de adivinhaçao de numeros,
//o computador precisa sortear um numero aleatorio com Radom
//e o usuario precisa digitar um numero,
//enquanto ele nao acertar continua pedindo um novo numero

console.log("#############################");
console.log("😘   JOGO DA ADIVINHÇÃO   😘");
console.log("#############################");

let nrSorteado = Math.floor(Math.random() * 100 + 1); //gera um numero aleatorio
let acertou = false;

while(!acertou){
    const chute = parseInt(prompt('😊 Digite um numero entre 1 e 100 para adivinhar'))

    if(chute > nrSorteado){
        console.log(`voce chutou ${chute}, tente um numero 👇!`);
    }
else if(chute < nrSorteado){
    console.log(`voce chutou ${chute}, tente um numero ☝️!`);
}
else if(chute == nrSorteado){
    console.log(`voce chutou ${chute}, 🎉 Parabéns voce acertou!`);
    acertou = true
    
}

}

console.log('FIM');



