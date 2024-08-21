let palavra = "renner"

function verificarPalindromo(palavra){
    let palavra_invertida = palavra.split('').reverse().join('')
    return palavra === palavra_invertida
}

if (verificarPalindromo(palavra)){
    console.log(`A palavra ${palavra} é um palíndromo`)
} else{
    console.log(`A palavra ${palavra} não é um palíndromo`)
}