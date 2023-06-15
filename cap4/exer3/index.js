let numContas = 0
let valorTotal = 0

let resposta = ''

function somarContasDoMes() {
    let inDescriptionConta = document.getElementById('inDescriptionConta')
    let inValor = document.getElementById('inValor')
    let outRelatorio = document.getElementById('outRelatorio')
    let outTotalContas = document.getElementById('outTotalContas')

    let contaDescription = inDescriptionConta.value
    let valorPagar = Number(inValor.value)

        if (contaDescription == '' || valorPagar == 0 || isNaN(valorPagar)) {
            alert('Precisa dizer a descrição da conta e seu valor para registro.')
            inDescriptionConta.focus()
            return
        }   

    numContas++
    valorTotal = valorTotal + valorPagar

    resposta = resposta + contaDescription + ' - R$ ' + valorPagar.toFixed(2) + '.\n'

    outRelatorio.textContent = resposta + '-----------------------------------'
    outTotalContas.textContent = numContas + ' Conta(s) - Total R$ ' + valorTotal.toFixed(2) + '.'

    inDescriptionConta.value = ''
    inValor.value = ''
    inDescriptionConta.focus()
}

const registrarContas = document.getElementById('btRegistrarConta')
registrarContas.addEventListener('click', somarContasDoMes)