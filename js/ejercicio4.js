let $num;
let $resultado;
let $i;
let $tabla = document.getElementById('tabla');
let $p = document.getElementById('p');

function tabla()
{
    $num = document.getElementById('num').value;

     // Limpiar la tabla antes de agregar nuevas filas
     $tabla.innerHTML = "";

     if($num > 0 && $num <= 10)
     {
        let $contenido = "<h1>Tabla del número " + $num + "</h1><table border='1'>";
        for($i = 1; $i <= 12; $i++)
        {
            $resultado = $num * $i;
            $contenido += "<tr><td>" + $num + " x " + $i + " = " + $resultado + "</td></tr>";
        }
        $contenido += "</table>";
        $tabla.innerHTML = $contenido;
        
        // innerHTML sirve para sustituir el contenido original de una etiqueta HTML 
        // por el que deseemos
        $p.innerHTML = "<p>Hello world</p>";
    }
    
}
