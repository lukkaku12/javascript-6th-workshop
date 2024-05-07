console.log("Inicio del script");

// Macrotarea: setTimeout
setTimeout(() => {
  console.log("Macrotarea 1 second (setTimeout)");
}, 1000);

setTimeout(() => {
  console.log("Macrotarea 0 seconds (setTimeout)");
}, 0);

// Microtarea: Promesa
Promise.resolve()
  .then(() => {
    setTimeout(() => {
      console.log("Macrotarea (setTimeout) inside Microtarea 1");
      return "from micro 1";
    }, 0);
  })
  .then((message) => {
    console.log("Microtarea 2 (Promesa)");
  });

// Microtarea: Promesa
Promise.resolve()
  .then(() => {
    console.log("Microtarea 3 (Promesa)");
  })
  .then(() => {
    console.log("Microtarea 4 (Promesa)");
  });

console.log("Fin del script");

// ¿Qué tareas se consideran macrotareas y cuáles son microtareas?
// tareas como el timer setTimeOut, es considerada macro tarea, y las promesas se consideran microtareas por manejar el resultado de la promesa.
// ¿Cómo se relacionan las macrotareas y microtareas con el event loop?
// ambas se ejecutan en el mismo call stack
// ¿Qué sucede cuando una microtarea genera una nueva macrotarea dentro de ella?
// esa macrotarea se dirije a la callback queue y tendra que esperar que las microtareas siguientes se ejecuten para la macrotarea ejecutarse
// ¿Cómo se manejan las promesas y los setTimeout en relación con el event loop?
//las promesas cuando se resuelven o se cancelan tienen el manejador de eventos, este se considera microtarea. El setTimeOut nada mas tiene una funcion callback que al no manejar ningun evento tira la funcion desdepues de x tiempo al callback queue. 