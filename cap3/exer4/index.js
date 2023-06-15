function exibirRaiz() {
    var inEntrada = document.getElementById('inEntrada')
    var outResult = document.getElementById('outResult')

    var numero = Number(inEntrada.value)
        if (numero == 0 || isNaN(numero)) {
            alert('Informe um número válido...')
            inEntrada.focus()
            return
        }

    var raiz = Math.sqrt(numero)
        if (raiz == Math.floor(raiz)) {
            outResult.textContent = 'A raiz de ' + numero + ' é ' + raiz + '.'
        } else {
            outResult.textContent = 'Não há raiz exata para ' + numero + '.'
        }
}

var exibir = document.getElementById('btExibirRaiz')
exibir.addEventListener('click', exibirRaiz)