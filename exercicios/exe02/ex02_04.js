const prompt = require(`prompt-sync`)()

let numero = Number (prompt('Digite um numero'))
if(numero > 0){
    console.log(`O ${numero} é positivo`)
}
else{
    console.log(`O ${numero} é negativo`)
}