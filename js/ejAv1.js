function sustituir()
{
    let $texto = document.getElementById('palabra').value;
    let $nuevoTexto = $texto.replace("a", '*');
    $nuevoTexto = $nuevoTexto.replace("e", '*');
    $nuevoTexto = $nuevoTexto.replace("i", '*');
    $nuevoTexto = $nuevoTexto.replace("o", '*');
    $nuevoTexto = $nuevoTexto.replace("u", '*');

    $nuevoTexto = $nuevoTexto.replace("A", '*');
    $nuevoTexto = $nuevoTexto.replace("E", '*');
    $nuevoTexto = $nuevoTexto.replace("I", '*');
    $nuevoTexto = $nuevoTexto.replace("O", '*');
    $nuevoTexto = $nuevoTexto.replace("U", '*');

    document.getElementById('palabra').value = $nuevoTexto;
    // Cómo sería esto en expresión regular
}