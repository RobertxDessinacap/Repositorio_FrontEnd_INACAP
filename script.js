function esEmailValido(email) { // FUncion que valida el mail
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

document.addEventListener("DOMContentLoaded", function() {
    // *************Bienvenida*************
    const bienvenida = "Bienvenido a mi web personal";
    const tiempo = 100;
    const tiempo_espera = 3000;
    let i = 0;

    function escribir_bienvenida() {
        if (i < bienvenida.length) {
            document.getElementById("Bienvenida").textContent += bienvenida.charAt(i);
            i++;
            setTimeout(escribir_bienvenida, tiempo);
        } else {
            setTimeout(function() {
                Bienvenida.textContent = "";
                i = 0;
                escribir_bienvenida();
            }, tiempo_espera);
        }
    }
    escribir_bienvenida();

    // *************FORMULARIO DE CONTACTO*************
    const mostrarFormBtn = document.getElementById('mostrarFormulario');
    const formulario = document.getElementById('formularioContacto');
    const contactForm = document.getElementById('contactForm');
    const mensajeExito = document.getElementById('mensajeExito');
    // *************Guardar datos en array*************
    const contactos = [];

    function guardarContacto(nombre, apellido, email, motivo) {
        contactos.push({
            fecha: new Date().toLocaleString(),
            nombre,
            apellido,
            email,
            motivo
            
        });
        console.log("Contactos guardados:", contactos); // Para verificación
    }





    
    mostrarFormBtn.addEventListener('click', function() {      // Animación de despliegue del formulario
        if (formulario.classList.contains('formulario-visible')) {
            // Cierra el formulario con animación
            formulario.classList.remove('formulario-visible');
            setTimeout(() => {
                formulario.style.display = 'none';
            }, 500);
        } else {
            // Abre el formulario con animación
            formulario.style.display = 'block';
            setTimeout(() => {
                formulario.classList.add('formulario-visible');
            }, 10);
        }
    });










    
    contactForm.addEventListener('submit', function(i) {           // Validación y envío del formulario
        i.preventDefault();
        
                // Obtener valores
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value.trim();
        const motivo = document.getElementById('motivo').value;
        
        
        if (!esEmailValido(email)) {                // Validación de email
            alert('Por favor ingresa un correo electrónico válido (ejemplo: usuario@dominio.com))');
            return;
        }
        guardarContacto(nombre, apellido, email, motivo) //  Ejecuta funcion de guardar contacto
        
        formulario.classList.remove('formulario-visible');                       // Oculta el formulario con animación
        
        setTimeout(() => {
            formulario.style.display = 'none';
            
            // Muestra el mensaje de éxito
            mensajeExito.textContent = "¡Enviado con éxito!";
            mensajeExito.classList.remove('mensaje-exito-oculto');
            mensajeExito.classList.add('mensaje-exito-visible');
            
            
            mostrarFormBtn.textContent = '¿Enviar otro mensaje?';   // Cambia el texto del botón principal
        }, 500);
        
        
        setTimeout(() => {  // Reinicia todo en 4 segundos
            contactForm.reset();
            mensajeExito.classList.remove('mensaje-exito-visible');
            mensajeExito.classList.add('mensaje-exito-oculto');
        }, 4000);
    });

    
});