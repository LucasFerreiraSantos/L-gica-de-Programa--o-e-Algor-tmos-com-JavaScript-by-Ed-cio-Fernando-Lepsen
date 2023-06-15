function decrescerNumeros() {
    const inNumero = document.getElementById('inNumero')
    let outResult = document.getElementById('outResult')

    const numero = Number(inNumero.value)
        if(numero == 0 || isNaN(numero)) {
            alert('O campo "Número" não foi preenchido corretamente.')
            inNumero.focus()
            return
        }

    let resultado = ''
        for (let i = numero; i > 0; i--) {
            resultado = resultado + i + ', '
        }
        console.log(resultado)
    outResult.textContent = 'Entre ' + numero + ' e 1: ' + resultado   
}

const decrescer = document.getElementById('btDescrecer')
decrescer.addEventListener('click', decrescerNumeros)