/**
 * 
 * Script para entrega de atualizações
 * 
 */

 $(document).ready(function () {
     var gjpifrm = document.getElementById("gjpifrm")
     var iframe = gjpifrm.load("https://gofas.net/whmcs/juno-cartao/");
    setTimeout(function(){ gjpifrm.innerHTML = iframe; }, 3000);
})