
function mostrarDatos(){
    let idNombre=document.getElementById("idNombre").value;
    let idProducto=document.getElementById("idProducto").value;
    var suma=0;
    var resta =  0;
    var monedas=Array(100, 50, 10);
    var cambio=Array(0,0,0);
    do{
        var moneda =prompt("Ingrese una moneda");

        if(Number(moneda) == moneda){
            moneda= Number(moneda);
            if(moneda ==10 || moneda ==50 || moneda ==100 ){
                suma= suma + moneda ;

                if(suma <= idProducto){
                    alert("Ingrese más monedas aun no alcanza el monto del producto: "+idProducto +" solo a ingresado: " + suma);
                }if(suma >= idProducto){
                    alert("No ingrese más monedas a pasado el precio del producto, presione cancelar para confirmar la compra: " + suma);
                }
            }else{
                alert(moneda + "  No es un tipo de moneda aceptada, ingrese una moneda valida ($10, $50 y $100). ")
            }
    
            
        }else{
            if(moneda !=undefined ){
                alert(moneda + " No es un numero");
            }
        }
    }while ( moneda !=undefined);
    window.alert("El total es: " + suma);

    if(suma>=idProducto){
        resta= suma - idProducto;
    }
    var idtotal=resta;

    for(var i=0; i<monedas.length; i++){
        // Si el precio del producto actual, es superior a la moneda
        if(idtotal>=monedas[i]){
            // obtenemos cantidad de monedas
            cambio[i]=parseInt(idtotal/monedas[i]);
            // actualizamos el valor del precio del producto que nos queda por didivir
            idtotal=(idtotal-(cambio[i]*monedas[i])).toFixed(2);
        }
    }
    // Bucle para mostrar el resultado
    for(i=0; i<monedas.length; i++)
    {
        if(cambio[i]>0)
        {
            if(monedas[i]>=5)
                window.alert("Tu cambio son: "+cambio[i]+" Moneda de: $"+monedas[i]);
            else
                window.alert("Tu cambio son: "+cambio[i]+" Moneda de: $"+monedas[i]);
        }
    }
    
    console.log("Nombre del cliente: "+ idNombre);
    console.log("Precio del producto: $"+ idProducto);
    console.log("Total de dinero ingresado: $"+suma);
    console.log("Cambio a entregar: $"+ resta);
    console.log("Cambio por ciclo:"+ cambio);
    console.log("**************************************");
    
    return idtotal;
}