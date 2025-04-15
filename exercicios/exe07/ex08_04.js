//Crie uma lista com as palavras "gato", "cachorro", "pássaro" e "peixe", e imprima cada
//palavra em maiúsculas.
const prompt = require('prompt-sync')();

let listaPalavras = ["gato", "cachorro", "passaro", "peixe"]
for(let animal of listaPalavras){
    console.log(animal.toUpperCase());
    
}
