function carga() {

    var totalVotos = parseInt(getCookie("Cafe Solo") || 0) + parseInt(getCookie("Cafe Con Leche") || 0) +
                     parseInt(getCookie("Cafe Descafeinado") || 0) + parseInt(getCookie("Cafe Con Hielo") || 0);


    document.querySelector('#cafe1').setAttribute("data-content", Math.round((parseInt(getCookie("Cafe Solo") || 0) / totalVotos) * 100) + "%");
    document.querySelector('#porcentaje1').innerText = Math.round((parseInt(getCookie("Cafe Solo") || 0) / totalVotos) * 100) + "%";
    document.querySelector('#numero1').innerText = parseInt(getCookie("Cafe Solo") || 0)

    document.querySelector('#cafe2').setAttribute("data-content", Math.round((parseInt(getCookie("Cafe Con Leche") || 0) / totalVotos) * 100) + "%");
    document.querySelector('#porcentaje2').innerText = Math.round((parseInt(getCookie("Cafe Con Leche") || 0) / totalVotos) * 100) + "%";
    document.querySelector('#numero2').innerText = parseInt(getCookie("Cafe Con Leche") || 0)

    document.querySelector('#cafe3').setAttribute("data-content", Math.round((parseInt(getCookie("Cafe Descafeinado") || 0) / totalVotos) * 100) + "%");
    document.querySelector('#porcentaje3').innerText = Math.round((parseInt(getCookie("Cafe Descafeinado") || 0) / totalVotos) * 100) + "%";
    document.querySelector('#numero3').innerText = parseInt(getCookie("Cafe Descafeinado") || 0)

    document.querySelector('#cafe4').setAttribute("data-content", Math.round((parseInt(getCookie("Cafe Con Hielo") || 0) / totalVotos) * 100) + "%");
    document.querySelector('#porcentaje4').innerText = Math.round((parseInt(getCookie("Cafe Con Hielo") || 0) / totalVotos) * 100) + "%";
    document.querySelector('#numero4').innerText = parseInt(getCookie("Cafe Con Hielo") || 0)

    document.querySelector('#cafe1').setAttribute("value" , parseInt(getCookie("Cafe Solo") || 0));
    document.querySelector('#cafe2').setAttribute("value" , parseInt(getCookie("Cafe Con Leche") || 0));
    document.querySelector('#cafe3').setAttribute("value" , parseInt(getCookie("Cafe Descafeinado") || 0));
    document.querySelector('#cafe4').setAttribute("value" , parseInt(getCookie("Cafe Con Hielo") || 0));
}

document.getElementById("form").addEventListener('submit', submitt );

function setCookie(name, value) {
    document.cookie = name + "=" + encodeURIComponent(value);
}

function getCookie(cname) {
    name = cname + "=";
    decodedc = decodeURIComponent(document.cookie);
    ca = decodedc.split(";");
    for (i = 0; i < ca.length; i++) {
        c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function submitt(eve) {
    eve.preventDefault();

    datos = new FormData(this);
    objetodatos = Object.fromEntries(datos.entries());
    sis = Object.values(objetodatos);


    if (sis == "Cafe Solo" || sis == "Cafe Con Leche" || sis == "Cafe Descafeinado" || sis == "Cafe Con Hielo") {
        var votoActual = parseInt(getCookie(sis) || 0);
        setCookie(sis, votoActual + 1);
        carga();
    }
}
