function tabla()
{
    let $num = prompt("Escribe un número a multiplicar");

    document.write("<h1>Tabla del número " + $num + "</h1>");
    for($i = 1; $i <= 12; $i++)
    {
        $resultado = $num * $i;
        document.write($num + " x " + $i + " = " + $resultado + "<br>");
    }
}