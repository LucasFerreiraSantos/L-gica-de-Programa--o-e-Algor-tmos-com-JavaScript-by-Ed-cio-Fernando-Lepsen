let pacientes = []

function addPacientes() {
    let inPaciente = document.getElementById('inPaciente')
    let outListaPacientes = document.getElementById('outListaPacientes')

    let paciente = inPaciente.value
        while (paciente == '') {
            alert('Nome do paciente não informado.')
            inPaciente.focus()
            break
        }

    pacientes.push(paciente)

    let lista = ''

    // percorre os elementos do vetor
    for (i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    }

    outListaPacientes.textContent = lista
    inPaciente.value = ''
    inPaciente.focus()
}

function urgenciaPacientes() {
    let outAtendimento = document.getElementById('outAtendimento')

    var urgente = pacientes.pop()

    outAtendimento.textContent = 'Em atendimento: ' + urgente + '.'
}

function atenderPacientes() {
    let outAtendimento = document.getElementById('outAtendimento')
    
    var atender = pacientes.shift()

    outAtendimento.textContent = 'Em atendimento: ' + atender + '.'
}

const adicionarPacientes = document.getElementById('btAdicionar')
adicionarPacientes.addEventListener('click', addPacientes)

const urgencia = document.getElementById('btUrgencia')
urgencia.addEventListener('click', urgenciaPacientes)

const atender = document.getElementById('btAtender')
atender.addEventListener('click', atenderPacientes)

console.log(pacientes)