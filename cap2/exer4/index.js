function totalPagar() {
    let preçoQuilo = document.getElementById('inPrecoQuilo').value
    let consumoCliente = document.getElementById('inConsumoCliente').value
    let valorPagar = (preçoQuilo / 1000) * consumoCliente

    document.getElementById('outValor').textContent = 'Valor a pagar R$' + valorPagar.toFixed(2)
}

let calcularPreco = document.getElementById('btCalcular')
calcularPreco.addEventListener('click', totalPagar)