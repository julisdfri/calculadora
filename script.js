let pantalla = document.getElementById('pantalla');

// Función para añadir números y operadores a la pantalla
function agregar(valor) {
  // Evita que se añadan múltiples puntos decimales
  if (valor === '.' && pantalla.value.includes('.')) {
    return;
  }
  pantalla.value += valor;
}

// Función para evaluar la expresión y mostrar el resultado
function calcular() {
  try {
    // eval() evalúa la expresión de la cadena de texto
    let resultado = eval(pantalla.value);
    pantalla.value = resultado;
  } catch (error) {
    // Muestra "Error" si la expresión es inválida
    pantalla.value = 'Error';
  }
}

// Función para borrar toda la pantalla
function borrar() {
  pantalla.value = '';
}

// NUEVA FUNCIÓN para borrar el último dígito
function borrarUltimo() {
    // slice(0, -1) crea una nueva cadena sin el último carácter
    pantalla.value = pantalla.value.slice(0, -1);
}

// Asignar eventos a todos los botones de la calculadora
let botones = document.querySelectorAll('.calculadora input[type="button"]');

botones.forEach(boton => {
  let valor = boton.value;

  if (valor === '=') {
    boton.onclick = calcular;
  } else if (valor === 'C') {
    boton.onclick = borrar;
  } else if (valor === 'DEL') { // Asigna la función de borrar el último dígito
    boton.onclick = borrarUltimo;
  } else {
    boton.onclick = function() {
      agregar(valor);
    };
  }
});