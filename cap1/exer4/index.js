const nota1 = parseFloat(prompt('Qual foi a nota do primeiro trimestre? '))
const nota2 = parseFloat(prompt('Qual foi a nota do segundo trimestre? '))

let media = (nota1 + nota2) / 2

alert('A nota do primeiro trimestre foi de ' + nota1 + ' e a nota do segundo trimestre foi de ' + nota2 + ' . Desse modo, a média do aluno foi de ' + media + '.')

if (media => 7) {
    alert('Aluno aprovado!')
} else {
    alert('Aluno reprovado!')
}

