nomes = ['Daniel', 'Bruna', 'Camila', 'Julia']
console.log(nomes)
nomes.splice(1, 1, 'Viviane')   // splice adiciona elementos e remove em uma posição epecífica
console.log(nomes)
const nomes2 = nomes.slice(1, 2)    // fatia a lista a partir da posição 1 até a 2
console.log(nomes2)
const tamanho = nomes.lenght    // lenght - retorna o tamanho da lista
console.log(tamanho)