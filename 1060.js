let positivos = 0;

for (let i = 0; i < 6; i++) {
  const valor = parseFloat(prompt("Digite um numero:"));
  if (valor > 0) {
    positivos++;
  }
}

console.log(`Foram digitados ${positivos} numeros positivos.`);