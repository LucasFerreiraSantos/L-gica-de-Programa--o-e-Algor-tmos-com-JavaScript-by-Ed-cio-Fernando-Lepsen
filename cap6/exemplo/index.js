var anuncio = prompt("Anúncio: ")
var tam = anuncio.length // obtém o tamanho
var numPalavras = 0 // inicializa contador

for (var i = 0; i < tam; i++) {
    if (anuncio.charAt(i) == " ") {
    numPalavras++;
    }
}
alert("Anúncio: " + anuncio + "\nNº Palavras: " + (numPalavras + 1))