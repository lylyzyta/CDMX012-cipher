import cipher from './cipher.js';

const buttonCode = document.getElementById("buttonCode");
  buttonCode.addEventListener("click", letCode);//genera esta funcion cuando haya un click en buttonCode
  
  const buttonDecode = document.getElementById("buttonDecode");
  buttonDecode.addEventListener("click", letDecode);
  
    function letCode() {
      let inOffset = document.getElementById('inputNum').value; //Toma el valor del desplazamientos
      let offset = Number (inOffset);
      let inMsj = document.getElementById('inputCode').value; //Toma el valor del mensaje  
      let msjInput = String (inMsj);
      document.getElementById("printCode").innerHTML = "Tu mensaje es  " + cipher.encode(offset, msjInput);
    }

    function letDecode() {
      let inOffset = document.getElementById('inputNum').value; //Toma el valor del desplazamientos
      let offset = Number (inOffset);
      let inMsj = document.getElementById('inputCode').value; //Toma el valor del mensaje  
      let msjInput = String (inMsj);
      document.getElementById("printCode").innerHTML = "Tu mensaje es  " + cipher.decode(offset, msjInput);
      
    }
    