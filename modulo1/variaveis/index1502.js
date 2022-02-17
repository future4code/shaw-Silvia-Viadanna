// Exercícios de interpretação de código //
//  1o
// console.log("a. ", resultado)//  
//a. false
// console.log("b. ", resultado) //
//b. false
// console.log("c. ", resultado)//
//c.  true
// console.log("d. ", typeof resultado)//
//d. undefinied

// 2o
//Será impresso a concatenação dos números

//3o
//  Inverter o Let com Const

// Exercícios de escrita de código
// 1o
const idade = prompt("Digite sua idade")
const idadeAmigo = prompt("Digite a idade de seu amigo")
let difIdade=idade-idadeAmigo
 console.log("Sua idade é maior do que a do seu melhor amigo?", idade > idadeAmigo, "Sim nossa diferença de idade é de " , difIdade, " anos")


 // 2o
 const nurPar = prompt("Digite um número par: ")
console.log (" O Resto é : ",  nurPar%2)
// Digitando nr PAR :O resto sempre é zero, pois numeros pares são divisiveis por 2 
// Digitando nr IMPAR :O resto sempre é UM, pois numeros ímpares ao dividir  por 2 , RESTA 1

//  3o
const suaIdade = prompt(" Quantos anos você tem:")
 console.log("Você tem: ", suaIdade*12, " Mêses! ") 

 console.log("Você tem: ", suaIdade*12*30, " Dias! ") 
 console.log("Você tem: ", suaIdade*12*30*24, " Horas! ") 

 //4o


const primeiroNr = Number(prompt(" Digite um número:"))
const segundoNr = Number(prompt(" Digite outro número:"))
 console.log("O primeiro numero é maior que segundo?", primeiroNr>segundoNr) 
 console.log("O primeiro numero é igual ao segundo?", primeiroNr === segundoNr) 
 const resultado=primeiroNr%segundoNr
 console.log("O primeiro numero é divisível pelo segundo?", !resultado>0) 
 const resultadoa=segundoNr%primeiroNr
 console.log("O segundo numero é divisível pelo primeiro?", !resultadoa>0) 


