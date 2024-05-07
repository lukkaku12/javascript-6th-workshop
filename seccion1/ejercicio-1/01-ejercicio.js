




// Global Scope
var globalVariable = "Soy una variable global.";

let inputUsuario = confirm("crees que puedes acceder desde el scope global a la variable functionVariable");

if (!inputUsuario) {
    console.log("correcto")
} else {
    console.error("incorrecto")
}

function testScope() {
  // Function Scope
  var functionVariable = "Soy una variable local.";

  let inputUsuario2 = confirm("crees que puedes acceder desde el scope funcion a la variable globalVariable?");
  if (inputUsuario2) {
    console.log("correcto", globalVariable)
} else {
    console.error("incorrecto")
}

  if (true) {
    // Block Scope
    let blockVariable = "Soy una variable de bloque.";
    console.log("Dentro del bloque:", blockVariable);
    let inputUsuario3 = confirm("crees que puedes acceder desde el scope bloque a la variable functionVariable");
    if (inputUsuario3) {
        console.log("correcto", functionVariable)

    } else {
        console.error("incorrecto")
    }
  }

  console.log("Dentro de la función:", functionVariable);
}

console.log("Fuera de la función:", globalVariable);
testScope();