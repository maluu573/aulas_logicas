const prompt = require('prompt-sync')();

//criando nosssa primeira função
function Cabecalho(texto){
    console.log('---------------------');
    console.log('SESI/SENAI');
    console.log('----------------------')
}

//Criando outra função, função de saudação
function Saudação(){
    let nome = prompt('Digite seu nome: ')
    console.log(`${nome} good morning`);
}

//chamando a função 
//Passando o parametro junto com a função
Cabecalho('SESI/SENAI')
//Posso declarar uma variavel e pass-la como parametro para função
let escola = 'Sesi 025'
Cabecalho(escola)
Saudação()

//Criei a função soma que ira receber dois valores como parametro
// a partir desses valores, realizara o calculo e mostrara o resultado
function Soma(n1, n2){
    let resultado = n1 + n2
    console.log(resultado);
}
Soma(5, 6)
Soma(8, 9)
Soma(8, 18)

// Crie uma função com o nome ParImpar, que receba por parametro um numero e verifique se esse numero é par ou impar
//chame essa função por 2 vezes com numeros diferentes

function ParImpar(numero) { 
    if(numero % 2 == 0){
        console.log('par');
        
    }else{
        console.log('impar');
        
    }
}
parImpar(9)
//Função com retorno do resultado
//o calculo é realizadoe é retornada para a chamada da função
function Media(n1, n2) {
    let resultado = (n1 + n2) / 2;
    return(resultado)
}

console.log(Media(6, 8));
//armazenei o retorno da função em uma variavel
let valor = Media(9, 7)
//utilizei o retorno da função para escrever na tela
console.log(valor);
//utilizei a variavel que recebeu o retorno da função para
//chamar a função Par ou Impar passando o valor como parametro
ParImpar(valor)

