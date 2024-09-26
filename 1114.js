const senhaCorreta = 2024;

while (true) {
    const senha = parseInt(prompt("Digite a senha:"));
    if (senha === senhaCorreta) {
        console.log("Acesso Permitido");
        break;
    } else {
        console.log("Senha Invalida");
    }
}