function validarNroDoc() {
   
   var regexDcto = /^\d{7}-\d$/;
   var nroDcto = document.getElementById("nroDcto");
   var ruc = document.getElementById("tipDcto").value;

   if (ruc == 1) {
        if (regexDcto.test(nroDcto.value)) {
            document.getElementById("nroDcto").classList.remove('is-invalid')
            console.log("Válido");
       } else {
            document.getElementById("nroDcto").classList.add('is-invalid')
            console.log("Inválido")
       }
   } else {
    return true;
   }

  
   
}