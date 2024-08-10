
function selectImage(container, imageName) {
  // Quita la clase 'selected' de todas las imágenes
  const allContainers = document.querySelectorAll('.image-container');
  allContainers.forEach(c => {
      const img = c.querySelector('img');
      img.classList.remove('selected');
  });

  // Añade la clase 'selected' a la imagen clickeada
  const img = container.querySelector('img');
  img.classList.add('selected');

  // Muestra el mensaje del Personaje elejido
  const selectionText = document.getElementById('selectionText');
  selectionText.textContent = `Has seleccionado a ${imageName}`;
  selectionText.classList.add('active');

  const div_boton = document.getElementById('div_boton');
  div_boton.classList.remove('oculto');
  div_boton.classList.add('visible');
}

var personajeElegido = null;

function playSound1() {
  var audio = document.getElementById("benjaAudio");
  audio.currentTime = 0; // Reiniciar al inicio para reproducir en cada clic
  audio.play();
  personajeElegido = 1;
  console.log('El personaje elegido es', personajeElegido);
}
function playSound2() {
  var audio = document.getElementById("jazAudio");
  audio.currentTime = 0; // Reiniciar al inicio para reproducir en cada clic
  audio.play();
  personajeElegido = 2;
  console.log('El personaje elegido es', personajeElegido);
}



//************************ --PAGINA DE JUEGO-- ***************************************//

if (personajeElegido == 1) {
  var imagenBenja = './imgs/Benja.png'; // Ruta de la imagen del gato
  document.getElementById('personajePrincipal').src = imagenBenja;
} 
if (personajeElegido == 2) {
  var imagenJaz = './imgs/Jaz.png'; // Ruta de la imagen del gato
  document.getElementById('personajePrincipal').src = imagenJaz;
}





