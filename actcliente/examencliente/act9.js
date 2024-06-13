
function validaDNI() {
    var valor = document.getElementById("dni").value;
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    if (!(/^\d{8}[A-Z]$/.test(valor))) {
        return false;
    }

    if (valor.charAt(8) !== letras[(valor.substring(0, 8)) % 23]) {
        return false;
    }

    return true;
}

function validaFormulario(e) {
    var dniInput = document.getElementById("dni");
    if (!validaDNI(dniInput.value)) {
        dniInput.setCustomValidity("El DNI no es válido.");

        return false;
    } else {
        dniInput.setCustomValidity("");
    }
    guardarDatosEnCookies();
    if (!confirm("Pulsa aceptar para enviar")) {
        e.preventDefault();
        return false;
    }
    return true;
}


function guardarDatosEnCookies() {

    var dni = document.getElementById("dni").value;
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var apellido = document.getElementById("apellido").value;
    var sexo = document.getElementById("sexo").value;
    var lnacimiento = document.getElementById("lnacimiento").value;



    document.cookie = `dni=${dni}`;
    document.cookie = `nombre=${nombre}`;
    document.cookie = `edad=${edad}`;
    document.cookie = `apellido=${apellido}`;
    document.cookie = `sexo=${sexo}`;
    document.cookie = `lnacimiento=${lnacimiento}`;

}

function leerCookies() {

    var cookies = document.cookie.split(';');
    var cookieData = {};
    cookies.forEach(cookie => {
        var parts = cookie.split('=');
        var key = parts[0].trim();
        var value = parts[1];
        cookieData[key] = value;
    });


    alert("Datos Guardados en Cookies:\n" +
          "DNI: " + cookieData.dni + "\n" +
          "Nombre: " + cookieData.nombre + "\n" +
          "edad de nacimiento: " + cookieData.edad + "\n" +
          "apellido: " + cookieData.apellido + "\n" +
          "Sexo: " + cookieData.sexo + "\n" +
          "lugar de nacimiento: " + cookieData.lnacimiento + "\n");
}
