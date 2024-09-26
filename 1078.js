
const N = parseInt(prompt("Digite um numero entre 2 e 1000:"));

if (N >= 2 && N <= 1000) {
 
  for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${N} = ${i * N}`);
  }
} else {
  console.log("Numero invalido. Digite um numero entre 2 e 1000.");
}