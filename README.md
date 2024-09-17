# Gerador_carteira_btctestnet

Código do exercício prático da aula "Criando e Utilizando a Sua Carteira de Criptomoedas" da DIO.

Tive alguns problemas ao seguir os passos do instrutor e tive que alterar algumas coisas no código: 

1-tive que alterar o const path de m/49 (usado para endereços P2SH) para m/44 (para ser compatível com endereços P2PKH)

2-nas importações, tive que retirar o require e usar import

3-no package.json tive que incluir "type": "module"

4-tive que mudar o tipo de carteira na linha 25 para p2wpkh

5-inclui algumas coisas no log para visualizar se o endereço estava válido na testnet

6-o site blockchain.com não está exibindo mais informações da testnet, usei o https://blockstream.info/

7-por mais que eu tenha importado corretamente a privatekey no electrum, ele não exibiu as trasações que recebi de faucets, transações confirmadas no site blockstream.info

