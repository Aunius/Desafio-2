document.addEventListener("DOMContentLoaded", function(event) {
    // Your code to run since DOM is loaded and ready
    const boton_suscripcion = document.getElementById("suscripcion"); //Obtiene un elemento del DOM, en este caso el boton de suscripcion
    
    boton_suscripcion.addEventListener("click", function(){
        alert("Las suscripciones se habilitarán pronto"); //Alerta en el navegador
        if(confirm("¿Desea dejar una consulta online?")){ //Aceptar o rechazar
            window.location.href = "/contact-us.html"; //Redireccionar
        }
    });
    
});

