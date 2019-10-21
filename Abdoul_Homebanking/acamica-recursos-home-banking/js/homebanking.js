//Declaración de variables
    var nombreUsuario='BenAbdallah';
    var saldoCuenta=5000;
    var limiteExtraccion=1000;
    var saldoNuevo=1000;
    function agregarSaldo(){
    saldoCuenta = saldoCuenta + saldoNuevo;
    }
    var resteSaldo=500;
    function restarSaldo(){
    saldoCuenta= saldoCuenta - resteSaldo;
                }
    

        //Ejecución de las funciones que actualizan los valores de las variables en el HTML.
            window.onload = function() {
            while(!iniciarSesion());
             cargarNombreEnPantalla();
            actualizarSaldoEnPantalla();
            actualizarLimiteEnPantalla();
            
            }


            
            //Funciones que tenes que completar
            function cambiarLimiteDeExtraccion() {
            var stringNuevoLimite=prompt("ingresa el nuevo límite de extracción aqui");
            var LimiteNueva=parseInt(stringNuevoLimite);
            var limiteExtraccion=stringNuevoLimite;
                 if(isNaN(stringNuevoLimite)){
            alert("Debes ingresar el codigo");
            return;
        }
        if(stringNuevoLimite <= 0){
            alert("Debes ingresar el codigo");
            return;
        }
            alert("Tu límite de extracción es: \r\n $"+stringNuevoLimite+"");
}



            function extraerDinero() {var saldoCuenta=5500;
            var stringExtraer=prompt("¿Cuanto deseas extraer?");
            var montoAextraer=parseInt(stringExtraer);
            var retirado=saldoCuenta-montoAextraer;
             if(isNaN(montoAextraer)){
                alert("Debes ingresar un numero");
                return;
            }
            if(montoAextraer <= 0){
                 alert("Debes ingresar un numero");
                 return;
            }
            alert("montoAextraer:"+stringExtraer+" \r\n saldoAnterior:"+saldoCuenta+" \r\n saldoActual:"+retirado+"");
                            
            var saldoCuenta=5500;
              
            if(stringExtraer<saldoCuenta){
            if((stringExtraer % 100) === 0){
            alert("EXTRACCION ok");
            
            } else{
            alert("Solo se entrega billetes de 100");
            return false;
            }
            } else {
            alert("Tu solicitud ha sido Rechazado!! \r\n El dinero solicitado es superior al disponible");
            } 
}

                     


    function depositarDinero() {
        var stringDeposito=prompt("¿Cuanto deseas depositar?");
        var montoDeposito=parseInt(stringDeposito);
        if(isNaN(montoDeposito)){
            alert("El monto ingresado no es un numero");
            return;
        }
        if(montoDeposito <= 0){
            alert("El monto ingresado debe ser positivo");
            return;
        }
        var saldoCuenta=5500;
        var saldoActual=saldoCuenta+montoDeposito;
        alert("montoDeposito:$"+stringDeposito+" \r\n saldoAnterior:$"+saldoCuenta+" \r\n saldoActual:$"+saldoActual+"");
    }



    function pagarServicio() {
     var Agua=350;
     var Luz=425;
     var Telefono=210;
     var Internet=570;
     var pagarServicio;
     var saldoActual;
        stringServicio=prompt("selecciona el numero del servicio que quieres pagar:\r\n1 - Agua\r\n2 - Luz\r\n3 - Telefono\r\n4 - Internet"); 
            if(isNaN(stringServicio)){
                alert("Debes ingresar un numero");
                return;
            }
            if(stringServicio <= 0){
                 alert("Debes ingresar un numero");
                 return;
            }
            if (stringServicio === null || stringServicio === "") {
            } else {
            console.log(stringServicio);
            switch (stringServicio) {
            case '1':
            saldoActual = saldoCuenta - Agua;
            alert("Has pagado tu Agua \r\n SaldoAnterior:$"+saldoCuenta+" \r\n Descontado:$"+Agua+" \r\n saldoActual:$"+saldoActual);
            break;
            case '2':
            saldoActual = saldoCuenta - Luz;
            alert("Has pagado tu Luz \r\n SaldoAnterior:$"+saldoCuenta+" \r\n Descontado:$"+Luz+" \r\n saldoActual:$"+saldoActual);
            break;
             case '3':
            saldoActual = saldoCuenta - Telefono;
            alert("Has pagado tu Telefono \r\n SaldoAnterior:$"+saldoCuenta+" \r\n Descontado:$"+Telefono+" \r\n saldoActual:$"+saldoActual);
            break;
            case '4':
            saldoActual = saldoCuenta - Internet;
             alert("Has pagado tu Internet \r\n SaldoAnterior:$"+saldoCuenta+" \r\n Descontado:$"+Internet+" \r\n saldoActual:$"+saldoActual);
            break;
            default:
            alert('Por favor Seleciona el numero correcto');
            // code
    }
  }
    }
    
    
    
    function transferirDinero() {
        var cuentaAni=1234567;
        var cuentaDebi=7654321;
        var stringTransferir=prompt("Ingrese el monto que deseas transferir");
         if(isNaN(stringTransferir)){
                alert("Debes ingresar un numero");
                return;
            }
            if(stringTransferir <= 0){
                 alert("Debes ingresar un numero");
                 return;
            }
            var cuentaTransferir;
            if(stringTransferir<saldoCuenta){
             var cuentaTransferir = prompt("Ingrese el número de cuenta que deseas transferir el dinero");
            }else{
            alert("No se puede transferir esa cantidad de dinero.\r\n Por favor verifique su Saldo");
            }
            console.log(`cuentaTransferir${cuentaTransferir}`);
            switch (cuentaTransferir) {
            case '1234567':
            alert("Has hecho una transferencia!\r\n Cuenta-Destino:"+cuentaAni+"");
            break;
            case '7654321':
            alert("Has hecho una transferencia!\r\n Cuenta-Destino:"+cuentaDebi+"");
            break;
            default:
            alert("Solo puedes transferir dinero a una cuenta amiga");
            break;
            }
        }

                

    
        function iniciarSesion() {
        var codigo=1234;
        var  stringcodigo=prompt("Por favor Ingrese su codigo");
        console.log(stringcodigo);
          if(isNaN(stringcodigo)){
            alert("Debes ingresar el codigo");
            return false;
        }
        if(stringcodigo <= 0){
            alert("Debes ingresar el codigo");
            return false;
        }
        
        if(parseInt(stringcodigo)===codigo){
            alert("Bienvenido "+nombreUsuario+", ahora podes operar.");
            return true;
        } else{
            alert("CODIGO INCORRECTO!!Tu dinero ha sido retenido por securidad");
            return false;
        }
    } 
     


//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = 5500;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $"+1000;
}
function actualizarcodigoEnPantalla() {
    document.getElementById(codigo).innerHTML = codigo;
}

