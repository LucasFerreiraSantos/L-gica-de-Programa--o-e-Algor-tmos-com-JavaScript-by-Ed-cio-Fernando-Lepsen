let divisores = 0
let soma = 0

function verificarNumeros() {
    let inNum = document.getElementById('inNum')
    let outDivisores = document.getElementById('outDivisores')
    let outResult = document.getElementById('outResult')

    let num = Number(inNum.value)
        while (num == 0 || isNaN(num)) {
            alert('Digite um número...')
            inNum.focus()
            break
        }
    
    for (var i = 1; i < num; i++) {
        if (num % i === 0) {
            divisores += 'Divisores do ' + num + ': ' + divisores
            soma += i;
        }
    }

    if (soma === numero) {
        outResult.textContent = num + ' É um Número Perfeito.'
    } else {
        outResult.textContent = num + ' NÃO é um Número Perfeito.'
    }



}

const verificar = document.getElementById('btVerificar')
verificar.addEventListener('click', verificarNumeros)