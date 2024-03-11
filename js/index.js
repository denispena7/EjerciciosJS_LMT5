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