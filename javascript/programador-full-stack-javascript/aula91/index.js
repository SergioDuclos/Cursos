

let warpCount = 0
let chosenOption = ""
let spaceship = prompt ("Digite o nome da Nave")

chosenOption = prompt ("Deseja entrar em dobra espacial? \n 1-Sim \n 2-Não")
while(chosenOption ==1) {
    warpCount +=1
    chosenOption = prompt ("Deseja realizar a próxima dobra espacial? \n 1-Sim \n 2-Não")

    alert ("Nave: " +spaceship+ "\n Quantidade de Dobras: "+ warpCount)
}

/*

let velocity = 50
let acceleration = 5
while(velocity <=100){
console.log ("Estamos acelerando a " + velocity + " km/h" )
velocity += acceleration 
}
*/


