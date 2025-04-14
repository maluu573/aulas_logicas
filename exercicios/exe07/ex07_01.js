const prompt = require('prompt-sync')()

//Crie uma lista com 7 filmes
let listaFilmes = ['Meninas nao choram', 'Ainda estou aqui', 'Cidade de Deus','Titanic', 'Minha mãe é uma peça', 'As branquelas', 'Sherek 2']
console.log(listaFilmes);

//Exiba apenas o primeiro filme da lista
console.log(`filme na posiçaõ 1: ${listaFilmes [0]}`)

//Exiba o filme da posição 4
console.log(`filme na posição 4: ${listaFilmes [3]}`)

//Substitua o filme da última posição e exiba a lista
listaFilmes[3] = "Titanic"
console.log(listaFilmes);
listaFilmes[listaFilmes.length -1] = "Cidade de Deus"
console.log(listaFilmes);

//Insira um novo filme na posição 5 e exiba a lista
listaFilmes.push('Sherek2')
console.log(listaFilmes);

//Exclua o primeiro filme e exiba a lista
listaFilmes.shift()

//Exclua o último filme e exiba a lista
listafilmes.pop()

//Exiba os 3 primeiros filmes da lista
console.log(listaFilmes.slice(0,3));
console.log(listaFilmes);

//Exiba os 4 últimos filmes da lista
console.log(listaFilmes.slice(-2));

//Exiba a quantidade de filmes atualmente na lista
console.log(listaFilmes.length);









