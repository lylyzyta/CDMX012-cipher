const cipher = {

  encode: function (a, b, c, d){
    for (let i = 0; i < a; i++) { // Ciclo para hacerlo tantas veces sea la longitud del msj
      let text = String(b); //Asegurar que el msjCode sea un string
      let cambioAsCii = text.charCodeAt(i); // Convierte mi texto en codigo ASCII
      let formulaMay = (cambioAsCii + Number(c) - 65) % 26 + 65; //Fórmula para ubicar mi letra en ASCII y moverla con el offset
      d = d.concat(String.fromCharCode(formulaMay)); //console.log(formulaMay);
      
      }
      return d;

  },

  decode: function (a, b, c, d){
    for (let i = 0; i < a; i++) { // Ciclo para hacerlo tantas veces sea la longitud del msj
      let text = String(b); //Asegurar que el msjCode sea un string
      let cambioAsCii = text.charCodeAt(i); // Convierte mi texto en codigo ASCII
      let formulaMay = (cambioAsCii - Number(c) - 65) % 26 + 65; //Fórmula para ubicar mi letra en ASCII y moverla con el offset
      if (formulaMay < 65) {
        formulaMay = formulaMay + 26
      }
      d = d.concat(String.fromCharCode(formulaMay)); //console.log(formulaMay);
      }
      return d;
  }
  };
  


export default cipher;
  
