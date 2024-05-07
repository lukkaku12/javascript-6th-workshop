console.log(`// vars call
console.log("Valor de a:", a);
console.log("Valor de b:", b);
console.log("Valor de c:", c);

// functions call
console.log("Resultado de funcionDeclarada:", funcionDeclarada());
console.log("Resultado de funcionExpresada:", funcionExpresada());

// vars declaration
var a = 1;
let b = 2;
const c = 3;

// functions declarations
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}

const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
}; \n cuál será el resultado?`);
inputUsuario = prompt("");
console.log( //output final
  "Valor de a: indefinido \nValor de b: Uncaught ReferenceError: Cannot access 'b' before initialization \nValor de c: Uncaught ReferenceError: Cannot access 'c' before initialization\nResultado de funcionDeclarada: Función declarada ha sido llamada.\nResultado de funcionExpresada: Uncaught ReferenceError: Cannot access 'funcionExpresada' before initialization\n"
);

//1. mi prediccioón fue que ninguna se iba a mostrar en lo absoluto, al no estar inicializadas antes de mostrarlas iba a mostrar un error, con respecto a lo de las funciones, al menos la funcion en expresion al ser declarada con const no iba a dar ningun resultado.

// vars call
console.log("Valor de a:", a);
console.log("Valor de b:", b);
console.log("Valor de c:", c);

// functions call
console.log("Resultado de funcionDeclarada:", funcionDeclarada());
console.log("Resultado de funcionExpresada:", funcionExpresada());

// vars declaration
var a = 1;
let b = 2;
const c = 3;

// functions declarations
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}

const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};
