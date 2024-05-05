let $nombre = prompt("Dime tu nombre");

let $saludo = document.getElementById('saludo');

$saludo.innerHTML = "Hola " + $nombre;

$saludo.style.fontSize = '50px';
$saludo.style.fontFamily = 'Trebuchet MS';

let $hoy = new Date();
let $fecha = document.getElementById('fecha');
let $tiempo = $hoy.getHours() + ":" + $hoy.getMinutes();

$fecha.innerHTML = "Son las " + $tiempo;

