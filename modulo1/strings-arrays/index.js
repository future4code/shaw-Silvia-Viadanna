//     Exercícios de interpretação de código

// 1. Indique todas as mensagens impressas no console //

// a. undefinides, pois não atribuiu valor

// b. Null, pois assim foi definido

// c. 11, é a contagem de elementos na lista

// d. 3, busca na lista o índice 0

// e. 19, pois somou 0 a 19 

// f. 9, pois é o 6o elemento,  iniciando do Zero


// 2.  SUBI NUM ÔNIBUS EM MIRROCOS, 27


// Exercícios de escrita de código

//1.

const nomeDoUsuario = prompt("Digite seu nome")
const emailDoUsuario = prompt("Digite seu email")

console.log( "O e-mail ",  emailDoUsuario.trim(), " foi cadastrado com sucesso. Seja bem-vinda(o), ", nomeDoUsuario , " !")

// 2.


const comidasPreferidas = ["Pão", "Lazanha", "Queijo", "Macarrão", "Abobrinha"]
console.log (comidasPreferidas)

console.log ("Estas são minhas comidas preferidas : ")
console.log  (comidasPreferidas[0])
console.log  (comidasPreferidas[1])
console.log  (comidasPreferidas[2])
console.log  (comidasPreferidas[3])
console.log  (comidasPreferidas[4])

const comidaDoUsuario = prompt("Qual sua comida preferida?")
console.log ("Estas são  as minhas e do meu usuario, comidas preferidas : ")
console.log  (comidasPreferidas[0])
console.log  (comidaDoUsuario)
console.log  (comidasPreferidas[2])
console.log  (comidasPreferidas[3])
console.log  (comidasPreferidas[4])

// 3.

let listaDeTarefas= []
listaDeTarefas = prompt("Digite a sua 1a tarefa do dia:"), prompt ("Digite a sua 2a tarefa"), prompt("Digite sua 3a tarefa:")

console.log (listaDeTarefas)

let tarefaOk=prompt ("Qual você já fez? 1, 2 ou 3 ?")
//listaDeTarefas.splice(tarefaOk, 1)
//console.log(listaDeTarefas)

//preciso corrigir, porém, estou mais preocupada em conseguir enviar pelo Git, pois tive sérios problemas