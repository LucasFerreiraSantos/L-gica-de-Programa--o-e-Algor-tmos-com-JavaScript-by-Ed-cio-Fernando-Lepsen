function calcularValorTotal() {
    let valorMinuto = (document.getElementById('inValor')).value
    let tempoUso = (document.getElementById('inTime')).value
    let valorTotal = Math.ceil(tempoUso / 15) * valorMinuto

    document.getElementById('outTotal').textContent = 'Valor a pagar R$ ' + valorTotal.toFixed(2)
}

let calcular = document.getElementById('btCalcular')
calcular.addEventListener('click', calcularValorTotal)