function converterHoras() {
    let tituloFilme = document.getElementById("inTitulo").value
    let duracao = document.getElementById("inDuracao").value
    let hora = Math.floor(duracao / 60)
    let minutos = duracao % 60

    document.getElementById('outTitulo').textContent = 'O filme ' + tituloFilme + '.'
    document.getElementById('outResposta').textContent = 'Contém ' + duracao + ' minutos.' + ' Desse modo, tem ' + hora + ' horas e ' + minutos + ' minutos.'
}

let converter = document.getElementById('btConverter')
converter.addEventListener('click', converterHoras);