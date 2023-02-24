const boxes = document.querySelectorAll('.box'); // Obtiene los div con la clase 'box'
const colors = ['red', 'green', 'blue', 'yellow']; // Define los colores para cada div

// Agrega un evento 'mouseover' a cada div
boxes.forEach((box, index) => {
  box.addEventListener('mouseover', () => {
    box.style.backgroundColor = colors[index];
  });

  // Agrega un evento 'click' a cada div
  box.addEventListener('click', () => {
    alert(`El color es ${colors[index]}`);
  });
});

// Función para restablecer los colores de los div
function resetColors() {
  boxes.forEach((box) => {
    box.style.backgroundColor = 'white';
  });
}
