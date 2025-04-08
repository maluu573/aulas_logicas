constprompt = require('prompt-sync')()
/*
let altura = Number(prompt('Digite sua altura:'))
let peso = Number(prompt('Digite seu peso:'))
let imc = peso / (altura ** 2) 

if(imc < 18.5){
    console.log('Abaixo do peso ideal')
}else if(imc >= 25 && imc < 30){
    console.log('Sobrepeso')
}else{
    console.log('Obesidade')
}


// verificar se o triangulo e equilatero ou escalenio
//receber lado 1

let lado1 = Number(prompt('Digite o valor do lado 1'))
let lado2 = Number(prompt('Digite o valor do lado 2'))
let lado3 = Number(prompt('Digite o valor do lado 3'))

// verificar se o triangulo e equilatero caso tenha todos os
// lados iguais

let eq = (lado1 == lado2) && (lado2 == lado3)
let es = (lado1 != lado2) && (lado2 != lado3) && (lado1 != lado3)

console.log('Triangulo equilatero ?' , eq, 'Triangulo escaleno' , es)



let ladod1 = Number(prompt('digite o valor de um lado de um tirnagulo:'))
let ladod2 = Number(prompt('digite o valor de outro lado de um tirnagulo:'))
let ladod3 = Number(prompt('digite o valor de outro do outro lado de um tirnagulo:'))

if(ladod1== ladod2 && ladod2 == ladod3){
    console.log('seu tiangulo e equilatero')
}else if(ladod1 != ladod2 && ladod2 != ladod3 && ladod1 != ladod3)
    {console.log('seu tiangulo e escaleno')

    }else{
        console.log('triangulo e isosceles');
       
    }

    // descobrir a quantidade de horas trabalhadas
    let horas = Number(prompt('Total de horas trabalhadas: '))
    let vendas = Number(prompt('Total de vendas: '))

    // validar se uma das condições foi atendida
    // (maisde 5000 em vendas ou mais de 40 horas trabalhadas)
    if(vendas > 5000 || horas > 40){
        console.log("Tem direito ao bonus")
    }else{
        console.log("Nao tem direito ao bonus")
    }
*/
    // Crie um algoritmo que recebe um caractere e verifique se ele é 
    //uma vogalou ou uma consoante
let letra = prompt('Digite uma letra: ')
// sinal lógico do "OU" = ||
// sinal lógico do "E" = &&

const prompt = require(`prompt-sync`)()
    console.log(`A letra ${letra} é uma vogal`)

  else{
    console.log(`A letra ${letra} é uma consoante`)
}
 
