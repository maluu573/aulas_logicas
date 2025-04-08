// Importando a biblioteca para entrada de dados
const prompt = require("prompt-sync")()


//variaveis constantes 
// passo 1 receber o nome da pessoa
let nome = "ayrton"
let idade = 36
let peso = 76.5
console.log(nome, idade, peso)
console.log(nome, idade, peso)

// receber e armazenao texto em uma variavel 
let curso = "desenvolvimento de sistemas"
// #tipo nome recebe valor na variavel

//exibir o valor armazenado 
console.log("curso") //imprimo uma string(texto)
console.log(curso) //imprimi o valor que esta dentro da variavel
console.log("curso", curso)

//criando e atribuindo valor a outras variaveis
let idade2 = 35 //valor do tipo int
let temperatura = 23.5; //valor do tipo float
let nome2 = "marialuiza"

console.log("ola", nome2,  "voce tem:", idade2, 
         "e hoje esta fazendo", temperatura, "ºC" )

//usando templante string
console.log(`Olá ${nome2}, voce tem ${idade2}
    e hoje esta fazendo: ${temperatura}Cº
    `)

    let chovendo = false
    let dia = true
// nas constantes nao podem ser reatribuidos novos valores
    const PI = 3.1415
    console.log(PI)
    // Utilizando prompt para receber dados
//Entrada de dados

//no prompt sempre recebemos uma string 
idade = parseFloat(`Qual sua idade ?`)
peso = parseFloat(prompt(`qual seu peso ?`))

console.log(`Seu nome é ${nome}, você tem ${idade} e pesa${peso}`)
// valida o tipo de variavel
console.log(typeof(idade))
console.log(typeof(peso))
//Apos a conversacao dos valores é possivel realizar
//calculos matematicos
console.log(idade + peso)