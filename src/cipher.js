const cipher = {
  encode: function (offset, msjInput) {
       if (typeof (offset) === "number" && typeof (msjInput) === "string"){
        let txt= "";
        let msjLength = msjInput.length;
           for (let i = 0; i < msjLength; i++) { //abro for para ciclo de número de caractéres
           let cambioAsCii = msjInput.charCodeAt(i);
              if (cambioAsCii >= 97 && cambioAsCii <=122)
              { //abro if para minúsculas
              let formMin = (cambioAsCii + offset -97) %26 + 97;
              let msjoutMin = String.fromCharCode(formMin);
              txt += msjoutMin;
              } //cierro if para minúsuclas
              else if (cambioAsCii >= 65 && cambioAsCii <=90)            
              { // abro else if de mayúsculas
              let formMay = (cambioAsCii + offset -65) %26 + 65;
              let msjoutMay = String.fromCharCode(formMay);
              txt += msjoutMay;
              } //cierro if para mayúsculas
              else if (cambioAsCii >= 32)
              { // abro else if de espacio
               let formSpace = cambioAsCii;
               let msjoutSpace = String.fromCharCode(formSpace);
               txt += msjoutSpace;
              } //cierro if para espacio
              else
              { //abro else de si no es mayúsculas y minúsculas
                console.log ("ingrese ms correcto");
              } //cierro else de si no es mayúsuclas y minúsculas
       } //cierro for
       return (txt);
      } //cierro if de typeof
       else
       { //abro else de typerror 
         throw new TypeError("error");
      } //cierro else de typeError
      
  },//cierro encode

  decode: function (offset, msjInput) {
    if (typeof (offset) === "number" && typeof (msjInput) === "string"){
     let txt= "";
     let msjLength = msjInput.length;
        for (let i = 0; i < msjLength; i++) { //abro for para ciclo de número de caractéres
        let cambioAsCii = msjInput.charCodeAt(i);
           if (cambioAsCii >= 97 && cambioAsCii <=122)
           { //abro if para minúsculas
           let formMin = (cambioAsCii - offset -97) %26 + 97;
           if (formMin < 97) {formMin = formMin +26}
           let msjoutMin = String.fromCharCode(formMin);
           txt += msjoutMin;
           } //cierro if para minúsuclas
           else if (cambioAsCii >= 65 && cambioAsCii <=90)            
           { // abro else if de mayúsculas
           let formMay = (cambioAsCii - offset -65) %26 + 65;
           if (formMay < 65) {formMay = formMay +26}
           let msjoutMay = String.fromCharCode(formMay);
           txt += msjoutMay;
           } //cierro if para mayúsculas
           else if (cambioAsCii == 32)
           { // abro else if de espacio
           let formSpace = cambioAsCii;
           let msjoutSpace = String.fromCharCode(formSpace);
           txt += msjoutSpace;
           } //cierro if para espacio
           else
           { //abro else de si no es mayúsculas y minúsculas
             console.log("error");
           } //cierro else de si no es mayúsuclas y minúsculas
    } //cierro for
    return (txt);
   } //cierro if de typeof
    else
    { //abro else de typerror 
      throw new TypeError("error");
   } //cierro else de typeError
   
}//cierro decode
      
};//cierro cipher
 
  export default cipher;
     