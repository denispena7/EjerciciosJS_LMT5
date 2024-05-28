// Ejercicio básico Nº 17
let $contenido = document.getElementsByClassName('ejercicios_contenido');
let $subtitulo = document.getElementById('subtitulo');
let $ejercicio = document.getElementById('ejercicio');
let $resultado;
 
/*
function tabla() 
{
    let $num = alertify.prompt("Escribe un número a multiplicar");
    let $titulo = document.getElementById('encabezado');
    $titulo.innerHTML = "";
    $titulo.innerHTML = '<h1 class="ejercicios_encabezado">Ejercicio Básico Nº 17</h1>';
    

  //  $contenido.innerHTML = "";

    $subtitulo.innerHTML = "";
    $subtitulo.innerHTML = '<h3 id="subtitulo">Tabla del número ' + $num + '</h3>';

    $ejercicio.innerHTML = "";
    for ($i = 1; $i <= 12; $i++) 
    {
        $resultado = $num * $i;
        $ejercicio.innerHTML += "<h3>" + $num + " x " + $i + " = " + $resultado + "<h3>";
    }
}
*/

// Ejercicio básico Nº 18
function compara()
{
    let $num1 = prompt("Escribe un número");
    let $num2 = prompt("Escribe otro número");

    if($num1 == $num2)
    {
        document.write("Los números son iguales");
    }
    else
    {
        document.write("Son distintos");
    }
}

$(document).ready(function(){
    $("#btn1").on("click", function(){
        alertify.prompt("Tabla de multiplicar", "Escribe un número", 0, function(){
            let $titulo = document.getElementById('encabezado');
            $titulo.innerHTML = "";
            $titulo.innerHTML = '<h1 class="ejercicios_encabezado">Ejercicio Básico Nº 17</h1>';
            
        
          //  $contenido.innerHTML = "";
        
            $subtitulo.innerHTML = "";
            $subtitulo.innerHTML = '<h3 id="subtitulo">Tabla del número ' + $num + '</h3>';
        
            $ejercicio.innerHTML = "";
            for ($i = 1; $i <= 12; $i++) 
            {
                $resultado = $num * $i;
                $ejercicio.innerHTML += "<h3>" + $num + " x " + $i + " = " + $resultado + "<h3>";
            }
        });
    });
});