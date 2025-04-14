const prompt = require(`prompt-sync`)()

let temperatura = Number(prompt("digite uma temperatura: "))

if(temperatura <= 15){
    console.log("esta frio!")
}
else if(temperatura >= 15 && temperatura <= 25){
    console.log("essa temperatura esta agradavel!")

}else if(temperatura >= 26 && temperatura <= 35){
    console.log("a temperatura esta quente!")
}else{
    console.log("muito quente");}
