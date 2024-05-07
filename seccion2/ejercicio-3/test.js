function sumador(numero) {
    return function(numero2) {
        return numero + numero2;
    }
}

let sumarCinco = sumador(5) 
console.log(sumarCinco(10))

let sumadorSiete = sumador(7);
console.log(sumadorSiete(7))

