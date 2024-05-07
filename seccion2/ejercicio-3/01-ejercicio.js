function crearSumador() {
  let Cinco = 0 //0
  return function sumarOcho() { //0 + 2
    return (Cinco += 5);
  }
  //se vuelve como un valor asignable la funcion 
}

const b = crearSumador()
console.log(b())

const a = crearSumador()
console.log(a())
console.log(a())
console.log(a())



// let inputUsuario = Number(prompt("numero"));

// crearSumador(inputUsuario);
