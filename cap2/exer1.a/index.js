function descontarMedicamento() {
    let medicamento = document.getElementById('inMedicamento').value
    let preco = (document.getElementById('inPreco')).value
    let result = Math.floor(preco * 2)

    document.getElementById('outPromocao').textContent = 'Promoção de ' + medicamento + '.'
    document.getElementById('outDesconto').textContent = 'Leve 2 por apenas R$' + result
}

let descontar = document.getElementById('btMostrarPromocao')
descontar.addEventListener('click', descontarMedicamento)