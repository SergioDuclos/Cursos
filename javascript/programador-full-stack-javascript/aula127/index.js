let spaceship = {
    velocity: 0,
    speedUp : function (accelaration){
        this.velocity += accelaration
    }
}
function registerSpaceship (){
    spaceship.name = prompt ("Informe o nome da Nave")
    spaceship.type = prompt ("Informe o tipo da nave")
    spaceship.maxVelocity = Number(prompt ("Informe a Velocidade máxima da nave (km/s)"))
}
function acelerate() {
    let acceleration = Number (prompt ("Quanto você quer acelerar? (km/s)"))
    spaceship.speedUp(acceleration)
    if (spaceship.velocity > spaceship.maxVelocity){
        alert ("VELOCIDADE MAXIMA ULTRAPASSADA!" +
        "\nVelocidade da nave: " + spaceship.velocity + "Km/s" +
        "\nVelocidade máxima da nave : "+ spaceship.maxVelocity + "km/s")
    }
}
function stop (){
    alert ("Nome: " + spaceship.name + "\nTipo da Nave: " + spaceship.type +
    "\nVelocidade da nave: " + spaceship.velocity + "\nMáxima da nave: "+ spaceship.maxVelocity)
    spaceship.velocity = 0
}

function showMenu (){
    let chosenOption
do {
    chosenOption = prompt ("Voce deseja: \n1 - Acelerar \n2 - Parar")
    switch (chosenOption){
        case "1":
            acelerate()
            break
        case "2":
            stop()
            break
        default:
             alert ("Opção Inválida")
    }
}while (chosenOption != "2")
}

registerSpaceship()
showMenu()