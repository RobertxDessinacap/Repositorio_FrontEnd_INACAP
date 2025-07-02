document.addEventListener("DOMContentLoaded", function(){
    const bienvenida = "Bienvenido a mi web personal";
    const tiempo = 100;
    const tiempo_espera =3000;
    let i = 0

    function escribir_bienvenida() {
        if (i < bienvenida.length) {
            document.getElementById("Bienvenida").textContent += bienvenida.charAt(i);
            i++
            setTimeout(escribir_bienvenida, tiempo)
        }
        else {setTimeout(function() {
                Bienvenida.textContent = "";
                i = 0;
                escribir_bienvenida ();
                }, tiempo_espera); 
        }
    }
    escribir_bienvenida();

});