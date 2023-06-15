function criarPromocao() {
    let produto = document.getElementById('inProduto').value
    let preco = document.getElementById('inPreco').value
    let desconto = preco - preco/2
    let result = (preco * 3) - desconto


    document.getElementById('outProduto').textContent = produto + ' - Promoção: Leve 3 por ' + result
    document.getElementById('outDesconto').textContent = 'O terceiro produto custa apenas R$' + desconto
}

let verPromocao = document.getElementById('btVerPromocao')
verPromocao.addEventListener('click', criarPromocao)