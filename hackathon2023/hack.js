// Obtengo Id para usar de referencia al formulario y al nombre
let formulario = document.getElementById("miFormulario");
let mensaje = document.getElementById("mensaje");
let siguienteVista = document.getElementById("siguienteVista");
let btnSiguiente = document.getElementById("btnSiguiente");

// Agrega un evento submit al formulario
formulario.addEventListener("click", function(event) {
    event.preventDefault(); // Evita el envío predeterminado del formulario

    // Valor del campo de nombre
    var nombreUsuario = document.getElementById("name").value;

    // Verifica si se ingresó un nombre
    if (nombreUsuario !== "") {
        // Muestra un mensaje de bienvenida con el nombre ingresado
        mensaje.innerHTML = "¡Bienvenido, " + nombreUsuario + "!";                
        
        // Muestra el botón para ir a la siguiente vista
        btnSiguiente.style.display = "block";

    } else {
        // Si no se ingresó un nombre, muestra un mensaje de error
        mensaje.innerHTML = "Por favor, ingrese su nombre.";                
        
        // Oculta el botón elegir categoria si no hay un nombre
        btnSiguiente.style.display = "none";
     }
});        
// Agrega un evento click al botón de siguiente vista
btnSiguiente.addEventListener("click", function() {
    window.location.href = "categoria.html";
});
