/*
console.log ("Aula sobre funções");
function createPhrases(){
console.log (" Estudar é muito bom");
console.log (" Paciência e Persistência");
console.log (" Revisão é a mãe do aprendizado"); 
}
createPhrases()
createPhrases()
createPhrases()


let score = 100
let scoreA = score >= 90 && score <=100
let scoreB = score >= 80 && score <=89
let scoreC = score >= 70 && score <=79
let scoreD = score >= 60 && score <=69
let scoreF = score <  60 && score >=0

let scoreFinal

if (scoreA){
    scoreFinal = "A"  
}else if (scoreB) {
    scoreFinal = "B"  
}else if (scoreC) {
    scoreFinal = "C"  
}else if (scoreD) {
    scoreFinal = "D"  
}else if (scoreF) {
    scoreFinal = "F"  
}else{
    scoreFinal = "Nota Inválida"  
}

console.log (scoreFinal)

*/

let family = {
    incomes  : [2500, 3200, 250.43, 360.45],
    expenses : [320.24,128.45,176.87,1450.00,2000]
 }

 function sum(array){
    let total = 0;

    for (let value of array){
        total += value
    }

    return total

 }

 function calculateBalance(){
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total =  calculateIncomes - calculateExpenses
    const itsOK = total >=0

    let balanceText = "Negativo"
    if (itsOK){
        balanceText = "Positivo"
    }
    console.log (`Seu Saldo é ${balanceText}: ${total.toFixed(2)} `)
  }

  calculateBalance();