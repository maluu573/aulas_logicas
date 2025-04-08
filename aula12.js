//criando nosso primeiro FOR

for(let i = 0; i < 100; i++){
    console.log(i);
}

//entregando os notebooks por ordem
console.log("Entregando Notebooks");

for(let nr = 1; nr <= 32; nr++ ){
    let nome = prompt(`Quem é o numero ${nr}`)
    let presente = prompt(`O (A) ${nome} veio para escola? (S ou N)`)

    if(presente == 'S'){
        console.log(`Pegar notebook ${nr}` );
        console.log(`Pegar mouse ${nr}`);
        console.log(`Pegar fonte  ${nr}`);
        console.log(`Levar notebooks até ${nr}`);
    }
    else{
        console.log(`Nao pegar notebook ${nr}`);
        
    }
}
