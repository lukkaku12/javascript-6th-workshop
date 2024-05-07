console.log(
  "Intentando llamar a 'funcionDeclarada' antes de su declaración:"
);
try {
  console.log(funcionDeclarada());
} catch (error) {
  console.log("Error:", error.message);
}

console.log(
  "Intentando llamar a 'funcionExpresada' antes de su declaración:"
);
try {
  console.log(funcionExpresada());
} catch (error) {
  console.log("Error:", error.message);
}

// Declaración de una función declarada
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}

// Declaración de una función expresada
const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};

console.log("Llamando a 'funcionDeclarada' después de su declaración:");
console.log(funcionDeclarada());

console.log("Llamando a 'funcionExpresada' después de su declaración:");
console.log(funcionExpresada());

/* ¿Qué sucedió cuando intentaste llamar a las funciones antes de su declaración?
 al llamar la expresada antes de inicializarse, mostró el error, mientras que la declarada tuvo hoisting, y se pudo aplicar en cualquier parte del codigo.
¿Cómo difieren los resultados entre la función declarada y la función expresada?
  al ser declarada la funcion expresada, el proposito de este const, es evitar el hoisting forzando a declarar primero las funciones y despues llamarlas para evitar errores.
¿Qué indica esto sobre cómo el JavaScript maneja estas dos diferentes declaraciones de funciones?
a pesar de tomar la funcion como un objeto, al ser expresada como variable se toma en cuenta como cualquier otra variable, al ser declarada normalmente, asumo que no tiene ningun limite debido a que esto no contribuiria a errores ya que solo se ejecuta si tu la llamas. */


