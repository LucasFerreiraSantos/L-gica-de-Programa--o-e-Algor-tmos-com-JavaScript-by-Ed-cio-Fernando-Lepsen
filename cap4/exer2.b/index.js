function mostrarPrevisao() {
    let inNumChinchilas = document.getElementById('inNumChinchilas')
    let inAnos = document.getElementById('inAnos')
    let outResult = document.getElementById('outResult')

    let numChinchilas = Number(inNumChinchilas.value)
    let numAnos = Number(inAnos.value)

    while (isNaN(numChinchilas) || numChinchilas < 2) {
        alert('O número de chinchilas deve ser igual ou maior que dois (2).')
        inNumChinchilas.focus()
        break
    }
    
    let numeroChinchilas = numChinchilas
    let lista = ''

    for (var i = 1; i <= numAnos; i++) {
        lista += "Ano " + i + ": " + numeroChinchilas + " chinchilas\n";
        numeroChinchilas *= 3; // Triplica o número de chinchilas a cada ano
    }

    outResult.textContent = lista
}


const mostrarChinchilas = document.getElementById('btMostrarPrevisao')
mostrarChinchilas.addEventListener('click', mostrarPrevisao)
