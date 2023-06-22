function montarDica() {
    let inFruta = document.getElementById("inFruta")
    let outDica = document.getElementById("outDica")
    
    let fruta = inFruta.value.toUpperCase();

        if (fruta == '') {
            alert('Não foi inserida nenhuma fruta.')
            inFruta.focus()
            return
        }
    
    var resposta = fruta.charAt(0); // letra inicial da fruta
    var estrelas = "*"
    var tam = fruta.length; // obtém tamanho da fruta
    
        for (var i = 1; i < tam; i++) {
            if (fruta.charAt(i) == fruta.charAt(0)) {
            resposta += fruta.charAt(0)
            } else {
                resposta += "_"
            }
            estrelas += "*"
        }

    outDica.textContent = resposta
    inFruta.value = estrelas
}

const btMontar = document.getElementById("btMontar");
btMontar.addEventListener("click", montarDica);