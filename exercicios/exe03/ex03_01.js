const prompt = require(`prompt-sync`)()
// peça ao usuario para digitar um numero
let numero =  Number(prompt('Digite um numero de 1 a 7:'))

//exibir um dia correspondente
if(numero == 1){
    console.log('Domingo')
}
else if(numero == 2){
    console.log('Segunda')
}
else if(numero == 3){
    console.log('Terça')
}
else if(numero == 4){
    console.log('Quarta')
}
else if(numero == 5){
    console.log('Quinta')
}
else if(numero == 6){
    console.log('Sexta')
}
else if(numero == 7){
    console.log('Sabado')
}