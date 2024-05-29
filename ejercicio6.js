/*function dados()
{
    document.write("<h1>Tirada primer dado</h1>");
    let $dado1 = Math.round(Math.random() * 5 + 1);
    document.write($dado1 + "<br>");
    document.write("<h1>Tirada segundo dado</h1>");
    let $dado2 = Math.round(Math.random() * 5 + 1);
    document.write($dado2 + "<br>");
    let $sumaDados = $dado1 + $dado2;
    document.write("<p>La suma de los dados es igual a "+$sumaDados+"</p>");
}*/

function dados() {
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
    for (let i = 2; i < apariciones.length; i++) {
        console.log(`Suma ${i}: ${apariciones[i]} apariciones`);
    }
}

// Llamar a la función para ejecutar la simulación
dados();

