/*
<!-- //let spaceship = "FE Supernova"
//console.log(spaceship);
//spaceship = "FE Helmet"
//console.log(spaceship);

//let noValue
//console.log(noValue);
let departureConfirmation = confirm("Nave Pronta")
console.log (departureConfirmation)

 alert ("Bem Vindo")
let name = prompt ("Qual o seu nome")
let age = prompt ("Informe sua idade")  
let ageConfirmation = confirm ("Sua idade " +age+ " anos") 
alert ("Nome: "+ name)
alert ("Idade: "+ age)
alert ("Idade Confirmada "+ ageConfirmation)

-->



let pessoaVelha = prompt ("Digite o Nome da Pessoa mais Velha ")
let idadeVelha = prompt ("Digite o Nome da Pessoa mais Velha ")

let pessoaNova = prompt ("Digite o Nome da Pessoa mais Nova ")
let idadeNova = prompt ("Digite o Nome da Pessoa mais Nova ")

alert ("Diferença de idade é : " + idadeVelha -idadeNova)

alert ( "Nome " + pessoaVelha + " Idade " + idadeVelha )
alert ( "Nome " + pessoaNova + " Idade " + idadeNova )


let velocity = 110
if (velocity < 100){
    alert ("Estamos numa velocidade aceitável")

}else{
    alert ("Estamos numa velocidade de risco")
}
*/

let pilotoName = prompt ("Qual seu nome, piloto")
let velocity = 0
let newVelocity = prompt ("A que velocidade você gostaria de acelerar ?"); 
let confirmVelocity = confirm ("Estamos acelerando " + newVelocity + " km/s");

 if (confirmVelocity){
    velocity = newVelocity
 }

 if (velocity <= 0) {
    alert (" Nave esta parada")
 }else if (velocity < 40){
    alert ("Você esta devagar")
 }else if (velocity < 80){
    alert ("Uma boa velocidade")   
 }else if (velocity <100){
    alert ("Velocidade alta")   
 }else{
     alert ("Velocidade Perigosa")
 }
 
alert ( "Piloto" + pilotoName + "\n Velocidade " + velocity + " km/s" );