const prompt = require(`prompt-sync`)()

let Nota1 = (prompt('Digite a nota do aluno'))
let Nota2 = (prompt('Digite a segunda nota do aluno'))

let soma = Nota1 + Nota2
console.log(soma)
let Media = soma /2
console.log(Media)

if(Nota1 >= 7 ){
    console.log('aprovado')
}else{
    console.log('reprovado')
}