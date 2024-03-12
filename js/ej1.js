// Ejercicio 1
let $num1 = 3;
let $num2 = -5;
let $resultado1 = $num1 * $num2;

document.write("<p>El producto vale: " + $resultado1 + "</p>");
// console.log("El resultado del ejercicio1 es: " + $resultado1);

// Ejercicio 2
$num1 = 0;
$num2 = 0;
let $resultado2 = $num1 / $num2;

document.write("<p>El cociente es: " + $resultado2 + "</p>");

// Ejercicio 3
let $num = 5;
doble($num);
// document.write("<p>El doble de " + $num + " es " + doble($num) + "</p>");

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
tabla(7);

function tabla($valor)
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

// Ejercicio 7
$num = 5;
let $factorial = 1;
for($i = 1; $i <= $num; $i++)
{
    $factorial = $factorial * $i;
}

document.write("<p>El Factorial de " + $num + " vale " + $factorial + "</p>");

// Ejercicio 8
let $max = 0;
for($i = 0; $i < 5; $i++)
{
    let $aleatorios = Math.round(Math.random() * 49 + 1);
    document.write($aleatorios + "</br>"); 

    if($aleatorios > $max)
    {
        $max = $aleatorios;
    }
}

document.write("<p>El máximo es el " + $max + "</p>");

/*
    Ejercicio 8
    maximoAleatorio();
    function maximoAleatorio()
    {
        let $max = 0;
        let $num;
        for($i = 0; $i < 5; $i++)
        {
            $num = Math.round(Math.random() * 49 + 1);
            document.write("Número: " +$num+ "</br>");
        }
        $max = Math.max($num, $max);
    }
    document.write("<p>El máximo es el " + $max + "</p>");
*/

// Ejercicio 9
let vocales = new Array('a', 'e', 'i', 'o', 'u');
for(let i = 0; i < 5; i++)
{
    document.write(vocales[i] + "</br>");
}

document.write("</br>");

// Ejercicio 10 
let randoms = new Array(5);
for(let i = 0; i < 5; i++)
{
    randoms[i] = Math.round(Math.random() * 9 + 1);
    document.write("<p>randoms["+i+"] = " + randoms[i] + "</p>"); 
}