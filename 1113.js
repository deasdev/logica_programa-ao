while (true) {
    const linha = prompt("Digite dois numeros inteiros (separados por espaço) ou digite o mesmo numero duas vezes para encerrar:").split(' ');
  
    const x = parseInt(linha[0]);
    const y = parseInt(linha[1]);
  
    if (x === y) {
      break; 
    }
  
    if (x < y) {
      console.log("Crescente");
    } else {
      console.log("Decrescente");
    }
  }