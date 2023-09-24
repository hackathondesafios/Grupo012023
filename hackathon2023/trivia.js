var respuestasCorrectas = ["b", "c"]; // Respuestas correctas para las preguntas

document.getElementById("calificar").addEventListener("click", function() {
    var respuestasUsuario = [
        document.querySelector('input[name="pregunta1"]:checked').value,
        document.querySelector('input[name="pregunta2"]:checked').value
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

    document.getElementById("resultados").style.display = "block";
    document.getElementById("respuestasCorrectas").innerHTML = respuestasCorrectasHTML;
    alert("Tu puntuación: " + puntaje + " de " + respuestasCorrectas.length);
});

document.getElementById("volverAJugar").addEventListener("click", function() {
    window.location.href = "index.html"; // Redirige a index.html al hacer click
});