//declarando um novo vetor
//reconheço que é um vetor pelo uso dos colchetes
let listaVazia = [];
console.log(listaVazia);
//declarar uma lista de numeros
let numeros = [1,2,3,4,5,6];
console.log(numeros);
console.log(numeros [2]);

//declaraçao de uma lista de strings
let nomes = ["Ana", "João", "Maria"];
console.log(nomes);

//declaraçao de uma lista mista
let listaMista = [1, "dois", true, 2,5]
console.log(listaMista);

let listaComLista = [
    ["coca-cola", "Cachorro-quente"]
    [5.0,10.0]
]
console.log(listaComLista);

//Alterando valores da lista
let fruta = ['Maça', 'Pera', 'Uva', 'Abacaxi']
console.log(frutas);
//A funçao push adiciona um novo elemento no vetor
frutas.push('Laranja')
console.log(frutas);
//o spread adiciona um novo elemento no vetor
frutas = [...frutas, 'Banana']
console.log(frutas);

frutas.splice(2, 0, 'Morango')
console.log(frutas);

// excluindo item na lista
frutas.splice(3,1) // excluindo item pelo indice
console.log(frutas);
frutas.shift() //excluindo primeiro item da lista
frutas.pop()// excluir ultimo item da lista
console.log(frutas);

//acessar os itens da lista
console.log(frutas[3]); //acesso a partir uma posiçao especifica
console.log(frutas.slice(0,4));//posiçao 0 ate 4
console.log(frutas.slice(1));//a partir da posi 1
console.log(frutas.slice(-1));//mostra os itens do fim
console.log(frutas.length); //totalde itens na lista

//ordenar itens da lista
console.log(frutas);
frutas.sort()//ordenar lista de forma crescente
console.log(frutas);
frutas.reverse()//ordenando de forma decrescente
console.log(frutas);

















