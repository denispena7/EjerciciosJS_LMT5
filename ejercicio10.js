let $esp = document.getElementById('esp');
let $por = document.getElementById('por');
let $fra = document.getElementById('fra');
let $ita = document.getElementById('ita');

function evento($pais, $capital)
{
    if($pais == 'España' && $capital == 'Madrid')
    {
        $esp.innerHTML = "";
        let $imagen1 = '<img src="../img/imgesp.png" width="150px" alt="España">';
        $esp.innerHTML = $imagen1;
    }
    else if($pais == 'Portugal' && $capital == 'Lisboa')
    {
        $por.innerHTML = "";
        let $imagen2 = '<img src="../img/imgpor.jpg" width="150px" alt="Portugal">';
        $por.innerHTML = $imagen2;
    }
    else if($pais == 'Francia' && $capital == 'Paris')
    {
        $fra.innerHTML = "";
        let $imagen3 = '<img src="../img/imgfra.jpg" width="150px" alt="Francia">';
        $fra.innerHTML = $imagen3;
    }
    else
    {
        $ita.innerHTML = "";
        let $imagen4 = '<img src="../img/imgita.jpg" width="120px" alt="Italia">';
        $ita.innerHTML = $imagen4;
    }
        
    $("#esp").on("mouseenter", function(){    
        alertify.alert().set("label", "Aceptar").setContent("<h1>La capital de "+$pais+" es "+$capital+"</h1>").show();
    });

    $("#por").on("mouseenter", function(){    
        alertify.alert().set("label", "Aceptar").setContent("<h1>La capital de "+$pais+" es "+$capital+"</h1>").show();
    });  
    
    $("#fra").on("mouseenter", function(){    
        alertify.alert().set("label", "Aceptar").setContent("<h1>La capital de "+$pais+" es "+$capital+"</h1>").show();
    });

    $("#ita").on("mouseenter", function(){    
        alertify.alert().set("label", "Aceptar").setContent("<h1>La capital de "+$pais+" es "+$capital+"</h1>").show();
    });
}