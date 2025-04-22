// Crie uma funçao com o nome FormatarData
// que receba por parametro o dia, o mes e o ano e
// retorne ela no formato 'dia/mes/ano', chame ela 3 vezes passandovalores diferentes

function FormatarData(dia, mes, ano){
    let data = `${dia}/${mes}/${ano}`
    return data
}

let valorRetornado = FormatarData('11', '03', '2009')
console.log(valorRetornado);
