function calcularMedioTransporte() {
    let distanciaInput = document.getElementById("distancia");
    let distancia = parseFloat(distanciaInput.value);

    let resultado = document.getElementById("resultado");

    if (isNaN(distancia)) {
        resultado.textContent = "Por favor, ingrese una distancia válida.";
        resultado.style.color = "red";
        return;
    }

    if (distancia >= 0 && distancia <= 1000) {
        resultado.textContent = "El medio de transporte apropiado es a pie.";
    } else if (distancia > 1000 && distancia <= 10000) {
        resultado.textContent = "El medio de transporte apropiado es en bicicleta.";
    } else if (distancia > 10000 && distancia <= 30000) {
        resultado.textContent = "El medio de transporte apropiado es en colectivo.";
    } else if (distancia > 30000 && distancia <= 100000) {
        resultado.textContent = "El medio de transporte apropiado es en auto.";
    } else {
        resultado.textContent = "El medio de transporte apropiado es en avión.";
    }

    resultado.style.color = "#007bff";
}


/*Actividad 2 */

function encontrarMayor() {
    const inputNumeros = document.getElementById("inputNumeros").value;
    const arrayNumeros = inputNumeros.split(",").map(Number);
    
    let mayor = arrayNumeros[0];
    for (let i = 1; i < arrayNumeros.length; i++) {
      if (arrayNumeros[i] > mayor) {
        mayor = arrayNumeros[i];
      }
    }
    
    document.getElementById("resultado2").innerText = `El número más grande es: ${mayor}`;
  }
  
