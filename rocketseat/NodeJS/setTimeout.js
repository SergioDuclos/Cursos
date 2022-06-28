
const   timeOut = 3000
const   finished = () => console.log ("done")

let timer =  setTimeout (finished, timeOut)
console.log ('Mostrar')
clearTimeout (timer)
