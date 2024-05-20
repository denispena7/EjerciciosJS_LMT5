function dni()
{
    let $num = prompt("Indique su número de dni");
    let $letra = prompt("Indique la letra de su dni");

    let $letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    if($num > 0 && $num < 99999999)
    {
        let $ind = $num % 23;
        let $car = $letras[$ind];
        //alert("La letra es " + $car + ", el resto es " + $ind);12345678

        if($letra == $car)
        {
            alert("El número y la letra del dni son correctos");
        }
        else
        {
            alert("La letra que has indicado no es correcta");
        }
    }
    else
    {
        alert("El número proporcionado no es válido");
    }
}