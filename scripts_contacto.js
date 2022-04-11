document.addEventListener("DOMContentLoaded", function(event) {
    const form_contacto = document.getElementById("form_contacto");
    const contact_nombre = document.getElementById("contact_nombre");
    form_contacto.addEventListener('submit', function(e){
        if(confirm("¿Desea enviar mensaje?")){ //Aceptar o rechazar
            alert("Gracias por tu mensaje "+contact_nombre.value)
        }else{
            e.preventDefault();
        }
    });
});