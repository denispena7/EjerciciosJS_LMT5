$(document).ready(function(){
    $("#btnAlert").on("click", function(){
        alertify.alert().set("label", "Siguiente").setContent("<h1>Mensaje de alerta!!</h1>").show();
    });

    $("#btnNofify").on("click", function(){
        alertify.set("notifier", "position", "top-center");
        alertify.notify("Este es el mensaje", 1);
    });

    $("#btnOK").on("click", function(){
        alertify.success("Registro correcto");
    });

    $("#btnWarning").on("click", function(){
        alertify.warning("No se han completado todos los datos");
    });

    $("#btnError").on("click", function(){
        alertify.error("Error al registrar datos");
    });

    $("#btnConfirm").on("click", function(){
        alertify.confirm("Título del confirm", "Estas seguro?", 
        function(){
            alertify.success("OK");
        }, 
        function(){
            alertify.error("No");
        }).set("labels", {ok:"Sí", cancel:"No"});
    });

    $("#btnPrompt").on("click", function(){
        alertify.prompt("Título del prompt", "Dime el nombre", "Pepe", 
        function(evt, value){
            alertify.success("Hola, " + value);
        },
        function(){
            alertify.error("Cancelado");
        });
    });
});