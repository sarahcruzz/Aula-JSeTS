const calculadora = {
    soma(n1, n2){
        return n1 + n2
    },

    subtracao(n1, n2){
        return n1 - n2
    },

    multiplicacao(n1, n2){
        return n1 * n2
    },

    divisao(n1, n2){
        if (n2 == 0){
            console.log("O número não pode ser dividido por zero")
        } else {
            return n1 / n2
        }
    },

    calcularMedia(notas){
        let soma = 0;
        for (let i = 0; i < notas.length; i++){
            soma += notas[i]
        }
        return soma / notas.length
    }
}

console.log("Soma: " + calculadora.soma(2,5))
console.log("Subtração: " + calculadora.subtracao(5, 8))
console.log("Multiplicação: " + calculadora.multiplicacao(2,9))
console.log("Divisão: " + calculadora.divisao(2,0))

let notas = [1,2,3]     
console.log("Média: " + calculadora.calcularMedia(notas))
