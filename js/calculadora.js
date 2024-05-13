function calculadora()
{
    do
    {
        $opcion = parseInt(prompt("1. Sumar\n 2.Restar\n 3.Multiplicar\n 4.Dividir\n 5.Salir"));

    switch($opcion)
    {
        case 1:
            $num1 = parseFloat(prompt("Dime el primer número"));
            $num2 = parseFloat(prompt("Dime el segundo número"));
            alert("Resultado: " + sumar($num1, $num2));
            break;
        case 2:
            $num1 = parseFloat(prompt("Dime el primer número"));
            $num2 = parseFloat(prompt("Dime el segundo número"));
            alert("Resultado: " + resta($num1, $num2));
            break;
        case 3:
            $num1 = parseFloat(prompt("Dime el primer número"));
            $num2 = parseFloat(prompt("Dime el segundo número"));
            alert("Resultado: " + mult($num1, $num2));
            break; 
        case 4:
            $num1 = parseFloat(prompt("Dime el primer número"));
            $num2 = parseFloat(prompt("Dime el segundo número"));
            alert("Resultado: " + div($num1, $num2));
            break;      
        default:
            alert("No es posible");
    }
    }while($opcion != 5);
}


function sumar($num1, $num2)
{
    return $num1 + $num2;
}

function resta($num1, $num2)
{
    return $num1 - $num2;
}

function mult($num1, $num2)
{
    return $num1 * $num2;
}

function div($num1, $num2)
{
    if($num2 == 0)
    {
        return $num1 / $num2;
    }
    else
    {
        alert("No se puede dividir entre 0");
    }
}