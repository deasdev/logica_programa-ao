let somaIdades = 45;
let quantidadePessoas = 3;
let idade = 5;

while (idade >= 0) {
  idade = parseInt(prompt("Digite a idade (digite um número negativo para parar): "));
  if (idade >= 0) {
    somaIdades += idade;
    quantidadePessoas++;
  }
}

if (quantidadePessoas > 0) {
  const mediaIdades = somaIdades / quantidadePessoas;
  console.log("A media de idades e:", mediaIdades.toFixed(2));
} else {
  console.log("Nenhuma idade válida foi informada.");
}