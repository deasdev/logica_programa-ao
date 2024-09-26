function arabicoParaRomano(numero) {
    const romanos = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const arabicos = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romano = '';

    for (let i = 0; i < romanos.length; i++) {
        while (numero >= arabicos[i]) {
            romano += romanos[i];
            numero -= arabicos[i];
        }
    }

    return romano;
}


const numeroArabico = 1965;
const numeroRomano = arabicoParaRomano(numeroArabico);
console.log(numeroRomano); 
