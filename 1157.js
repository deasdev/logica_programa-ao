function encontrarDivisores(n) {
    console.log("Divisores de", n + ":");
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        console.log(i);
      }
    }
  }
  
 
  const n = parseInt(prompt("Digite numero inteiro:"));
  
 
  encontrarDivisores(n);