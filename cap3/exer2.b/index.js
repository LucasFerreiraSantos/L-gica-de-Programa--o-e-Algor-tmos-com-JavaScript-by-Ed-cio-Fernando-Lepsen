function medirVelocidade() {
    var inVelocidadePermitida = document.getElementById('inVelocidadePermitida')
    var inVelocidadeCondutor = document.getElementById('inVelocidadeCondutor')
    var outResposta = document.getElementById('outResposta')

    var velocidadePemitida = Number(inVelocidadePermitida.value)
    var velocidadeCondutor = Number(inVelocidadeCondutor.value)

    var limiteMultaLeve = velocidadePemitida * 1.2
    
    outResposta.textContent = ''

    if (velocidadeCondutor <= velocidadePemitida) {
        outResposta.textContent = ("Sem Multa")
    } else if (velocidadeCondutor <= limiteMultaLeve) {
        outResposta.textContent = ("Multa Leve")
    } else {
        outResposta.textContent = ("Multa Grave")
    }
}

var calculaVelocidade = document.getElementById('btVerificar')
calculaVelocidade.addEventListener('click', medirVelocidade)