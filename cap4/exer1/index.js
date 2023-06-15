function fazerTabuada() {
    const inNumero = document.getElementById('inNumero')
    let outTabuada = document.getElementById('outTabuada')

    const numero = Number(inNumero.value)

        if (numero == 0 || isNaN(numero)) {
            alert('Este número é inválido.')
            inNumero.focus()
            return
        }

    let resposta = ''    
        for (let i = 1; i <= 10; i++) {
            resposta = resposta + numero + ' x ' + i + ' = ' + numero * i + '\n'
        }
        console.log(resposta)
        outTabuada.textContent = resposta
}

const tabuada = document.getElementById('btCalcular')
tabuada.addEventListener('click', fazerTabuada)