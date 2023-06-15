function calcularTempoETroco() {
    const tabelaValores = [
        { valor: 1.00, tempo: 30 },
        { valor: 1.75, tempo: 60 },
        { valor: 3.00, tempo: 120 }
    ]

    let valorDeposito = document.getElementById('inEntrada')
    let outTempo = document.getElementById('outTempo')
    let outTroco = document.getElementById('outTroco')
    let deposito = Number(valorDeposito.value)

    let tempoPermanencia = 0
    let troco = 0
    
    if (deposito < tabelaValores[0].valor) {
        alert("Valor Insuficiente!")
        return
    }
    
    for (let i = tabelaValores.length - 1; i >= 0; i--) {
        if (deposito >= tabelaValores[i].valor) {
            tempoPermanencia = tabelaValores[i].tempo;
            troco = deposito - tabelaValores[i].valor;
            break;
        }
    }

    outTempo.textContent = ("Tempo de permanência: " + tempoPermanencia + " minutos")
    outTroco.textContent = ("Troco: R$" + troco.toFixed(2));
}

const confirmarDeposito = document.getElementById('btConfirmar')
confirmarDeposito.addEventListener('click', calcularTempoETroco)