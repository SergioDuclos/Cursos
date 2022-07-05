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
        "\n Velocidade máxima da nave : "+ spaceship.maxVelocity + "km/s")
    }
}
function stop (){
    alert ("Nome: " + spaceship.name + "\nMáxima da nave: " + spaceship.type +
    "\nVelocidade da nave: " + spaceship.velocity + "n\ Máxima da nave: "+ spaceship.maxVelocity)
}