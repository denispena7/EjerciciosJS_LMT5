// Ejercicio básico Nº 17
let $titulo = document.getElementById('encabezado');
let $subtitulo = document.getElementById('subtitulo');
let $subtitulo2 = document.getElementById('subtitulo2');
let $subtitulo3 = document.getElementById('subtitulo3');
let $ejercicio = document.getElementById('ejercicio');
let $resultado;

function tabla($num) {
    $ejercicio.innerHTML = "";
    $titulo.innerHTML = 'Ejercicio Básico Nº 17';
    $subtitulo.innerHTML = 'Tabla del número ' + $num;
    $subtitulo2.innerHTML = "";
    $subtitulo3.innerHTML = "";

    for ($i = 1; $i <= 12; $i++) {
        $resultado = $num * $i;
        $ejercicio.innerHTML += "<h3>" + $num + " x " + $i + " = " + $resultado + "<h3>";
    }
}

$("#btn1").on('click', function () {
    alertify.prompt("Tabla de multiplicar", "Escribe un número", "0",
        function (onclick, value) {
            let $numero = Number(value);
            if (isNaN($numero) || value == "") {
                alertify.error("Tienes que ingresar un número.");
            } else {
                tabla($numero);
            }
        },
        function () {
            alertify.error("Cancelado");
        }
    );
});

// Ejercicio básico Nº 18
function compara() {
    $num1 = prompt("Indica el primer número");
    $num2 = prompt("Indica el segundo número");
    $titulo.innerHTML = 'Ejercicio Básico Nº 18';
    $ejercicio.innerHTML = "";
    $subtitulo.innerHTML = "";
    $subtitulo2.innerHTML = "";
    $subtitulo3.innerHTML = "";

    if ($num1 == $num2) {
        $subtitulo.innerHTML = 'Los números son iguales';
    }
    else {
        $subtitulo.innerHTML = 'Los números son distintos';
    }
}

$("#btn2").on("click", function(){
    compara();
});

// Ejercicio básico N° 19
function calcularEdad($fecha) {
    $titulo.innerHTML = 'Ejercicio Básico Nº 19';
    let $hoy = new Date();
    let $array = $fecha.split("/");

    let $anio = $hoy.getFullYear() - $array[2];
    let $mes = ($hoy.getMonth() + 1) - $array[1];
    let $dia = ($hoy.getDate() + 1) - $array[0];

 //   $ejercicio.innerHTML = "";

    if ($anio > 0) {
        if ($mes > 0) {
            $subtitulo.innerHTML = 'Tienes ' + $anio + ' años';
        }
        else if ($mes == 0) {
            if ($dia > 0) {
                $subtitulo.innerHTML = 'Tienes ' + $anio + ' años';
            }
            else {
                $subtitulo.innerHTML = 'Tienes ' + ($anio - 1) + ' años';
            }
        }
        else {
            $subtitulo.innerHTML = 'Tienes ' + ($anio - 1) + ' años';
        }
    }
    else {
        $subtitulo.innerHTML = 'La fecha de nacimiento no es correcta';
    }
}

$("#btn3").on('click', function () {
    alertify.prompt("Calcular edad", "Dame tu fecha de nacimiento (DD/MM/YYYY):", "",
        function (onclick, value) {
            let $fecha = String(value);
            if ($fecha == "") {
                alertify.error("Tienes que indicar una fecha");
            } else {
                calcularEdad($fecha);
            }
        },
        function () {
            alertify.error("Cancelado");
        }
    );
});

// Ejercicio básico N° 20
function clic($tipo) {
    $titulo.innerHTML = 'Ejercicio Básico Nº 20';
    $subtitulo.innerHTML = "";
    $subtitulo2.innerHTML = 'Javascript clic';
    $subtitulo3.innerHTML = 'Javascript doble clic';
  //  $ejercicio.innerHTML = "";

    if ($tipo == "onclick") {
        alertify.alert().set("label", "OK").setContent("<h1>Has hecho un clic</h1>").show();
    }
    else if ($tipo == 'ondblclick') {
        alertify.alert().set("label", "OK").setContent("<h1>Has hecho doble clic</h1>").show();
    }
}

// Ejercicio básico N° 21
let $skyblue = document.getElementById('skyblue');
let $lightgreen = document.getElementById('lightgreen');
let $gray = document.getElementById('gray');
let $pink = document.getElementById('pink');
let $violet = document.getElementById('violet');

function fondo($color) {
    $titulo.innerHTML = 'Ejercicio Básico Nº 21';
  //  $subtitulo.innerHTML = "";
    $subtitulo2.innerHTML = "";
    $subtitulo3.innerHTML = "";

    $ejercicio.style.height = "600px";
    $ejercicio.style.display = 'flex';
    $ejercicio.style.justifyContent = 'space-between';
    $ejercicio.style.alignItems = 'center';

    $skyblue.style.width = '220px';
    $skyblue.style.height = '220px';
    $skyblue.style.backgroundColor = '#5BBCFF';

    $lightgreen.style.width = '220px';
    $lightgreen.style.height = '220px';
    $lightgreen.style.backgroundColor = '#FFFAB7';

    $gray.style.width = '220px';
    $gray.style.height = '220px';
    $gray.style.backgroundColor = '#FFD1E3';

    $pink.style.width = '220px';
    $pink.style.height = '220px';
    $pink.style.backgroundColor = 'violet';

    $violet.style.width = '220px';
    $violet.style.height = '220px';
    $violet.style.backgroundColor = '#7EA1FF';

    $ejercicio.style.backgroundColor = $color;
}

// Ejercicio Intermedio N° 3
function dni() {
    $titulo.innerHTML = 'Ejercicio Intermedio Nº 3';
    let $num = prompt("Indique su número de dni");
    let $letra = prompt("Indique la letra de su dni");

    let $letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    if ($num > 0 && $num < 99999999) {
        let $ind = $num % 23;
        let $car = $letras[$ind];
        //alert("La letra es " + $car + ", el resto es " + $ind);

        if ($letra == $car) {
            alert("El número y la letra del dni son correctos");
        }
        else {
            alert("La letra que has indicado no es correcta");
        }
    }
    else {
        alert("El número proporcionado no es válido");
    }
}

// Ejercico Intermedio N° 6
function dados() 
{
    $titulo.innerHTML = 'Ejercicio Intermedio Nº 6';
    
    // Crear un array para contar las apariciones de cada suma (2 a 12)
    let apariciones = new Array(13).fill(0);

    // Repetir la simulación 36000 veces
    for (let i = 0; i < 36000; i++) {
    // Generar dos números aleatorios entre 1 y 6
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;

    // Sumar los resultados de los dos dados
    let suma = dado1 + dado2;

    // Incrementar el contador correspondiente a la suma
    apariciones[suma]++;
    }

    // Imprimir los resultados
    for (let i = 2; i < apariciones.length; i++) 
    {
        console.log('Suma que da como resultado ' + i + ': ' + apariciones[i] + ' apariciones');
    }

    let nuevoheading = document.createElement("h3");
    let contenido = document.createTextNode("Ver consola");
    nuevoheading.appendChild(contenido);
    $ejercicio.appendChild(nuevoheading);
}

// Ejercicio Intermedio N° 8
function palin($cadena) 
{
    $titulo.innerHTML = 'Ejercicio Intermedio Nº 8';
    $ejercicio.innerHTML = "";
    let $array = [];
    let $arrayInvertido = [];

    let $j = 0;

    for($i = 0; $i < $cadena.length; $i++) 
    {
        if($cadena.charAt($i) != ' ')
        {
            $array[$j] = $cadena.charAt($i);
            $j++;
        }
    }

    for ($i = 0; $i < $j; $i++) 
    {
        $arrayInvertido[$i] = $array[$j - $i - 1];
    }

    // Comparar el array original con el array invertido
    let $esPalindromo = true;
    for($i = 0; $i < $j; $i++) 
    {
        if($array[$i] != $arrayInvertido[$i]) 
        {
            $esPalindromo = false;
        }
    }

    if($esPalindromo == true)
    {
        $subtitulo.innerHTML = "La cadena es un palíndromo";
    }
    else
    {
        $subtitulo.innerHTML = "La cadena no es un palíndromo";
    }
}

$("#btn8").on('click', function () {
    alertify.prompt("Palíndromo", "Escribe una cadena de texto", "",
        function (onclick, value) {
            let $frase = String(value);
            if (value == "") {
                alertify.error("Tienes que ingresar una cadena de texto.");
            } else {
                palin($frase);
            }
        },
        function () {
            alertify.error("Cancelado");
        }
    );
});


// Ejercicio Intermedio 10
let $esp = document.getElementById('esp');
let $por = document.getElementById('por');
let $fra = document.getElementById('fra');
let $ita = document.getElementById('ita');

function titulosPaises() {
    $titulo.innerHTML = 'Ejercicio Intermedio Nº 10';
    $subtitulo.innerHTML = "";
    $esp.innerHTML = "<h3>España</h3>";
    $por.innerHTML = "<h3>Portugal</h3>";
    $fra.innerHTML = "<h3>Francia</h3>";
    $ita.innerHTML = "<h3>Italia</h3>";
}

function paises($pais, $capital) {
    if ($pais == 'España' && $capital == 'Madrid') {
        let $imagen1 = '<img src="./img/imgesp.png" width="100px" alt="España">';
        $esp.innerHTML = $imagen1;
    }
    else if ($pais == 'Portugal' && $capital == 'Lisboa') {
        let $imagen2 = '<img src="./img/imgpor.png" width="150px" alt="Portugal">';
        $por.innerHTML = $imagen2;
    }
    else if ($pais == 'Francia' && $capital == 'Paris') {
        let $imagen3 = '<img src="./img/imgfra.png" width="150px" alt="Francia">';
        $fra.innerHTML = $imagen3;
    }
    else {
        let $imagen4 = '<img src="./img/imgita.png" width="120px" alt="Italia">';
        $ita.innerHTML = $imagen4;
    }

    $("#esp").on("mouseenter", function () {
        alertify.alert().set("label", "Aceptar").setContent("<h1>La capital de " + $pais + " es " + $capital + "</h1>").show();
    });

    $("#por").on("mouseenter", function () {
        alertify.alert().set("label", "Aceptar").setContent("<h1>La capital de " + $pais + " es " + $capital + "</h1>").show();
    });

    $("#fra").on("mouseenter", function () {
        alertify.alert().set("label", "Aceptar").setContent("<h1>La capital de " + $pais + " es " + $capital + "</h1>").show();
    });

    $("#ita").on("mouseenter", function () {
        alertify.alert().set("label", "Aceptar").setContent("<h1>La capital de " + $pais + " es " + $capital + "</h1>").show();
    });
}

// Ejercicio Avanzado 2
function saludo($nombre) {
    $titulo.innerHTML = "Ejercicio Avanzado N°2";
    $ejercicio.innerHTML = "";
    $subtitulo.innerHTML = "Hola " + $nombre;

    $subtitulo.style.fontSize = '10px';
    $subtitulo.style.fontFamily = 'cursive'; // Cursive = Comic Sans

    // Hora del día
    let $hoy = new Date();
    //  let $fecha = document.getElementById('fecha');

    let $tiempo = $hoy.getHours() + ":" + $hoy.getMinutes();

    let $buenas;

    if ($hoy.getHours() < 12) {
        $buenas = "buenos días.";
    }
    else if ($hoy.getHours() >= 12 && $hoy.getHours() < 21) {
        $buenas = "buenas tardes.";
    }
    else {
        $buenas = "buenas noches.";
    }
    let nuevo = document.createElement("h4");
    let contenido = document.createTextNode("Son las " + $tiempo + " h, " + $buenas);
    nuevo.appendChild(contenido);
    $ejercicio.appendChild(nuevo);
}

$("#btn10").on('click', function () {
    alertify.prompt("Saludo", "Escribe tu nombre", "",
        function (onclick, value) {
            let $nombre = String(value);
            if (value == "") {
                alertify.error("Ingresa tu nombre por favor.");
            } else {
                saludo($nombre)
            }
        },
        function () {
            alertify.error("Cancelado");
        }
    );
});