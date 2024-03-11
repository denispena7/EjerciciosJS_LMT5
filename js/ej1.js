// Ejercicio 1
let $num1 = 3;
let $num2 = -5;
let $resultado1 = $num1 * $num2;

document.write("<p>El producto vale: " + $resultado1 + "</p>");
// console.log("El resultado del ejercicio1 es: " + $resultado1);

// Ejercicio 2
let $num3 = 0;
let $num4 = 0;
let $resultado2 = $num3 / $num4;

document.write("<p>El cociente es: " + $resultado2 + "</p>");

// Ejercicio 3
let $num = 5;
doble($num);
// document.write("<p>El resultado del ejercicio 3 es: El doble de " + "+$num+" es " + doble($num) "</p>");

function doble($num)
{
    let $resultado = $num * 2;
    return document.write("Doble: " + $resultado);
}

// Ejercicio 4
document.write("<p>Tirada: " + dado() + "</p>");

function dado()
{
    let $aleatorio = Math.round(Math.random() * 5 + 1);
    return $aleatorio;
}

// Ejercicio 5
tabla7(7);

function tabla7($valor)
{
    document.write("<h2> Tabla de multiplicar del número: " + $valor + "</h2>");
    for($i = 0; $i <= 12; $i++)
    {
        document.write($valor + " x " + $i + " = " + ($valor * $i) + "</br>");
    }
}

// Ejercicio 6
esPar();

function esPar()
{
    let $numero = Math.round(Math.random() * 9 + 1);
    if($numero % 2 == 0)
    {
        document.write("<p>El número "+$numero+" es par"+ "</p>");
    }
    else
    {
        document.write("<p>El número "+$numero+" es impar" + "</p>");
    }
}

