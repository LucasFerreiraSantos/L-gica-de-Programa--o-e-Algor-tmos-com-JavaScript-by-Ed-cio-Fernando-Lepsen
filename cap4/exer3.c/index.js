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

    let somaDivisores = 0
    
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            somaDivisores += 1
        }
    }

    if (somaDivisores === num) {
        outResult.textContent = num + ' É um Número Perfeito.'
    } else {
        outResult.textContent = num + ' NÃO é um Número Perfeito.'
    }
}

const verificar = document.getElementById('btVerificar')
verificar.addEventListener('click', verificarNumeros)