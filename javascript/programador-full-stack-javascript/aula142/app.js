class App{
    constructor(){
        this.spaceship = null
    }
}

start();{
    this.enrollSpaceship()
    let choseOption
    do{
        choseOption = this.showInitialMenu ()
        this.redirectFeature (choseOption)
      }while (choseOption !="3")
      this.printAndExit()
}

enrollSpaceship();{
    let spaceshipName = prompt ("Qual o nome da Nave")
    let crewQuantity = prompt ("Qual a quantidade de tripulantes")
    let spaceshipKind = this.askForSpaceshipKind()
    if (spaceshipKind =="1"){
        let weaponsQuantity = prompt ("Quantas armas a nave possui")
        this.spaceship = new BattleSpaceship (spaceshipName, crewQuantity, weaponsQuantity)
    }else{
        let sitsQuantity = prompt ("Quantas lugares a nave possui")
        this.spaceship = new TransportSpaceship (spaceshipName, crewQuantity, sitsQuantity)
    }
}
askForSpaceshipKind ();{
    let choseOption
    while (! ["1","2"].includes(choseOption)){
        choseOption = prompt ("Qual o tiupo da nave?\n 1- Batalha\n 2- Transporte ")
    }
    return choseOption
}


showInitialMenu(){
    const promptMessage = "O que você deseja fazer?\n"+
                          "1 - Acelerar a nave\n"+
                          "2 - Trocar a nave\n"+
                          "3 - Imprimir e Sair"
    let choseOption =  prompt (promptMessage) 
    while (! ["1","2", "3"]).includes(choseOption)){
        choseOption = prompt (promptMessage)
    }
    return choseOption
  }
}

redirectFeature (choseOption){
    switch (choseOption) {
        case "1":
            this.accelerateSpaceship()
            break
        case "2":
            this.enrollSpaceship()
            break    
    }
}
accelerateSpaceship(){
    let acceleration = Number(prompt("Quanto gostaria de acelerar"))
    this.spaceship.speedUp()
}
printAndExit(){
    let finalMessage = "Nome: "+ this.spaceship.name + "\n" +
                        "Quantidade de Tripulantes: " + this.spaceship.crewQuantity + "\n" +
                        "Velocidade Atual: " + this.spaceship.currentVelocity +"\n"
    alert(finalMessage)                           
}