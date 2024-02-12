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
