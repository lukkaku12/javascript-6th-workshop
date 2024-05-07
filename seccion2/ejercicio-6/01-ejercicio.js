// console.log("mensaje 1: inmediatamente");
// setTimeout(() => {
//   console.log("mensaje 2: retardo de 0 segundos")
// }, 0);

// setTimeout(() => {
//   console.log("mensaje 3: retardo de 1 segundo")
// }, 1000);



console.log("Inicio del script");

setTimeout(() => {
  console.log("Primer setTimeout");
}, 0);

setTimeout(() => {
  console.log("Segundo setTimeout");
}, 0);

Promise.resolve("Promesa resuelta").then(console.log);

console.log("Fin del script");

let arreglo = []

const userInput = prompt("cuál va a ser el orden cronológico del código? primer impresion en consola").toLowerCase()
arreglo.push(userInput)
const userInput2 = prompt("cuál va a ser el orden cronológico del código? segunda impresion en consola").toLowerCase()
arreglo.push(userInput2)

const userInput3 = prompt("cuál va a ser el orden cronológico del código? tercer impresion en consola").toLowerCase()
arreglo.push(userInput3)

const userInput4 = prompt("cuál va a ser el orden cronológico del código? cuarta impresion en consola").toLowerCase()
arreglo.push(userInput4)

const userInput5 = prompt("cuál va a ser el orden cronológico del código? quinta impresion en consola").toLowerCase()
arreglo.push(userInput5)


 if (arreglo[0].includes("inicio del script")) {
  console.log("correct")
 } else {
  console.log("incorrect")
 }

 if (arreglo[1].includes("fin del script")) {
  console.log("correct")
 } else {
  console.log("incorrect, fin del script va en esta seccion")
 }

 if (arreglo[2].includes("promesa resuelta")) {
  console.log("correct")
 } else {
  console.log("incorrect, promesa se resuelve")
 }

 if (arreglo[3].includes("primer settimeout")) {
  console.log("correct")
 } else {
  console.log("incorrect, va el primer setTimeOut")
 }

 if (arreglo[4].includes("segundo settimeout")) {
  console.log("correct")
 } else {
  console.log("incorrect, va el segundo setTimeOut")
 }

 