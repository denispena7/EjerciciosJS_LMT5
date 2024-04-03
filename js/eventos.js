function evento ($tipo)
{
    console.log("Se ha producido un evento " + $tipo);
}

function pulsada(event)
{
    console.log("La tecla pulsada es " + String.fromCharCode(event.keyCode))
}

function cambio()
{
    alert("Se ha cambiado el contenido");
}