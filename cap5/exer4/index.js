let criancas = []

function adicionarCriancas() {
    let inNome = document.getElementById('inNome')
    let inIdade = document.getElementById('inIdade')

    let nome = inNome.value
    let idade = Number(inIdade.value)
        while (nome == '' || idade == 0 || isNaN(idade)) {
            alert('Informe corretamente os dados...')
            inNome.focus()
            break
        }

    // adiciona dados ao vetor de objetos
    criancas.push({ nome: nome, idade: idade });
    inNome.value = ''
    inIdade.value = ''
    inNome.focus()

    listarCriancas()
}

function listarCriancas() {
    // verifica se vetor está vazio
    if (criancas.length == 0) {
        alert("Não há crianças na lista")
        return
    }
    
    let lista = ''
        for (let i = 0; i < criancas.length; i++) {
            lista += criancas[i].nome + ' - ' + criancas[i].idade + ' anos.\n'
        }
    // exibe a lista (em uma única instrução)
    document.getElementById("outLista").textContent = lista
}

function resumirLista() {
    if (criancas.length == 0) {
        alert("Não há crianças na lista");
        return;
    }

    let copia = criancas.slice()
    // ordena o vetor copia pela idade
    copia.sort(function (a, b) { return a.idade - b.idade });

    let resumo = ''

    let auxiliar = copia[0].idade
    let nomes = []

        for (let i = 0; i < copia.length; i++) {
            if (copia[i].idade == auxiliar) {
                nomes.push(copia[i].nome)
            } else {
                // senão, adiciona ao resumo, dados e nomes inseridos em nomes[]
                resumo += auxiliar + " ano(s): " + nomes.length + " criança(s) - ";
                resumo += (nomes.length / copia.length * 100).toFixed(2) +
                "%\n";
                resumo += "(" + nomes.join(", ") + ")\n\n";
                auxiliar = copia[i].idade; // obtém a nova idade na ordem
                nomes = []; // limpa o vetor dos nomes
                nomes.push(copia[i].nome); // adiciona o primeiro da nova idade
            }
        }

    // adiciona os nomes da última idade ordenada
    resumo += auxiliar + " ano(s): " + nomes.length + " criança(s) - ";
    resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n";
    resumo += "(" + nomes.join(", ") + ")\n\n";
    // altera conteúdo de outLista
    document.getElementById("outLista").textContent = resumo
        
}

const btAdicionar = document.getElementById('btAdicionar')
btAdicionar.addEventListener('click', adicionarCriancas)

const btListar = document.getElementById('btListar')
btListar.addEventListener('click', listarCriancas)

const brResumir = document.getElementById('brResumir')
brResumir.addEventListener('click', resumirLista)