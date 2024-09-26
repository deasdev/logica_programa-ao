function calcularImposto(salario) {
    if (salario <= 2000) {
      return "Isento";
    }
  
    let imposto = 0;
  
    if (salario <= 3000) {
      imposto += (salario - 2000) * 0.08;
    } else if (salario <= 4500) {
      imposto += 80 + (salario - 3000) * 0.18;
    } else {
      imposto += 80 + 270 + (salario - 4500) * 0.28;
    }
  
    return `R$ ${imposto.toFixed(2)}`;
  }
  
 
  const salario = parseFloat(prompt("Digite o salário:"));
  

  const resultado = calcularImposto(salario);
  console.log(resultado);