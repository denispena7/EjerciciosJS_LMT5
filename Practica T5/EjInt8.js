function palin()
{
    let $palabra = prompt("Escribe una cadena de texto");

    let $array = [];
    let $arrayInvertido = [];

    let $it = 0;
    let $esPalindromo;

    for($i = 0; $i < $palabra.length; $i++)
    {
        $array[$i] = $palabra.charAt($it);
        document.write($array[$i] + "<br>");
        $it += 1;
    }
    document.write("<br>");
    $arrayInvertido = $array.reverse();

    for($i = 0; $i < $palabra.length; $i++)
    {
        document.write($arrayInvertido[$i] + "<br>");
    }

    for($i = 0; $i < $array.length; $i++)
    {
        for($j = $arrayInvertido - 1; $j >= 0; $j--)
        {
            if($array[$i] != $arrayInvertido[$j])
            {
                $esPalindromo = false;
                document.write($esPalindromo);
            }
            else
            {
                $esPalindromo = true;
                document.write($esPalindromo);
            }
        }

    }
    
    
}