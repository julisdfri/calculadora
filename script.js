let pantalla = document.getElementById('pantalla');

// Función para manejar los clics de los botones
function agregar(valor) {
  // Evitar que el usuario escriba múltiples puntos decimales
  if (valor === '.' && pantalla.value.includes('.')) {
    return;
  }
  pantalla.value += valor;
}

// Función para manejar el botón de igual (=)
function calcular() {
  try {
    // Evaluar la expresión en la pantalla
    // La función `eval()` evalúa una cadena de texto como código JavaScript.
    // Es útil para operaciones matemáticas simples.
    // Aunque es potente, se debe usar con precaución en aplicaciones más complejas.
    let resultado = eval(pantalla.value);
    pantalla.value = resultado;
  } catch (error) {
    // Si la expresión es inválida, mostrar un error
    pantalla.value = 'Error';
  }
}

// Función para manejar el botón de borrar (C)
function borrar() {
  pantalla.value = '';
}

// Asignar los eventos a los botones
let botones = document.querySelectorAll('.calculadora input[type="button"]');

botones.forEach(boton => {
  // Obtener el valor del botón
  let valor = boton.value;

  if (valor === '=') {
    boton.onclick = calcular;
  } else if (valor === 'C') {
    boton.onclick = borrar;
  } else {
    boton.onclick = function() {
      agregar(valor);
    };
  }
});