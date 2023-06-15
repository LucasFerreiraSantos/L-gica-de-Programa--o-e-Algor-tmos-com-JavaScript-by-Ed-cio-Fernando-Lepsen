function calcularPesoIdeal() {
    var inName = document.getElementById('inName')
    var rbMasculino = document.getElementById('rbMasculino')
    var rbFeminino = document.getElementById('rbFeminino')
    var inAltura = document.getElementById('inAltura')
    
    var nome = inName.value
    var masculino = rbMasculino.checked
    var feminino = rbFeminino.checked
    var altura = Number(inAltura.value)

        if (nome == '' || (masculino == false && feminino == false)) {
            alert('Por favor, infome o nome e selecione o sexo...')
            nome.focus()
            return
        }

        if (altura == 0 || isNaN(altura)) {
            alert('Por favor, informe a altura corretamente...')
            altura.focus()
            return
        }

        if (masculino) {
            var peso = 22 * Math.pow(altura, 2)
        } else {
            var peso = 21 * Math.pow(altura, 2)
        }

        document.getElementById('outPesoIdeal').textContent = nome + ' seu peso ideal é ' + peso.toFixed(3) + 'kg.'
}

function limparCampos() {
    document.getElementById('inName').value = ''
    document.getElementById('rbMasculino').checked = false
    document.getElementById('rbFeminino').checked = false
    document.getElementById('inAltura').value = ''
    document.getElementById('outPesoIdeal').textContent = ''

    document.getElementById('inName').focus()
}

var calcularPeso = document.getElementById('btCalcular')
calcularPeso.addEventListener('click', calcularPesoIdeal)

var btLimpar = document.getElementById('btLimparCampos')
btLimpar.addEventListener('click', limparCampos)