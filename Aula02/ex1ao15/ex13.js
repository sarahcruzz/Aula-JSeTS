const consumoWatts = 1750;
const horasPorDia = 8; 
const diasPorMes = 25; 
const custoPorKw = 0.75;

const consumoKw = consumoWatts / 1000;

const consumoMensal = consumoKw * horasPorDia * diasPorMes;
 
const custoTotal = consumoMensal * custoPorKw;

console.log(`O custo total em reais por mês é: R$ ${custoTotal}`);
