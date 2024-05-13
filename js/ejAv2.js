// Saludo
let $nombre = prompt("Dime tu nombre");
let $saludo = document.getElementById('saludo');

$saludo.innerHTML = "Hola " + $nombre;

$saludo.style.fontSize = '10px';
$saludo.style.fontFamily = 'cursive';

// Hora del día
let $hoy = new Date();
let $fecha = document.getElementById('fecha');
let $tiempo = $hoy.getHours() + ":" + $hoy.getMinutes();

let $buenas;

if($hoy.getHours() < 12)
{
    $buenas = "buenos días.";
}
else if($hoy.getHours() > 12 && $hoy.getHours() < 21)
{
    $buenas = "buenas tardes.";
}
else
{
    $buenas = "buenas noches.";
}

$fecha.innerHTML = "Son las " + $tiempo + " h, " + $buenas;