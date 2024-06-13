
  function validaNOMBRE() {
    var valor = document.getElementById("nombre").value;


    if (!(/[A-Z][a-zA-Z]*[a-zA-Z]$/.test(valor))) {
        return false;
    }

    return true;
}
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
    var nombreInput = document.getElementById("nombre");
    if (!validaDNI(dniInput.value)) {
        dniInput.setCustomValidity("El DNI no es válido.");

        return false;
    } else {
        dniInput.setCustomValidity("");
    }
    if (!validaNOMBRE(nombreInput.value)) {
        nombreInput.setCustomValidity("El NOMBRE no es válido.");

        return false;
    } else {
        nombreInput.setCustomValidity("");
    }
    if (!confirm("Pulsa aceptar para enviar")) {
        e.preventDefault();
        return false;
    }
    return true;
}
