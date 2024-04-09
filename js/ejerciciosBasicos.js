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
    document.write("<h2> Tabla de multiplicar del número " + $valor + "</h2>");
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
let vocales = ['a', 'e', 'i', 'o', 'u'];
for($i = 0; $i < vocales.length; $i++)
{
    document.write(vocales[$i] + "</br>");
}

document.write("</br>");

// Ejercicio 10 
let randoms = [];
for($i = 0; $i < 5; $i++)
{
    randoms[$i] = Math.round(Math.random() * 9 + 1); 
}

for($i = 0; $i < 5; $i++)
{
    document.write("<p>randoms["+$i+"] = " + randoms[$i] + "</p>");
}

// Ejercicio 11
let matriz1 = [];
let matriz2 = [];
let matrizSuma = [];

document.write("<p>Contenido matriz 1:</p>");
for($i = 0; $i < 10; $i++)
{
    matriz1[$i] = Math.round(Math.random() * 9 + 1);
    document.write(matriz1[$i] + " ");
}

document.write("<p>Contenido matriz 2:</p>");
for($i = 0; $i < 10; $i++)
{
    matriz2[$i] = Math.round(Math.random() * 9 + 1);
    document.write(matriz2[$i] + " ");
}

document.write("<p>Suma de las matrices:</p>");
for($i = 0; $i < 10; $i++)
{
    matrizSuma[$i] = matriz1[$i] + matriz2[$i];
    document.write(matrizSuma[$i] + " ");
}

// Ejercicio 12
let pares = [];
document.write("<p>Números pares:</p>");
for($i = 0; $i < 20; $i++)
{
    pares[$i] = $i * 2;
}

for($i = 0; $i < 20; $i++)
{
    document.write(pares[$i] + " ");
}

// Ejercicio 13
let $cadena = "Ayuntamiento";
document.write("<p>Cadena separada por caracteres</p>");
for($i = 0; $i < $cadena.length; $i++)
{
    document.write($cadena.charAt($i) + " ");
}

// Ejercicio 14
document.write("<p>Analizando la palabra: " + $cadena + "</p>");
for($i = 0; $i < $cadena.length; $i++)
{
    if($cadena.charAt($i) == 'a')
    {
        document.write("<p>La vocal a aparece en la posición: " + $i + "</p>");
    }

    if($cadena.charAt($i) == 'e')
    {
        document.write("<p>La vocal e aparece en la posición: " + $i + "</p>");
    }

    if($cadena.charAt($i) == 'i')
    {
        document.write("<p>La vocal i aparece en la posición: " + $i + "</p>");
    }

    if($cadena.charAt($i) == 'o')
    {
        document.write("<p>La vocal o aparece en la posición: " + $i + "</p>");
    }

    if($cadena.charAt($i) == 'u')
    {
        document.write("<p>La vocal u aparece en la posición: " + $i + "</p>");
    }
}

// Ejercicio 15
let $fecha = new Date();

switch($fecha.getDay())
{
    case 0:
        $dia = "Domingo";
        break;
    case 1:
        $dia = "Lunes";
        break;
    case 2:
        $dia = "Martes";
        break;
    case 3:
        $dia = "Miércoles";
        break;
    case 4:
        $dia = "Jueves";
        break;
    case 5:
        $dia = "Viernes";
        break;
    case 6:
        $dia = "Sábado";
        break;
}

document.write("<b>Fecha actual: </b>" + $fecha + "<br>");
document.write("<b>Día de la semana: </b>" + $dia + "<br>");
document.write("<b>Día: </b>" + $fecha.getDate() + "<br>");
document.write("<b>Mes: </b>" + ($fecha.getMonth()+1) + "<br>");
document.write("<b>Año: </b>" + $fecha.getFullYear() + "<br>");

// Escribir una función que genere un array con 10 número aleatorios y sume todos los números que sean pares
document.write("<h2>Función suma pares array</h2>");
let $numeros = [];
sumaPares($numeros);

function sumaPares($numeros)
{
    let $suma = 0;
    for($i = 0; $i < 10; $i++)
    {
        $numeros[$i] = Math.round(Math.random() * 9 + 1);
    }

    for($i = 0; $i < 10; $i++)
    {
        document.write($numeros[$i] + " ");
    }

    document.write("</br>");

    for($i = 0; $i < 10; $i++)
    {
        if($numeros[$i] % 2 == 0)
        {
            $suma += $numeros[$i];
        }
    }

    document.write("La suma de los números pares del array es igual a: " + $suma);
    document.write("</br>");
}

// Array invertido
// Escribir una función que genere un array con 10 números aleatorios entre 1 y 50, muestra el array generado y devuelva el array en 
// orden invertido
document.write("<h2>Función array invertido</h2>");
arrayInvertido();
function arrayInvertido()
{
    let $array1 = [];
    let $array2 = [];

    for($i = 0; $i < 10; $i++)
    {
        $array1[$i] = Math.round(Math.random() * 49 + 1);
        document.write($array1[$i] + " ");
    }
    // $array2 = $array1.reverse();
    $k = 0;
    for($i = 9; $i >= 0; $i--)
    {
        $array2[$i] = $array1[$k];
        $k++;
        document.write();
    }
    document.write("<br>");
    for($i = 0; $i < 10; $i++)
    {
        document.write($array2[$i] + " ");
    }
}
document.write("<br><br>");
/*
    Escribe una función que genere una contraseña aleatoria de longitud dada, que pueda contener letras en minúsculas,
    mayúsculas y números.
*/
passRand(10);

function passRand($long)
{
    const $caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let $contra = "";

    for($i = 0; $i < $long; $i++)
    {
        $contra = $contra + $caracteres.charAt(Math.floor(Math.random() * $caracteres.length));
    }

   document.write("La contraseña es " + $contra);
}
document.write("<br>");
// Math.floor: Devuelve el entero por defecto Ej: 5,2 ó 5,8 --> Devuelve 5
// Math.ceil : Devuelve el entero por exceso EJ: 5,2 ó 5,8 --> Devuelve 6

/*
    Escribe una función que genere la sucesión de fibonacci para los n números indicados
*/
fibonacci(10);

function fibonacci($n)
{
    let $array = [];

    if($n == 1)
    {
        $array = [0];
    }
    else
    {
        if($n == 2)
        {
            $array = [0,1];
        }
        else
        {
            $array = [0, 1];
            for($i = 2; $i < $n; $i++)
            {
                $array[$i] = $array[$i-1] + $array[$i-2];
            }
        }
    }

  for($i = 0; $i < $n; $i++)
  {
    document.write($array[$i] + " ");
  }
}

document.write("<br>");

/*  Ejercicio máximo
    Solicitar al usuario el tamaño de un array que se debe rellenar con números aleatorios entre el 1 y el 100 y
    mostrar en pantalla todos los números generados y cual es el mayor de ellos
*/
//numeroMax();
function numeroMax()
{
    let $longitud = parseInt(prompt("Tamaño del array"));
    let $array = new Array($longitud);
    let $max = 0;

    document.write("<h1>El resultado de este ejercicio</h1>");

    for($i = 0; $i < $array.length; $i++)
    {
        $array[$i] = Math.floor(Math.random() * 100 )+ 1;
        document.write($array[$i] + "" + "<br>");
        if($array[$i] > $max)
        {
            $max = $array[$i];
        }
    }

    document.write("El máximo es " + $max);
}

/*
    Ejercicio: Contar números primos. Solicitar un número e indicar la cantidad de números primos que existen menores o iguales al 
    números dado.
*/

//document.write("<p>Resultado del ejercicio <strong>contar números primos</strong></p>");
//contarNumerosPrimos(prompt("Indica un número"));

function contarNumerosPrimos()
{
    $num = parseInt(prompt("Dime un número", 0));

    for($i = 2; $i <= $num; $i++)
    {
        if(esPrimo($i))
        {
            document.write($i + " ");
        }
    }
}

function esPrimo($num)
{
    $x = true;

    for($j = 2; $j < $num; $j++)
    {
        if($num % $j == 0)
        {
            $x = false;
        }
    }
    return $x;
}


//sumarDigitos();

function sumarDigitos()
{
    let $num = prompt("Indica un numero");

    let $suma = 0;

    
    for($i = 0; $i < $num.length; $i++)
    {
        $suma += parseInt($num[$i]);
    }

    if($num.length == 1)
    {
        $suma = 1;
    }
    
    document.write("La suma de los dígitos de "+$num+" es "+ $suma);
}

/*
    Ejercicio: Hacer un conteo de cada caracter que aparece en una cadena pedida por teclado
*/

contarCaracteres();
function contarCaracteres()
{
    let cadena = prompt("Indica una cadena");
    let caracteresCadena = [];
    for($i = 0; $i < cadena.length; $i++)
    {
        caracter = cadena.charAt($i);
        if(caracteresCadena[caracter])
        {
            caracteresCadena[caracter]++;
        }
        else
        {
            caracteresCadena[caracter] = 1;
        }

        // caracteresCadena[caracter] = caracteresCadena[cadena] ? caracteresCadena[caracter];
    }

    for(caracteres in caracteresCadena)
    {
        document.write(caracteres + " = " + caracteresCadena[caracteres] + "<br>");
    }
} 