let condition = true;

function cargarYMostrarData() {
  let url = "./data.json";
  // Retorna una nueva promesa que se resuelve después del setTimeout
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Realiza la solicitud fetch dentro del setTimeout
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al cargar los datos.");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Habitaciones:", data.rooms);
          console.log("Tipos de Habitaciones:", data.roomTypes);
          resolve(data); // Resuelve la promesa con los datos cargados
        })
        .catch((error) => {
          console.error(error);
          reject(error); // Rechaza la promesa si hay un error
        });
    }, 0);
  });
}

const reservas = [];

function crearIncrementador() {
  //funcion clausura
  let id = 0;
  return function () {
    return id++;
  };
}
let funcionIdentificador = crearIncrementador();
let incrementador = funcionIdentificador();

function crearReserva(
  fechaInicio,
  fechaFin,
  nombreCompleto,
  numCuarto,
  cantidadHuespedes,
  TipoCuarto
) {
  return {
    id: incrementador,
    nombre: nombreCompleto,
    cantidadHuespedes: cantidadHuespedes,
    fechaInicio: fechaInicio,
    fechaFin: fechaFin,
    numHabitaciónReservada: numCuarto,
    numTipoCuarto: TipoCuarto,
  };
}

cargarYMostrarData().then(({ rooms, roomTypes }) => {
  while (condition) {
    alert("Bienvenido a nuestro sistema de reservas!");

    let inputUsuario = prompt(
      "¿Cuál desea ser su petición?\n1. Reservar una habitación\n2. Verificar disponibilidad de una habitación\n3. Ver reservas actuales del usuario\n4. Cancelar reserva\n5. Editar reserva"
    );

     // Mostrar información de habitaciones disponibles
  for (let i = 0; i < roomTypes.length; i++) {
    console.log(
      `Nombre de la habitación: "${roomTypes[i].name}", Descripción: "${roomTypes[i].description}", Capacidad: ${roomTypes[i].capacity} persona(s)`
    );
  }

  // Mostrar información de habitaciones disponibles
  for (let i = 0; i < rooms.length; i++) {
    if (rooms[i].availability === true) {
      console.log(
        `Número de habitación: ${rooms[i].number}, Precio por noche: ${rooms[i].priceNight}, Tipo de cuarto: ${rooms[i].roomTypeId}`
      );
    }
  }

    switch (inputUsuario) {
      case "1":
        let nombreHuesped = prompt("Nombre del huésped").toLowerCase();
        let fechaInicio = prompt("Fecha de inicio de la reservación");
        let fechaFin = prompt("Fecha de finalización de la reservación");
        let personasAHospedar = Number(
          prompt("Número de personas que se van a quedar")
        );
        let numeroHabitacion = Number(
          prompt("Número de habitación que deseas")
        );
        let TipoCuarto = Number(
          prompt("cual es el tipo de habitación que eligió")
        );
        reservas.push(
          crearReserva(
            fechaInicio,
            fechaFin,
            nombreHuesped,
            numeroHabitacion,
            personasAHospedar,
            TipoCuarto
          )
        );
        const cuartoUsuarioDecision = rooms.find((room) => {
          return room.number === numeroHabitacion;
        });

        cuartoUsuarioDecision.availability = false;
        console.log(rooms);

        break;

      case "2":
        // Lógica para verificar disponibilidad de una habitación
        let inputUsuario = prompt(
          "¿cuál es el nombre del huesped de la reserva?"
        );

        let numerador = 0;
        let reservasDuplicadas = [];

        for (i = 0; i < reservas.length; i++) {
          let nombre = reservas[i].nombreHuesped;

          if (inputUsuario.includes(nombre)) {
            numerador++;
            reservasDuplicadas.push(reservas[i]);
          }
        }
        if (numerador > 2) {
          let reservasPicker = Number(
            prompt(
              "al parecer hay mas de dos reservas con ese nombre, cual deseas mostrar?\nreserva 1 \nreserv2"
            )
          );
          if (reservasPicker === 1 || reservasPicker === 2) {
            // Muestra la reserva seleccionada por el usuario
            console.log(
              `reserva: nombre del huesped ${
                reservasDuplicadas[reservasPicker - 1].nombreHuesped
              }, cantidad de ocupantes ${
                reservasDuplicadas[reservasPicker - 1].personasAHospedar
              }, el número de habitación es ${
                reservasDuplicadas[reservasPicker - 1].numeroHabitacion
              } el tipo de cuarto es: ${
                reservasDuplicadas[reservasPicker - 1].TipoCuarto
              }`
            );
          } else {
            console.log("Opción inválida.");
          }
        }

        break;

      case "3":
        // Lógica para ver reservas actuales del usuario
        inputUsuario = prompt("¿cuál es el nombre del huesped de la reserva?");

        numerador = 0;
        reservasDuplicadas = [];

        for (i = 0; i < reservas.length; i++) {
          let nombre = reservas[i].nombreHuesped;

          if (inputUsuario.includes(nombre)) {
            reservasDuplicadas.push(reservas[i]);
            numerador++;
          }
        }
        if (numerador > 2) {
          let reservasPicker = Number(
            prompt(
              "al parecer hay mas de dos reservas con ese nombre, cual deseas mostrar su disponibilidad?\nreserva 1 \nreserv2"
            )
          );
          if (reservasPicker === 1 || reservasPicker === 2) {
            // Muestra la reserva seleccionada por el usuario

            for (i = 0; i < rooms.length; i++) {
              if (
                reservasDuplicadas[reservasPicker - 1].numeroHabitacion ===
                rooms[i].number
              ) {
                let tipoDeCuartoVerificar = rooms[i].roomTypeId;
                for (let j = 0; roomTypes.length; j++) {
                  if (
                    tipoDeCuartoVerificar === roomTypes[j].id &&
                    roomTypes[j].capacity >= personasAHospedar
                  ) {
                    //si el id del roomType es igual
                    console.log("el cuarto si está apto para su uso");
                  }
                }
              }
            }
          } else {
            console.log("Opción inválida.");
          }
        } else {
          // Muestra la reserva seleccionada por el usuario

          for (i = 0; i < rooms.length; i++) {
            if (reservasDuplicadas[0].numeroHabitacion === rooms[i].number) {
              let tipoDeCuartoVerificar = rooms[i].roomTypeId;
              for (let j = 0; roomTypes.length; j++) {
                if (
                  tipoDeCuartoVerificar === roomTypes[j].id &&
                  roomTypes[j].capacity >= personasAHospedar
                ) {
                  //si el id del roomType es igual
                  console.log("el cuarto si está apto para su uso");
                }
              }
            }
          }
        }
        break;

      case "4":
        // Lógica para cancelar reserva

        let reservasUsuario = [];

        inputUsuario = prompt("¿cuál es el nombre del huesped de la reserva?");
        for (i = 0; i < reservas.length; i++) {
          let nombre = reservas[i].nombreHuesped;
          numerador = 0;
          if (inputUsuario.includes(nombre)) {
            reservasUsuario.push(reservas[i]);
            numerador++;
          }
        }

        if (numerador > 2) {
          let reservasPicker = Number(
            prompt(
              "al parecer hay mas de dos reservas con ese nombre, cual deseas mostrar su disponibilidad?\n1 reserva 1 \n2 reserva 2 \n3 reserva 3"
            )
          );
          if (
            reservasPicker === 1 ||
            reservasPicker === 2 ||
            reservasPicker === Infinity
          ) {
            // Muestra la reserva seleccionada por el usuario

            for (i = 0; i < rooms.length; i++) {
              if (
                reservasUsuario[reservasPicker - 1].numeroHabitacion ===
                rooms[i].number
              ) {
              }
            }
          } else {
            console.log("Opción inválida.");
          }
        } else {
          // Muestra la reserva seleccionada por el usuario

          for (i = 0; i < rooms.length; i++) {
            if (reservasDuplicadas[0].numeroHabitacion === rooms[i].number) {
              let tipoDeCuartoVerificar = rooms[i].roomTypeId;
              for (let j = 0; roomTypes.length; j++) {
                if (
                  tipoDeCuartoVerificar === roomTypes[j].id &&
                  roomTypes[j].capacity >= personasAHospedar
                ) {
                  //si el id del roomType es igual
                  console.log("el cuarto si está apto para su uso");
                }
              }
            }
          }
        }
        break;

      case "5":
        // Lógica para cancelar la reserva
        reservasUsuario = [];
        inputUsuario = prompt("¿cuál es el nombre del huesped de la reserva?");
        for (i = 0; i < reservas.length; i++) {
          let nombre = reservas[i].nombreHuesped;
          numerador = 0;
          if (inputUsuario.includes(nombre)) {
            console.log(reservas[i]);

            reservasUsuario.push(reservas[i]);
          }
        }
        let identificadorReserva = Number(prompt("cual es el numero id de la reserva que desea borrar?"))

        for (let identificador = 0; identificador < reservas.length;identificador++) {
          if (reservas[identificador].id === identificadorReserva && inputUsuario.includes(reservas[identificador].nombreHuesped)) {
            let verificador = confirm("desea continuar y borrar la reserva? no habrá marcha atrás");
            if (verificador) {
              reservas.splice(identificador - 1, 1);
            console.log("reserva eliminada satisfactoriamente")
            } else {
              console.log("la reserva no ha sido eliminada satisfactoriamente")
            }

            
          }
        }

        break;
      case "6":
        // Lógica para editar reserva
        reservasUsuario = [];
        inputUsuario = prompt("¿cuál es el nombre del huesped de la reserva?");
        for (i = 0; i < reservas.length; i++) {
          let nombre = reservas[i].nombreHuesped;
          numerador = 0;
          if (inputUsuario.includes(nombre)) {
            console.log(reservas[i]);

            reservasUsuario.push(reservas[i]);
          }
        }

        for (let identificador = 0; identificador < reservas.length;identificador++) {
          if (reservas[identificador].id === identificadorReserva && inputUsuario.includes(reservas[identificador].nombreHuesped)) {
            
            const nuevaFechaInicio = prompt("cuál va a ser la nueva fecha de inicio de la reserva? año-mes-dia");
            const nuevaFechaFinal = prompt("cuál va a ser la nueva fecha final de la reserva? año-mes-dia");

            reservas[identificador].fechaInicio = nuevaFechaInicio;
            reservas[identificador].fechaFin = nuevaFechaFinal;
            
          }
        }

        break;

      default:
        // Mensaje para entrada no válida
        console.log("Por favor, seleccione una opción válida.");
        break;
    }

    condition = confirm("¿Desea continuar?");
  }

 

  // Capturar datos de reserva del usuario
});
