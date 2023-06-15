function verificarNumPrimo() {
    let inNum = document.getElementById('inNum')
    let outResposta = document.getElementById('outResposta')

    let num = Number(inNum.value)
        if (num == 0 || isNaN(num)) {
            alert("Número Inválido...");
            inNum.focus();
            return;
        }    

    let numDivisores = 0
        for (let i = 1; i <= num; i++) {
            if(num % i == 0) {
                numDivisores++;
            }
        }

    if (numDivisores == 2) {
        outResposta.textContent = num + ' É primo.'
    } else {
        outResposta.textContent = num + ' Não é Primo.'
    }
}

const verificar = document.getElementById('btVerificar')
verificar.addEventListener('click', verificarNumPrimo)