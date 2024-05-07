// function manejarAsincrona(callback, promesa) {
//   setTimeout(() => {
//     promesa
//   },200);
//   callback()
// }

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promesa resuelta")
    
//   }, 200);
// })

// function funcionCallback() {
//   console.log("¡Promesa cumplida y callback ejecutado!")
// }

// manejarAsincrona(funcionCallback, promesa)

function manejarAsincronia(callback) {

  const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promesa correcta"); 
    }, 200);
  });

  miPromesa.then(() => {
    callback(); 
  });
  miPromesa.catch(() => {
    console.error("error")
  })
}



function miCallback() {
  console.log("¡Promesa cumplida y callback ejecutado!");
}



manejarAsincronia(miCallback);
