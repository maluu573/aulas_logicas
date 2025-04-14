let frutas = ['Maça', 'Banana', 'Uva', 'Abacaxi']
//a variavel x serve para iterar os valores ate o limite da lista
//o nome nao é obrigatoriamente ser nome i, x ou contador
//pode ser qualquer nome de variavel
for(let x = 0; x < frutas.length; x++){
    //o length identifica o tamanho total da lista
    console.log(`A fruta é ${frutas[x]}`);

}

let listaNomes = ['Bill Gates', 'Rafinha','Raul Seixas', 'Esteves']
//para cada nome da lista 
for(let nome of listaNomes){
    console.log(nome);
    
}

//verificando se é uma consoante
//lista de vogais
const prompt = require('prompt-sync')

let vogais = ['a', 'e', 'i', 'o', 'u']
let consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'l', 'm', 'n', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
//se letra estiver incluso na lista de vogais, identifico que
//é uma vogal
if(vogais.includes(letras.toLowerCase())){
    console.log('É uma vogal');
}else if(consoantes.includes(letra.toLowerCase())){
    console.log('é uma consoante ')}
  
else{console.log('não é uma letra');
}

    //obtendo a posição do item
    for(let[pos,fruta] of frutas.entries()){
        //entries retorna o par de cada elemento  do vetor
        //ou seja a posição e a fruta
        console.log(`Posição ${pos} e a fruta ${fruta}`);
    }
    
    //separando os itens em uma lista
    let produtos = 'Celular, Notebook, Tv, Tablet, Headset'
    //o split divide a string e forma uma lista a partir do limite
    //no caso abaixo uma virgula 
    let listaProdutos = produtos.split(',')
    for(let produto of listaProdutos){
        console.log(produto);
    }

    //percorrendo uma string com uma lista(lista de caracteres)
    let palavra = 'SENAI'
    for(let letra of palavra){
        console.log(letra)
    }