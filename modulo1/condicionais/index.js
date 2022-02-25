// Exercícios de interpretação de código

//1 a
// Solicita que o usuário digite um numero transforma a string em número , pelo Number. Testa se o nr é par
//1b 
// para os números pares
// 1c
//para numeros impares
// 
// 2a Imprime no console o preço da fruta selecionada
// 2b O preço da fruta  Maçã  é  R$  2.25
// 2c O preço da fruta  Pêra  é  R$  5.5  ...a  mesma mensagem que exibida com o break

// 3a Está solicitando a entrada de um número
// 3b Se for nr 10, a mensagem será "Esse número passou no teste" e msg erro: mensagem is not defined
//   Se for -10, apenas msg de erro: mensagem is not defined

//3c O console.log(mensagem) apresenta msg de erro: mensagem is not defined, pois 
//está fora do bloco/escopo {}


// Exercícios de escrita de código

1
const idade = Number(prompt("Digite sua idade:"))
if(idade>=18) { 
  console.log ("Você pode dirigir!!!")
}
else { 
  console.log("Você não pode dirigir!")
}

2
const periodo = prompt("Qual periodo você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)")
if (periodo==="M"){
  console.log ("Bom dia")
} 
else if(periodo==="V") {
  console.log ("Boa tarde")
} 
else if (periodo==="N") {
  console.log ("Boa noite")
}

3

const periodoEst = prompt("Qual periodo você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)")
switch(periodoEst) {
      case 'M':
        console.log ("Bom dia!")
        break
      case 'V':
          console.log ("Boa tarde!")
        break
      case 'N':
        console.log ("Boa Noite!")
        break
    }

4

const genero = prompt("Qual gênero do filme deseja?")
const preco = Number(prompt("Qual valor do ingresso?"))

if(genero==="fantasia" && preco<15) {
console.log ("Bom filme!")
} else {
  console.log ("Escolha outro filme :(")
}

Desafios

1
const genero = prompt("Qual gênero do filme deseja?")
const preco = Number(prompt("Qual valor do ingresso?"))

if(genero==="fantasia" && preco<15) {
  console.log ("Bom filme!")
  let lanche = prompt("Qual petisco você vai comprar (pipoca, chocolate, doces?")
console.log (`Aproveite o seu ${lanche}`) 
} else {
  console.log ("Escolha outro filme :(")
}

2

const nome = prompt("Nome Completo: ")
const tipo = prompt(" Tipo de jogo: IN (internacional) DO (doméstico) ")
const etapa = prompt(" Etapa:SF (semi-final), DT (decisão de terceiro lugar) ou FI (final)")
const categoria= prompt(" Categoria: 1, 2, 3 ou 4")
const quantidade= Number(prompt("Quantidade de ingressos:"))
let valorUnitario=0








