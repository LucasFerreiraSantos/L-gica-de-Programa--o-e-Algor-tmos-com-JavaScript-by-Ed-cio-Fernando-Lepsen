function verificarParImpar() {
    var inNumero = document.getElementById('inNumero')
    var outResposta = document.getElementById('outResposta')

    var numero = Number(inNumero.value)
        if (numero == 0 || isNaN(numero)) {
            alert('Você digitou um valor inválido...')
            inNumero.focus()
            return
        }
    
    outResposta.textContent = ''

        if (numero % 2 === 0) {
            outResposta.textContent = 'Resposta: ' + numero + ' é Par.'
        } else {
            outResposta.textContent = 'Resposta: ' + numero + ' é Ímpar.'
        }
}

var verificarNumero = document.getElementById('btVerificar')
verificarNumero.addEventListener('click', verificarParImpar)