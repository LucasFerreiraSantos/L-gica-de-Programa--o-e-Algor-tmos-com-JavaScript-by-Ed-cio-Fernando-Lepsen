function revenderVeiculo() {
    let veiculo = document.getElementById('inVeiculo').value
    let entrada = document.getElementById('inPreco').value
    let divisaoEntrada = entrada / 2
    let parcelas = divisaoEntrada / 12

    document.getElementById('outPromocao').textContent = 'Promoção: ' + veiculo + '.'
    document.getElementById('outEntrada').textContent = 'Entrada de R$' + divisaoEntrada

    document.getElementById('outPagamento').textContent = '+ 12x de R$' + parcelas
}

let verPromocao = document.getElementById('btPromocao')
verPromocao.addEventListener('click', revenderVeiculo);