function dados()
{
    document.write("<h1>Tirada primer dado</h1>");
    let $dado1 = Math.round(Math.random() * 5 + 1);
    document.write($dado1 + "<br>");
    document.write("<h1>Tirada segundo dado</h1>");
    let $dado2 = Math.round(Math.random() * 5 + 1);
    document.write($dado2 + "<br>");
    let $sumaDados = $dado1 + $dado2;
    document.write("<p>La suma de los dados es igual a "+$sumaDados+"</p>");
}
