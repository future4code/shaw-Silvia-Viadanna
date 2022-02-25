// Exercícios de interpretação de código

// 1. esta somando o valor de i ao valor, passando 5 vezes pelo for.
//    será impresso 10, soma de 0,1,2,3,4 ( valor)


// 2.a  19,21,23,25, 27 e 30. 
// Ou seja serão impressos no console os números maiores que 18
//  2.b atravé da função lista.indexOf(numero)
//  const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
//  for (let numero of lista) {
//    if (numero > 18) {
//          console.log(numero , " indice: " , lista.indexOf(numero))
//      }
//  }

// 3. Serão impressas 4 linhas, a 1a com 1 *, a 2a **, a 3a *** e a 4a ****

// Exercícios de escrita de código

// 1.
let num=0
let numero = Number(prompt("Quantos Pets você tem?"))
if(numero===0) { console.log( "Que pena! Você pode adotar um pet!")}
console.log(`Você tem: ${numero} pets`)
let nomes=newFunction()
while ( numero > num ){
  
   let nome = prompt("Digite o nome ")
   
   nomes = nomes + ' ' + nome
   num=num+1
}
console.log(nomes)

function newFunction() {
    return ""
}

// 2.
// 2a imprime cada um dos valores do array original.
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

let listaCompleta = "";

function montalista(array){

   for(let numero of array){
      listaCompleta = listaCompleta + ' ' + numero
   }
   console.log(" Impressao lista original: ",listaCompleta)
}
montalista(array)


// 2b  imprime cada um dos valores do array original divididos por 10
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

let listaCompleta = "";

function montalista(array){

   for(let numero of array){
       numero=numero/10
      listaCompleta = listaCompleta + ' ' + numero
   }
   console.log(" Impressao dividida por 10: ",listaCompleta)
}
montalista(array)

// 2c crie um novo array contendo, somente, os números pares do array original e imprima esse novo array

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

let listaCompleta = "";

function montalista(array){

   for(let numero of array){
       numeropar=numero%2
       if(numeropar===0) {
      listaCompleta = listaCompleta + ' ' + numero
   }
}
   console.log(" Impressao numeros pares: ",listaCompleta)
}
montalista(array)


const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

let listaCompleta = "";

function montalista(array){

   for(let numero of array){
      
      listaCompleta = listaCompleta + ' ' + numero
   
}
   console.log(" Impressão com índice: ",listaCompleta)
}
montalista(array)


// 2d  "O elemento do índex i é: numero". Depois, imprima este novo array.

const numeroArray = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
iNumero = 0

function encontraI(array){
   for(let i = 0; i < array.length; i++){
      console.log( "O elemento de indice ", i,  "" , numeroArray[i])
      
   }
}

encontraI(numeroArray)

// 2e. imprima no console o maior e o menor números contidos no array original
const numeroArray = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
maiorNumero = 0

function encontraMaior(array){
   for(let i = 0; i < array.length; i++){
      if(array[i] > maiorNumero){
         maiorNumero = array[i]
      }
    }

   console.log(`O maior número é ${maiorNumero}`)
}

encontraMaior(numeroArray)
//// PRECISA CORRIGIR    *****************
const numeroArray = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
menorNumero = 10

function encontraMenor(array){
   for(let i = 0; i < array.length; i++){
      if(array[i] < menorNumero){
         menorNumero = array[i]
      }
    }

   console.log(`O menor número é ${menorNumero}`)
}

encontraMenor(numeroArray)


// Desafio
// 1.
nr=0
 let numero = Number(prompt("Digite o número que você pensou:"))
console.log( " Vamos Jogar!", numero)

let novoNumero = Number(prompt("Digite o número que você acha que pensei:"))

while( novoNumero!=numero && nr<5){


    let novoNumero = Number(prompt("Digite o número que você acha que pensei:"))

    nr=nr+1
    if(novoNumero==numero) { 
        console.log("Acertou!!" , numero)}
    if(numero>novoNumero) { 
        console.log("O número chutado foi:", novoNumero )
        console.log("Errrrrrrrou, é maior")}

        if(numero<novoNumero) { 
            console.log("O número chutado foi:", novoNumero )
            console.log("Errrrrrrrou, é menor")}

     
}