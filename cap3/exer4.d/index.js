function formarTriangulo() {
    let inLadoA = document.getElementById('inLadoA')
    let inLadoB = document.getElementById('inLadoB')
    let inLadoC = document.getElementById('inLadoC')
    let outResposta1 = document.getElementById('outResposta1')
    let outResposta2 = document.getElementById('outResposta2')

    let ladoA = Number(inLadoA.value)
    let ladoB = Number(inLadoB.value)
    let ladoC = Number(inLadoC.value)

        if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
            alert('O número dos lados não pode ser negativo ou zero.')
            inLadoA.focus()
            return
        }

    outResposta1.textContent = ''
    outResposta2.textContent = ''

        if (ladoA + ladoB > ladoC && ladoB + ladoC > ladoA && ladoA + ladoC > ladoB) {
            outResposta1.textContent = 'Esses lados podem formar um triângulo.'
                if (ladoA === ladoB && ladoB === ladoC) {
                    outResposta2.textContent = 'Triângulo Equilátero.'
                } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
                    outResposta2.textContent = 'Triângulo Isósceles.'
                } else {
                    outResposta2.textContent = 'Triângulo Escaleno.'
                }
        } else {
            outResposta1.textContent = "Esses lados não podem formar um triângulo."
        }
}

const calcularLados = document.getElementById('btVerificarLados')
calcularLados.addEventListener('click', formarTriangulo)