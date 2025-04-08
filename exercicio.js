const prompt = require("prompt-sync")()

console.log("bem vindo ao curso de JavaScript")
console.log("estou aprendendo a usar o console.log")

console.log(15 + 25)
console.log(100 - 45)
console.log(17 * 7)
console.log(144 / 12)
console.log(20 % 3)
console.log(2 ** 5)

//Execicios de variaveis

// 1 - Criar 3 variaveis nomeAluno, altura, escola, ano
let nomeAluno = "Malu"
let altura = 1.58
let escola = "Sesi"
let ano = 2025
//exibir os valores das variaveis 
console.log(`a aluna ${nomeAluno} tem ${altura} estuda na escola ${escola} e esta no ano ${ano}`)

//2 - Crie 3 variaveis e atribua os valores
let nomeProfessor = "Edcarlos"
let materia = "matematica"
let anoIngresso = 2020
//exibir valores das variaveis
     console.log(`o professor ${nomeProfessor} que leciona
        a materia ${materia} no ${ano}.
        e ingressou na ${escola} no ano de ${anoIngresso}`)

//Reatribuindo valores as nossas variaveis.
nomeAluno = prompt('digite o nome do aluno?')
altura = parseFloat(prompt('digitea altura?'))
ano = parseInt(prompt('digite o ano da turma? '))
console.log(`a aluna ${nomeAluno} tem ${altura} estuda na escola ${escola} e esta no ano ${ano}`)
     
nomeProfessor = prompt('digite o nome do professor: ') 
materia = prompt('digite o nome da materia:')
console.log(`o professor ${nomeProfessor} que leciona 
     a materia ${materia} no ${ano}.
     e ingressou na ${escola} no ano de ${anoIngresso}`)
