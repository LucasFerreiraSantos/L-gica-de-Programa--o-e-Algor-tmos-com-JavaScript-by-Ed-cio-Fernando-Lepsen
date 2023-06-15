var cidades = ['Pelotas']
console.log(cidades[0])

cidades.push('São Lourenço') // Adiciona um elemento ao final do vetor.
console.log(cidades)

cidades.unshift('Vitória') // Adiciona um elemento ao início do vetor e desloca os elementos existentes uma posição abaixo.
console.log(cidades)

var retirada = cidades.pop() // Remove o último elemento do vetor.
console.log(retirada)

retirada = cidades.shift() // Remove o primeiro elemento do vetor e desloca os elementos existentes uma posição acima.
console.log(retirada)

cidades.push('Cariacica', 'Viana', 17)
console.log(cidades.slice(2)) // Método slice() precisa ser usado dentro do console.log

    for (var i = 0; i < cidades.length; i++) {
        alert(cidades[i])
    } // length - É utilizado para percorrer toda a extensão do vetor.

var cidades = ["Pelotas", "São Lourenço", "Porto Alegre"];
alert(cidades.toString() + "\n\n" + cidades.join(" - ")) //toString() e join() - Eles convertem o conteúdo do vetor em uma string, sendo que no método toString() uma vírgula é inserida entre os elementos e no join() podemos indicar qual caractere vai separar os itens. Referenciar apenas o nome do vetor ou o nome seguido pelo método join() sem o caractere de separação gera uma saída idêntica à toString().
