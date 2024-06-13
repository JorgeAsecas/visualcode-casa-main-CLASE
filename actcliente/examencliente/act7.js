const inputs = document.querySelectorAll('input');
   inputs.forEach(input => {
     input.addEventListener('blur', function() {
            if (!this.checkValidity()) {
              this.value = '';
        }
        });
  });
document.getElementById("form").addEventListener('submit', submitt);


    function submitt(e) {
        e.preventDefault();
        const form = e.target;
        const datos = new FormData(form);
        const objetodatos = Object.fromEntries(datos.entries());
        const nombre = datos.get('nombre');
        const apellido = datos.get('apellido');
        const edad = datos.get('edad');
        const dni = datos.get('dni');
        const sexo = datos.get('sexo');
        const lnacimiento = datos.get('lnacimiento');


        const cuerpoCorreo =
            "Nombre:" + nombre + "%0A" +
            "Apellido: " + apellido + "%0A" +
            "Edad: " + edad + "%0A" +
            "Dni: " + dni + "%0A" +
            "Sexo: " + sexo+ "%0A" +
            "Lugardenacimiento:" + lnacimiento;

        window.location.href = "mailto:Rafael.figueroa@iesdonana.org?subject=Formulario&body=" + cuerpoCorreo;
    }
