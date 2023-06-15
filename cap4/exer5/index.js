function preencherEstrelas() {
    let inNum = document.getElementById('inNum')
    let outResult = document.getElementById('outResult')

    let num = Number(inNum.value)
        if (num == 0 || isNaN(num)) {
            alert("Número Inválido...");
            inNum.focus();
            return;
        }
    
    let estrelas = ''
        for (let i = 1; i <= num; i++) {
            if (i % 2 == 1) {
                estrelas = estrelas + '*'
            } else {
                estrelas = estrelas + '-'
            }
        }

    outResult.textContent = estrelas
}

const preencher = document.getElementById('btPreencher')
preencher.addEventListener('click', preencherEstrelas)
