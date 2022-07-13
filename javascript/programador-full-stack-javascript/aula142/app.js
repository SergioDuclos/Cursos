class App{
    constructor(){
        this.spaceship = null
    }
}

enrollSpaceship(){
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
askForSpaceshipKind (){
    let choseOption
    while (! ["1","2"]).includes(choseOption)){
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
