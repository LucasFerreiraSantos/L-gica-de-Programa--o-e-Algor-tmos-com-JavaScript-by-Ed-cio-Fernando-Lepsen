let erros = [];

// gera um número aleatório entre 1 e 100
let sorteado = Math.floor(Math.random() * 100) + 1
// declara constante com o número de chances
const chances = 6

function apostarNumero() {
    let inNum = document.getElementById('inNum')
    let numero = Number(inNum.value)

        while (numero == 0 || numero > 100 || isNaN(numero)){
            alert('O campo número deve ser informado.')
            inNum.focus()
            break
        }

    let outErros = document.getElementById('outErros')
    let outChances = document.getElementById('outChances')
    let outDica = document.getElementById('outDica')

    // se aposta do jogador for igual ao número sorteado
    if (numero == sorteado) {
        alert("Parabéns!! Você Acertou!!!");
        btApostar.disabled = true
        btJogar.className = "exibe"
        // troca status dos botões
        outDica.textContent = "Parabéns!! Número sorteado: " + sorteado;
    } else {
        // se número existe no vetor erros
        if (erros.indexOf(numero) >= 0) {
        alert('Você já apostou o número ' + numero + '. Tente novamente...')
        } else {
            erros.push(numero); // adiciona número ao vetor
            var numErros = erros.length; // obtém tamanho do vetor
            var numChances = chances - numErros; // calcula nº de chances
            // exibe nº de erros, conteúdo do vetor e nº de chances
            outErros.textContent = numErros + " (" + erros.join(", ") + ")";
            outChances.textContent = numChances;

        if (numChances == 0) {
            alert("Suas chances acabaram...");
            btApostar.disabled = true
            btJogar.className = "exibe"
            outDica.textContent = "Game Over!! Número Sorteado: " +
            sorteado;
        } else {
            // usa operador ternário (condicional) para mensagem da dica
            var dica = numero < sorteado ? "maior" : "menor";
            outDica.textContent = "Dica: Tente um número " + dica + " que "
            + numero + '.'
            }
        }
    }

    // Limpa campo de entrada e posiciona cursor neste campo
    inNum.value = "";
    inNum.focus(); 
}

let btApostar = document.getElementById('btApostar')
btApostar.addEventListener('click', apostarNumero)

function jogarNovamente() {
    location.reload(); // recarrega a página
}

let btJogar = document.getElementById("btJogar");
btJogar.addEventListener("click", jogarNovamente);