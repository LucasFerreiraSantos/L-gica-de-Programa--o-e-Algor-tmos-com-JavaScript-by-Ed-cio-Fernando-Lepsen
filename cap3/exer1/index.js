function calcularMedia () {
    let nome = document.getElementById('inNameAluno').value
    let primeiraNota = document.getElementById('inPrimeiraNota')
    let segundaNota = document.getElementById('inSegundaNota')
    let nota1 = Number(primeiraNota.value)
    let nota2 = Number(segundaNota.value)

    let media = (nota1 + nota2) / 2

    document.getElementById('outMedia').textContent = 'A média das notas é de ' + media.toFixed(1)
        if (media >= 7) {
            document.getElementById('outResult').textContent = 'Parabéns ' + nome + '! Você foi APROVADO(A).'
            outResult.style.color = 'green'
        } else if (media >= 4 && media < 7) {
            document.getElementById('outResult').textContent = 'Se acalme ' + nome + '! Você está de RECUPERAÇÃO.'
            outResult.style.color = 'blue'
        } else {
            document.getElementById('outResult').textContent = 'Infelizmente ' + nome + '! Você foi REPROVADO(A).'
            outResult.style.color = 'Red'
        }
}

let exibirMedia = document.getElementById('btExibirMedia')
exibirMedia.addEventListener('click', calcularMedia)