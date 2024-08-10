let posicionActual = { fila: 5, columna: 1 }; // Inicialización en el cuadrado 17

function actualizarBotones() {
  const maxFila = 5;
  const maxColumna = 4;

  const botonArriba = document.getElementById('boton-arriba');
  const botonAbajo = document.getElementById('boton-abajo');
  const botonIzquierda = document.getElementById('boton-izquierda');
  const botonDerecha = document.getElementById('boton-derecha');

  const celdaActual = document.getElementById(`cuadro-${(posicionActual.fila - 1) * maxColumna + posicionActual.columna}`);

  // Verificar si se puede mover en cada dirección según los bordes verdes
  botonArriba.disabled = !celdaActual.classList.contains('verde-arriba');
  botonAbajo.disabled = !celdaActual.classList.contains('verde-abajo');
  botonIzquierda.disabled = !celdaActual.classList.contains('verde-izquierda');
  botonDerecha.disabled = !celdaActual.classList.contains('verde-derecha');
}

function mover(direccion) {
  const maxFila = 5;
  const maxColumna = 4;

  let nuevaFila = posicionActual.fila;
  let nuevaColumna = posicionActual.columna;

  if (direccion === 'arriba' && nuevaFila > 1 && !document.getElementById(`boton-arriba`).disabled) {
    nuevaFila--;
  } else if (direccion === 'abajo' && nuevaFila < maxFila && !document.getElementById(`boton-abajo`).disabled) {
    nuevaFila++;
  } else if (direccion === 'izquierda' && nuevaColumna > 1 && !document.getElementById(`boton-izquierda`).disabled) {
    nuevaColumna--;
  } else if (direccion === 'derecha' && nuevaColumna < maxColumna && !document.getElementById(`boton-derecha`).disabled) {
    nuevaColumna++;
  }

  // Actualizar la posición si se ha movido
  if (nuevaFila !== posicionActual.fila || nuevaColumna !== posicionActual.columna) {
    const celdaActual = document.getElementById(`cuadro-${(posicionActual.fila - 1) * maxColumna + posicionActual.columna}`);
    const celdaDestino = document.getElementById(`cuadro-${(nuevaFila - 1) * maxColumna + nuevaColumna}`);

    // Quitar el círculo de la celda actual
    celdaActual.querySelector('.redondel').remove();

    // Eliminar el overlay negro del nuevo cuadrado
    const overlayNegro = celdaDestino.querySelector('.overlay-negro');
    if (overlayNegro) {
      overlayNegro.remove();
    }

    // Mover el redondel al nuevo cuadrado
    posicionActual = { fila: nuevaFila, columna: nuevaColumna };
    celdaDestino.innerHTML += '<div class="redondel"></div>';
    celdaDestino.style.backgroundColor = 'transparent'; // Mantener el fondo transparente en el nuevo cuadrado

    actualizarBotones(); // Actualiza el estado de los botones después del movimiento
  }
}

function generarTablero() {
  const filas = 5;
  const columnas = 4;

  // Borra cualquier estilo previo
  for (let i = 1; i <= filas; i++) {
    for (let j = 1; j <= columnas; j++) {
      const celda = document.getElementById(`cuadro-${(i - 1) * columnas + j}`);
      celda.classList.remove('verde-arriba', 'verde-abajo', 'verde-izquierda', 'verde-derecha');
    }
  }

  // Lista de estilos para cada celda del 1 al 20
  const estilos = [
    ['verde-abajo', 'verde-derecha'],                // Cuadro 1
    ['verde-izquierda', 'verde-abajo'],              // Cuadro 2
    ['verde-abajo', 'verde-derecha'],                // Cuadro 3
    ['verde-izquierda', 'verde-abajo'],              // Cuadro 4
    ['verde-arriba', 'verde-abajo', 'verde-derecha'], // Cuadro 5
    ['verde-arriba', 'verde-derecha', 'verde-izquierda'], // Cuadro 6
    ['verde-arriba', 'verde-izquierda', 'verde-abajo'], // Cuadro 7
    ['verde-arriba', 'verde-abajo'],                 // Cuadro 8
    ['verde-arriba', 'verde-derecha', 'verde-abajo'], // Cuadro 9
    ['verde-izquierda', 'verde-derecha', 'verde-abajo'], // Cuadro 10
    ['verde-arriba', 'verde-izquierda', 'verde-derecha', 'verde-abajo'], // Cuadro 11
    ['verde-izquierda', 'verde-arriba'],              // Cuadro 12
    ['verde-arriba', 'verde-abajo'],                 // Cuadro 13
    ['verde-abajo', 'verde-derecha', 'verde-arriba'], // Cuadro 14
    ['verde-izquierda', 'verde-arriba', 'verde-derecha'], // Cuadro 15
    ['verde-izquierda', 'verde-abajo'],               // Cuadro 16
    ['verde-arriba', 'verde-derecha'],               // Cuadro 17
    ['verde-izquierda', 'verde-arriba', 'verde-derecha'], // Cuadro 18
    ['verde-izquierda', 'verde-derecha'],            // Cuadro 19
    ['verde-izquierda', 'verde-arriba']              // Cuadro 20
  ];

  // Aplicar los estilos a los cuadrados del 1 al 20
  for (let i = 1; i <= 20; i++) {
    const celda = document.getElementById(`cuadro-${i}`);
    estilos[i - 1].forEach(borde => {
      celda.classList.add(borde);
    });
  }
}

// Función para inicializar el tablero
function inicializarTablero() {
  const tablero = document.getElementById('tablero');
  const filas = 5;
  const columnas = 4;

  for (let i = 0; i < filas; i++) {
    const fila = document.createElement('tr');
    for (let j = 0; j < columnas; j++) {
      const celda = document.createElement('td');
      celda.id = `cuadro-${i * columnas + j + 1}`;
      celda.innerHTML = `<span>${i * columnas + j + 1}</span>`; // Números visibles en cada cuadrado

      // Añadir el div negro por encima de cada cuadrado
      const overlayNegro = document.createElement('div');
      overlayNegro.classList.add('overlay-negro');
      overlayNegro.style.backgroundColor = 'black';
      overlayNegro.style.width = '100%';
      overlayNegro.style.height = '100%';
      overlayNegro.style.position = 'absolute';
      overlayNegro.style.top = '0';
      overlayNegro.style.left = '0';

      celda.style.position = 'relative'; // Asegura que el overlay se coloque correctamente
      celda.appendChild(overlayNegro);
      fila.appendChild(celda);
    }
    tablero.appendChild(fila);
  }

  generarTablero(); // Genera el tablero con bordes coloreados

  // Inicializa el Redondel en la posición inicial (Casillero 17)
  posicionActual = { fila: 5, columna: 1 }; // Posición por defecto inicializada aquí
  const celdaInicial = document.getElementById(`cuadro-${17}`); // El cuadrado 17
  celdaInicial.innerHTML += '<div class="redondel"></div>';
  celdaInicial.style.backgroundColor = 'transparent'; // Fondo transparente en el cuadrado 17

  // Eliminar el overlay negro en la posición inicial
  celdaInicial.querySelector('.overlay-negro').remove();

  // Dependiendo de dónde esté el Redondel, inicializa los botones.
  actualizarBotones();
}

document.addEventListener("DOMContentLoaded", function () {
  inicializarTablero();
});


