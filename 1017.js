
const tempoViagem = 4;
const velocidadeMedia = 80;

const distanciaPercorrida = tempoViagem * velocidadeMedia;

const consumoPorLitro = 10;

const litrosNecessarios = distanciaPercorrida / consumoPorLitro;

console.log("Litros necessarios: " + litrosNecessarios.toFixed(3));