document.getElementById("calificar").addEventListener("click", function() {
    // Verificar si se ha seleccionado una respuesta para ambas preguntas
    var respuestaPregunta1 = document.querySelector('input[name="pregunta1"]:checked');
    var respuestaPregunta2 = document.querySelector('input[name="pregunta2"]:checked');

    if (!respuestaPregunta1 || !respuestaPregunta2) {
        alert("Por favor, responde ambas preguntas antes de calificar.");
        return; // Detiene la ejecución de la función si no se han respondido ambas preguntas
    }

    var respuestasCorrectas = ["b", "c"]; // Respuestas correctas para las preguntas
    var respuestasUsuario = [
        respuestaPregunta1.value,
        respuestaPregunta2.value
    ];

    var puntaje = 0;
    var respuestasCorrectasHTML = "";

    for (var i = 0; i < respuestasCorrectas.length; i++) {
        if (respuestasUsuario[i] === respuestasCorrectas[i]) {
            puntaje++;
            respuestasCorrectasHTML += "<li>Pregunta " + (i + 1) + ": Correcta</li>";
        } else {
            respuestasCorrectasHTML += "<li>Pregunta " + (i + 1) + ": Incorrecta (Respuesta correcta: " + respuestasCorrectas[i] + ")</li>";
        }
    }

    // Ocultar el contenido anterior
    document.getElementById("contenidoAnterior").style.display = "none";
    
    // Mostrar los resultados
    var resultados = document.getElementById("resultados");
    resultados.style.display = "block";
    document.getElementById("respuestasCorrectas").innerHTML = respuestasCorrectasHTML;
    // alert("Tu puntuación: " + puntaje + " de " + respuestasCorrectas.length);
});

document.getElementById("volverAJugar").addEventListener("click", function() {
    window.location.href = "index.html"; // Redirige a index.html al hacer clic
});
