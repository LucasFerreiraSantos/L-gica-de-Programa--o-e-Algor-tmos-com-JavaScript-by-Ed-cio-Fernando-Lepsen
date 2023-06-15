function exibirHora() {
    var inEntrada = document.getElementById('inEntrada')

    var horaBrasil = Number(inEntrada.value)

        if (inEntrada.value == '' || isNaN(horaBrasil)) {
            alert('Informe a hora no Brasil corretamente.')
            inEntrada.focus()
            return
        }

    var horaFranca = horaBrasil + 5
        if (horaFranca > 24) {
            horaFranca = horaFranca - 24
        }

    document.getElementById('outResposta').textContent = 'A Hora na França agora é ' + horaFranca.toFixed()
}

var btExibir = document.getElementById('btExibirHora')
btExibir.addEventListener('click', exibirHora)