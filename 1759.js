function hoHoHo(n) {
   
    let resultado = "";
  
       for (let i = 0; i < n; i++) {
      resultado += "Ho ";
    }
      
    resultado += "!";
     
    console.log(resultado);
  }
   
  const n = parseInt(prompt("Digite o numero de 'Ho': "));
  
   hoHoHo(n);