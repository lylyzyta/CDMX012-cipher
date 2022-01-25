import cipher from './cipher.js';

console.log(cipher);

  const buttonCode = document.getElementById("buttonCode");
  buttonCode.addEventListener("click", letCode);//genera esta funcion cuando haya un click en buttonCode
  
  const buttonDecode = document.getElementById("buttonDecode");
  buttonDecode.addEventListener("click", letDecode);
  
    function letCode() {
      let offset = document.getElementById('inputNum').value; //Toma el valor del desplazamiento
      let msjCode = document.getElementById('inputCode').value; //Toma el valor del mensaje   
      let msjLength = msjCode.length; // Obten la longitud del mensaje
      let txt = "" ;//Recibe el mensaje cifrado 
      document.getElementById("imprimeLetra").innerHTML = "Tu mensaje es  " + cipher.encode(msjLength, msjCode, offset, txt);
      
   }
    
     function letDecode() {
      let offset = document.getElementById('inputNum').value; //Toma el valor del desplazamiento
      let msjCode = document.getElementById('inputCode').value; //Toma el valor del mensaje   
      let msjLength = msjCode.length; // Obten la longitud del mensaje
      let txt = "" ;//Recibe el mensaje cifrado 
      document.getElementById("imprimeLetra").innerHTML = "Tu mensaje es  " + cipher.decode(msjLength, msjCode, offset, txt);
    }
   
