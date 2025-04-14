const prompt = require('prompt-sync')();

let horas =Number(prompt('que horas são agora meu menino?'))
if(horas >=5 && horas <=11){
    console.log('bom dia! ')
   
}else if(horas >=12 && horas<= 17){
    console.log('boa tarde!');
   
}else if(horas >= 18 && horas <= 23){
    console.log('boa noite!');
   
}else{console.log('vai dormir rapaz!')
}