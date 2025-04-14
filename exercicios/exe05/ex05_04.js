const prompt = require('prompt-sync')()

//Faça um programa que leia 10 valores inteiros
let i = 0

while(i <= 10){
    entrada = Number(prompt(`digite um numero :`))
    if(entrada > maior){
        maior = entrada
    }
    if(entrada < menor){
        menor = entrada
   }
   
   soma += entrada
   //soma = entrada + soma
   i++
}

let media = soma / 10
console.log(`maior valor: ${maior}`)
console.log(`menor valor: ${menor}`)
console.log(`media: ${media.toFixed(2)}`)