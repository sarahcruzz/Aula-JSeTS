let V = 135, I = 5, resistencia


function calcularPotencia(V, I) {
    resistencia = V / I
    console.log(`O valor da resistência é ${resistencia}`)
}

function calcularResistencia(V, I) {
    potencia = V * I
    console.log(`O valor da potência é ${potencia}`)    
}

calcularPotencia(V, I)
calcularResistencia(V, I)