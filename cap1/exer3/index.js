var input = parseFloat(prompt('Qual o preço do produto? Aqui na Lucas store temos duas opções de pagamento. Sendo: com 10% de desconto no Ávista ou dividido em 3x sem juros.'))
var porcentagem = input * (10/100)
var avista = input - porcentagem
var dividido = input / 3
alert('O valor do produto é ' + input + ' se você optar por pagar Ávista o valor terá um desconto de ' + porcentagem + ' e passará a ser ' + avista + ' , porém, se optar em dividir esse valor em 3x ficará em três parcelas de ' + dividido + '.')