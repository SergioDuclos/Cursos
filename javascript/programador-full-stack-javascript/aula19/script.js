let departureDateEntray =  prompt (" Digite a data de partida (Formato da data DD/MM/AAAA)");

let departureDate = moment (departureDateEntray, "DD/MM/YYYY");
let today = moment ();
let dateDiff = today - departureDate;
let chosenOption = prompt ("Escolha como gostaria de exibir o tempo de partida \n1- Segundos\n2- Minutos\n3- Horas\n4- Dias  ");
   if (chosenOption == "1"){
      let secondsOfDeparture = Math.round(dateDiff/1000)
      alert ("Tempo de Vôo: " + secondsOfDeparture + " segundos");
   }else if (chosenOption == "2"){
      let minutesOfDeparture = Math.round(dateDiff/1000/60)
      alert ("Tempo de Vôo: " + minutesOfDeparture + " minutos");
   } else if (chosenOption == "3"){
      let hoursOfDeparture = Math.round(dateDiff/1000/3600)
      alert ("Tempo de Vôo: " + hoursOfDeparture + " horas");
   }else if (chosenOption == "4"){
      let daysOfDeparture = Math.round(dateDiff/1000/3600/24)
      alert ("Tempo de Vôo: " + daysOfDeparture + " dias");
   }else{
      alert ("Opção Invalida");
   }
