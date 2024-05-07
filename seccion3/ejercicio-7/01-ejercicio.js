//magia con closures

function contador() {
    let variableSumadora = 0;
    return function sumador() {
        return variableSumadora += 1
    }
}

let retornaFuncion = contador();
let retornavalorIncrementado = retornaFuncion() //desde la misma declaración se ejecuta
retornavalorIncrementado = retornaFuncion()
console.log(retornavalorIncrementado)

let arranque = confirm("¿desea continuar?")

while (arranque) {

    let inputUsuario = confirm("deseas incrementar el valor? el valor actual es " + retornavalorIncrementado)

    if (inputUsuario) {
        retornavalorIncrementado = retornaFuncion()
        console.log(`el valor nuevo es: ${retornavalorIncrementado}`) 
    }

    arranque = confirm("desea continuar?")
}

