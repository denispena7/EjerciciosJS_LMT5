let $num;
let $resultado;
let $i;
let $tabla = document.getElementById('tabla');

function tabla()
{
    $num = document.getElementById('num').value;

    document.write("<h1>Tabla del número " + $num + "</h1>");
    if($num > 0 && $num <= 10)
    {
        $contenido = "<table border='1'>";
        for($i = 1; $i <= 12; $i++)
        {
            $resultado = $num * $i;
            //document.write("<p>"+$num+" x "+$i+" = "+($num*$i)+"</p>");
            $contenido = "<tr><td>" + $num + " x " + $i + " = " + $resultado + "</td></tr>";
        }
        $contenido += "</table>";
        $tabla.innerHTML = $contenido;
    }
}