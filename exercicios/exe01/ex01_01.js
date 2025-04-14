const prompt = require('prompt-sync') ()

let nr1 = Number (prompt ('digite um numero'))
let nr2 = Number (prompt ('digite um numero'))
let soma = nr1 + nr2
console.log(`A soma entre ${nr1} + ${nr2} é igual: ${soma}`)
