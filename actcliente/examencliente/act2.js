
document.addEventListener('keydown', function (event) {
    log =  event.key
    switch(log) {
        case "a":
            document.getElementById("cuerpo").style.backgroundColor = 'yellow';
        break;
        case 'r':
            document.getElementById("cuerpo").style.backgroundColor = 'red';
        break;
        case 'n':
            document.getElementById("cuerpo").style.backgroundColor = 'black';
        break;
        case 'v':
            document.getElementById("cuerpo").style.backgroundColor = 'green';
        break;

        }
    console.log(log)

    }
);

document.addEventListener('keyup', function (event) {
    log =  event.key
    switch(log) {
        case "a":
            document.getElementById("cuerpo").style.backgroundColor = 'white';
        break;
        case 'r':
            document.getElementById("cuerpo").style.backgroundColor = 'white';
        break;
        case 'n':
            document.getElementById("cuerpo").style.backgroundColor = 'white';
        break;
        case 'v':
            document.getElementById("cuerpo").style.backgroundColor = 'white';
        break;

        }
    console.log(log)

    }
);
