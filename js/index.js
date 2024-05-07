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

function eliminar() {
    // let $parrafos = document.getElementsByTagName("p");
    // let $ultimo = $parrafos[$parrafos.length-1];
    let $parrafo = document.getElementById("segundo");
  
    //$ultimo.remove();
    //document.body.removeChild($ultimo);
    //$ultimo.parentNode.removeChild($ultimo);
    $parrafo.remove();
  }
  
  $segundo = document.getElementById("segundo");
  $segundo.style.textDecoration = "underline";
  
  $imagen = document.getElementById("lista");
  $imagen.style.border = 5;
  $imagen.style.borderStyle = "solid";
  $imagen.style.borderColor = "red";
  

function cambiar()
{
    $enlace = document.getElementById("enlace1");
    $enlace.href="https://grupostudium.com";
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

// alert(screen.width);
// alert(screen.height);
// alert(screen.colorDepth);

let enlaces = document.links;
// enlaces = document.anchors;
for(i = 0; i < enlaces.length; i++)
{
    alert(enlaces[i].href);
}

//$("p").hide()
// $(document).ready(function())

//$(document).ready(function(){
  //  $(function(){
        //Codigo jQuery
    //    $("#btnOcultar").on("click",function(){
          //$("p").hide();
          // alert("Se han ocultado todos los párrafos");
          // $(this).css("background-color","#FF0000");
          // $("#btnCambiar").css("background-color","#00ff00");
          // $("#primero").fadeOut();
          // $("#segundo").fadeOut("slow");
          // $("#tercero").fadeOut(3000); 
          //$("p").toggle();
      //    $("p").slideUp(3000).slideDown(3000);   
     //   });

     $("#btnMostrar").on("click",function(){
        //$("p").show();
    
        // $("#primero").fadeIn();
        // $("#segundo").fadeIn("slow");
        // $("#tercero").fadeIn(3000);
        //$("p").toggle();
        $("p").slideDown(3000);  
      });

$(function(){
    $("#btnOcultar").on("click", function(){
        $("p").hide();
        // alert("Se han ocultado todos los párrafos")
       // $(this).css("background-color", "#F00");
       // $("#btnCambiar").css("background-color", "#0F0");
    });

    $("#btnMostrar").on("click", function(){
        $("p").show();
    });
});

$("#btnMover").on("click",function(){
    $("#cuadrado").animate({right: "400px"},5000,function(){
      $("#cuadrado").animate({left: "200px"},5000,function(){
      });
    });
});

$("#btnParar").on("click", function(){
    $("#cuadrado").stop();
});

$("#btnCrear").on("click", function(){
    $("p").prepend("Texto nuevo");
});

$("#btnRemove").on("click", function(){
    $("form").remove();
});

$("#btnEmpty").on("click", function(){
    $("form").empty();
});

// mouseenter

// $("*")
// $("p.primero")
// $("#primero")
// $("p:first") // Devuelve el primer párrafo de un documento
// $("a[target='_blank']") // Selecciona todos los elementos con el atributo href

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