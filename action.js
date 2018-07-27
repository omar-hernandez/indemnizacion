function funciona(fechaIni, fechaFin, despidoInjustificado){
    var salarioMensual = 0;
    var horasExtra = 0;
    var vacaciones = 0;
    var vacacionesNoTomadas = 0;
    var diasAguinaldo = 0;
 

    var datosBasicos1 = "";
    var datosBasicos2 = "";

    var fechaIni = document.getElementById("fechaIni").value;
    var fechaFin = document.getElementById("fechaFin").value;
    var fecha1 = new Date(fechaIni)
    var fecha2 = new Date(fechaFin)
    var diferencia = fecha2 - fecha1;
    var diasLaborados = diferencia/(1000*60*60*24*30); 
    var fecha3 = new Date(2018, 0, 0);
    var difDiasLabAño = fecha2 - fecha3;
    var diasLabAño = (difDiasLabAño/(1000*60*60*24))+0.25;

    var despidoInjustificado = document.getElementById("despidoInjustificado").value;
    


    salarioMensual = parseFloat(document.getElementById("salarioMensual").value);
    horasExtra = parseFloat(document.getElementById("horasExtra").value);
    vacaciones = parseFloat(document.getElementById("vacaciones").value);
    vacacionesNoTomadas = parseFloat(document.getElementById("vacacionesNoTomadas").value);
    diasAguinaldo = parseFloat(document.getElementById("diasAguinaldo").value);

    datosBasicos1 = "Salario Diario: " + (salarioMensual/30) + " pesos. <br> Duración de la relación laboral: " + diasLaborados + " meses. <br> Días laborados último año: " + diasLabAño + " días.";

    document.getElementById("datosBasicos1").innerHTML = datosBasicos1;
    

    datosBasicos2 = "Ingresos por: <br> Vacaciones: "+(vacacionesNoTomadas*(salarioMensual/30)) + " Pesos.<br>Prima vacacional: "+((vacaciones*.25)*(salarioMensual/30)) + " Pesos.<br>Aguinaldo: "+(((diasAguinaldo/365)*diasLabAño)*(salarioMensual/30)) + " Pesos.<br>Suma un Finiquito total de: " + ((vacacionesNoTomadas*(salarioMensual/30))+((vacaciones*.25)*(salarioMensual/30))+(((diasAguinaldo/365)*diasLabAño)*(salarioMensual/30)))  + " Pesos.";
    document.getElementById("datosBasicos2").innerHTML = datosBasicos2;

    var primaAntiguedad = 0;
    if((salarioMensual/30)>176.72){
        primaAntiguedad = 176.72*(diasLaborados);
    } else{ 
        primaAntiguedad = (salarioMensual/30)*(diasLaborados);
    }
    
    if(despidoInjustificado==2){
        datosBasicos3 = "Además es acredor de una Prima de antigüedad por : "+primaAntiguedad+" pesos y una indemnización de "+(90*(salarioMensual/30))+" pesos. Esto es una indemnizaciòn total de "+(primaAntiguedad+((90*(salarioMensual/30)))+((vacacionesNoTomadas*(salarioMensual/30))+((vacaciones*.25)*(salarioMensual/30))+(((diasAguinaldo/365)*diasLabAño)*(salarioMensual/30))))+" pesos.";
        document.getElementById("datosBasicos3").innerHTML = datosBasicos3;
    
    }


    


   
}