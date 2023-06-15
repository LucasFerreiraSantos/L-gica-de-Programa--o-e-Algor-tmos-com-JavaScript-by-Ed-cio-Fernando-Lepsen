function repetirFruta() {
    let inFruta = document.getElementById('inFruta')
    let inNum = document.getElementById('inNum')
    let outResult = document.getElementById('outResult')

    let fruta = inFruta.value
    let num = Number(inNum.value)
        if (fruta == '' || num == 0 || num == isNaN(num)) {
            alert('Os campos devem ser preenchidos corretamente.')
            inFruta.focus()
            return
        }

    let listaFrutas = ''
        for (let i = 1; i < num; i++) {
            listaFrutas = listaFrutas + fruta + ' - '
        }
    
    outResult.textContent = listaFrutas
}

const repetir = document.getElementById('btRepetirFruta')
repetir.addEventListener('click', repetirFruta)