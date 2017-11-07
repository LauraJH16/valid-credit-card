// Creamos funcion isValidCard:
function isValidCard(number) {
  // Creamos un array vacio:
  arr = [];
  
  // Creamos un bucle que recorra number:
  for (var i = 0; i < number.length ; i++) {
    // Con esto vamos agregando los elementos al array vacio:    
    arr.push(number[i]);
  }
  
  // Los elementos del array estaran alreves:
  var reverse = arr.reverse();
  var sum = 0; // Inicializamos sum en 0
  var double = 0; // Inicializamos double en 0
  
  // Creamos un bucle que recorra el array, ya al reves:
  for (var j = 1; j < reverse.length - 2 ; j += 2) {
    /* Condicional para saber si los elementos, con indice pares, 
      multiplicados por 2 son mayor a 9: */
    if (reverse[j] * 2 > 9) {
      sum += parseInt((reverse[j] * 2) / 10) + (reverse[j] * 2) % 10; // Se suman las cifras de el numero y se van acumulando
    } else {
      double += reverse[j] * 2; // Se van acumulando los que multiplicados por 2 no son mayor que 9
    }
  }
    
  // Cuando se llame la función, retornará la suma de todos los numeros:
  return (double + sum) + reverse[j - 1];
}
  
  
// Llamamos a la funcion y condicionamos para saber si es una tarjeta valida:
if (isValidCard(prompt('Ingrese numero de Tarjeta')) % 10 === 0) {
  alert('Tarjeta Valida');
} else {
  alert('Tarjeta Invalida');
}