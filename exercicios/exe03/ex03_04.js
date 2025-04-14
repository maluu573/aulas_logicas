const prompt = require(`prompt-sync`)()

let nome == prompt("digite seu nome:")
let nota1 = Number(prompt(${nome} `Digite a primeira nota nota: `))
let nota2 = Number(prompt(${nome} `Digite a segunda nota: `))
if (nota1 + nota2 /2 >7){
    console.log(`Aprovado`)
}else if (nota1 + nota2 /2 >= 5 && 7){
    console.log(`Recuperação`)
}else if (nota1 + nota2 /2 <5)
    console.log(`Reprovado`)

if(Media > 7){
    console.log(`Olá${nome}, voce foi aprovado! com media: ${media}`)
}
else if(media > 5 || media < 7){
    console.log(`olá ${nome}, voce esta em recuperação! Com média: ${media}`)
}
else {
    console.log(`olá ${nome}, voce foi reprovada! Com média: ${media}`)
}