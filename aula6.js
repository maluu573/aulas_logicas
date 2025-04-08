const prompt = require('prompt-sync')()

// operaçao com variaveis 
let nr1 = Number (prompt ("Digite um numero"))
let nr2 = Number (prompt ("Digite um numero"))
let soma = nr1 + nr2
console.log(`A soma entre ${nr1} + ${nr2} é igual: ${soma}`)



let subtracao = nr1 - nr2 
console.log(`a subtracao entre ${nr1} - ${nr2} e igual: ${subtracao}`)

let multiplicacao = nr1 * nr2 
console.log(`a multiplicacao entre ${nr1} - ${nr2} e igual: ${multiplicacao}`)

let divisao = nr1 / nr2 
console.log(`a divisao entre ${nr1} - ${nr2} e igual: ${divisao}`)
  
let exponenciacao = nr1 ** nr2 
console.log(`a exponenciacao entre ${nr1} - ${nr2} e igual: ${exponenciacao}`)

 // Calculando valor do celular com desconto 
 let valor = Number(prompt(`Digite o preço do celular: `)) 
 let desconto = Number(prompt(`Digite o preço do desconto: `))
console.log(valor)
 valor = valor - desconto
 console.log(`o valor do celular com desconto é R$${valor}`)

//Calculando o dobro e a metade
//passo 1
let numero = Number(prompt(`Digite um numero: `)) 
//passo 2
 let dobro = numero * 2
 //passo 3
 let metade = numero / 2
 //passo 4 
 console.log(`o dobro de ${numero} é ${dobro} e a metade é ${metade}`)

 //calculando custo do projeto
 //let horasPorDia = 8
//definicao da variavel
let horas_por_dia = 8
let dias_totais = 15
let horas_trabalho = horas_por_dia * dias_totais
let custo_hora = 100
let custo_total = horas_trabalho * custo_hora
//exibir resultado
console.log(custoTotal)



