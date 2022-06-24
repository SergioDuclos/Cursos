let distanceInly = prompt ("Digite a Distancia em ano Luz")
let choseOption = prompt ("Para qual unidade deseja converter? \n1. Parse(pc)\n2. Unidade Astronômica\n3.Quilometros(km)\n\n(Digite o numero da opção desejada)")
let chosenUnity
let convertedDistance

switch (choseOption){
    case "1":
    chosenUnity = "Parsec" 
    convertedDistance = distanceInly * 0.306601
    break
    case "2":
    chosenUnity = "Unidade Astronômica"
    convertedDistance = distanceInly * 63241.1
    break
    case "3":
    chosenUnity = "Kilômetros"    
    convertedDistance = distanceInly * 9.5 * Math.pow(10,12)
    break
    default:
    chosenUnity = "Unidade não Identificada"
    convertedDistance = "Conversão fora do Escopo"        
}
alert ("Distância em Anos-Luz "+ distanceInly + " \n " + chosenUnity + " : " + convertedDistance )

