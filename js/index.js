let $x;
let $num1 = 55;

document.write("Esto es un texto escrito con javascript" + "</br>");

let $num2 ="8";
document.write("El tipo de $num2 es: " + typeof($num2) + "</br>");

let $num3 ="3.14";
document.write("El tipo de $num3 es: " + typeof($num3) + "</br>");

document.write($num2/0);

$verdadero = false;
document.write("<p>El valor de $verdadero es: " + typeof($verdadero)+ "</p>");

$y = null;
document.write("<p>El valor de $y es: " + $y+ "</p>");

document.write("<p>El valor de $x + $y es: " + ($num1 + parseFloat($num3))+ "</p>");

// let $resultado = funcion2(8, 5);
// funcion1($resultado, 6);
// funcion1(funcion2(8, 5), 6)

funcion1(8, 4);

function funcion1($x, $y)
{
    let $z = funcion2($x, 3);
    document.write("Resultado de la funcion: " + ($x*$y));
}

function funcion2($x, $y)
{
    document.write("Resultado "+$x+" entre "+$y+" es : " + ($x/$y) + "</br>");
    return $x / $y;
}

let fecha = new Date("December 25, 1995 23:15:30");
let day = fecha.getMonth();

document.write("<p> El mes es " + day + "</p>");

// Switch
$idioma = "eng";
switch($idioma)
{
    case "esp":
        document.write("<h1>El idioma es español</h1>");
        break;
    case "eng":
        document.write("<h1>El idioma es inglés</h1>");
        break;
    default:
        document.write("<h1>El idioma es otro</h1>");
}

// while
$k = 5;
while($k < 5)
{
    document.write("<h1>" + $k + "</h1>");
    $k++;
}

// do-while
do{
    document.write("<h1>Con do-while" + $k + "</h1>");
    $k++;
} while($k < 5);

let array = new Array(5, 3, 1, 2, 4);

/*
for($i = 0; $i < array.length; $i++)
{
    document.write("<h1>La posición "+$i+": " + array[$i] + "</h1>");
}
*/

for($elemento in array)
{
    document.write("<h1>Valor: " + $elemento + "</h1>");
}

let $cadena = "Hola mundo";
document.write("charAt: " + $cadena.charAt(0) + "</br>");
document.write("charCodeAt: " + $cadena.charCodeAt(0) + "</br>");
document.write("indexOf: " + $cadena.indexOf("o") + "</br>");
document.write("lastIndexOf: " + $cadena.lastIndexOf("o") + "</br>");
document.write("length: " + $cadena.length + "</br>");
$array = $cadena.split(" ");
document.write("split: " + $array[1] + "</br>");
document.write("substring: " + $cadena.substring(2, 7) + "</br>");
document.write("toLowerCase: " + $cadena.toLowerCase() + "</br>");
document.write("toUpperCase: " + $cadena.toUpperCase() + "</br>");

let $fecha = new Date();
document.write("Día del mes: " + $fecha.getDate() + "<br>");
document.write("Día de la semana: " + $fecha.getDay() + "<br>");
document.write("Año: " + $fecha.getFullYear() + "<br>");
document.write("Mes: " + $fecha.getMonth() + "<br>");
document.write("Horas: " + $fecha.getHours() + "<br>");
document.write("Minutos: " + $fecha.getMinutes() + "<br>");
document.write("Segundos: " + $fecha.getSeconds() + "<br>");
document.write("Milisegundos: " + $fecha.getMilliseconds() + "<br>");

function evento ($tipo)
{
    console.log("Se ha producido un evento " + $tipo);
}

function pulsada(event)
{
    console.log("La tecla pulsada es " + String.fromCharCode(event.keyCode))
}

let cabeceras = document.getElementsByTagName('h1');
let primeraCabecera = cabeceras[0];

let nameParrafo = document.getElementsByName('parrafo');

let primero = document.getElementById('primero');
primero.style.color = 'red';

document.getElementsByClassName('negrita');

function crear()
{
   // Creamos el element
    let nuevoParrafo = document.createElement("p");
    // Creamos el text
    let contenido = document.createTextNode("Buenos días por la mañana");
    // Añadimos el text al element
    nuevoParrafo.appendChild(contenido);
    // Añadimos el nuevo elemento al body
    document.body.appendChild(nuevoParrafo); 
}

function cambiar()
{
    $enlace = document.getElementById("enlace1");
  //  $enlace = 
}

function validar()
{
    let $ancho = document.getElementById("ancho").value;
    let $alto = document.getElementById("alto").value;
    if($ancho == $alto)
    {
        window.alert("Son iguales");
        window.open("http://w3.es");
    }
    else
    {
        alert("Son distintos");
        location.href("http://google.es");
    }
}

history.back();
history.forward();
history.go(-5);
history.length;

alert(screen.width);
alert(screen.height);
alert(screen.colorDepth);

let enlaces = document.links;
// enlaces = document.anchors;
for(i = 0; i < enlaces.length; i++)
{
    alert(enlaces[i].href);
}

/* $fecha = new Date(2015, 9, 22, 14, 0);
document.write("Fecha: " + $fecha.getDay() + "<br>"); */

/*
- cambio de signo
\ división entera

&& AND
|| OR
! Negación

== igual
=== igual estricto con mismo tipo de dato
!= distinto-+
!== distinto estricto por el tipo de dato
*/

/*
const price = document.querySelector("#price");
const output = document.querySelector(".price-output");

output.textContent = price.value;

price.addEventListener("input", function () 
{
  output.textContent = price.value;
});
*/