var valorConta = parseFloat(prompt('Informe o valor total da conta: '))
var quantidadePagantes = parseFloat(prompt('Informe quantas pessoas irão dividir a conta: '))
var totalPagarMembros = valorConta / quantidadePagantes
alert('O valor total da conta é ' + valorConta + ' e será dividida entre ' + quantidadePagantes + ' amigos. Com isso, cada um deverá pagar o valor de ' + totalPagarMembros + '. Agradecemos a preferência!')