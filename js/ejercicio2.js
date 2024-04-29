function conversion()
{
    let euro = document.getElementById('euros').value;
    let bitcoin = document.getElementById('bitcoins').value;

    if(euro != "" && bitcoin == "")
    {
        alert("Tienes " + (euro * 0.000017) + " BTC");
        //document.getElementById('bitcoins').value = resultado;
    }
    else if(bitcoin != "" && euro == "")
    {
        alert("Tienes " + Math.round(bitcoin * 57909.16) + " EUR");
         //document.getElementById('euros').value = resultado;
    }
}