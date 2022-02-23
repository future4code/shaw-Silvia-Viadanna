// // 1 a.
// // Matheus Nachtergaele    
// // Virginia Cavendish
// // {canal: 'Globo', horario: '14h'}

// // 2a

// // nome: 'Juca', idade: 3, raca: 'SRD'
// //  nome: 'Juba', idade: 3, raca: 'SRD'
// //  nome: 'Jubo', idade: 3, raca: 'SRD'

// // 2b
// // altera/ corrige parte de uma constante ja definida

// // 3a
// // false
// // undefinied 

// // 3b 
// // backender foi declarado como false
// // undefinied  ( altura  não foi declarado)

// // Exercícios de escrita de código

// // 1a
// const usuario = {
//     nome: "Silvia", 
//     apelidos: ["Sil", "Silvinha", "Cris"]
// }
// function imprimeApresentacao(pessoa) {
// console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de:${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
// }
// imprimeApresentacao(usuario)

// //  1b

// const novoUsuario = {
//     ...usuario,
//       apelidos: ["Mar", "Viadanna", "Cristina"]
// }
// function imprimeApresentacao(pessoa) {
// console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de:${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
// }
// imprimeApresentacao(novoUsuario)

// // 2 

// const cadastroUm = {
//     nome: "Maria",
//     idade: 20,
//     profissao: "estudante"
// }

// const cadastroDois = {
//     nome: "José",
//     idade: 30,
//     profissao: "professor"
// }    

// function minhaFuncao(cadastroUm) {
//         const resultado = [cadastroUm.nome, cadastroUm.nome.length, cadastroUm.idade, cadastroUm.profissao, cadastroUm.profissao.length ]
//        return resultado
//   }
//     console.log(minhaFuncao(cadastroUm))

  

//     function minhaFuncao(cadastroDois) {
//         const resultado = [cadastroDois.nome, cadastroDois.nome.length, cadastroDois.idade, cadastroDois.profissao, cadastroDois.profissao.length ]
//        return resultado
//   }
//     console.log(minhaFuncao(cadastroDois))

// // 3

// const carrinho = [ ]

// const fruta1 ={
// nome: "Melão",
// disponibilidade:true

// }
// const fruta2 ={
// nome: "Manga",
// disponibilidade:true
// }
// const fruta3 ={
// nome: "Goiaba",
// disponibilidade:true
// }
// function carrinhoFruta (frutas) {
//  const frutasArray = carrinho.push(frutas)
// }

// carrinhoFruta (fruta1)
// carrinhoFruta (fruta2)
// carrinhoFruta (fruta3)

// console.log(carrinho)

// // Desafios

// // 1


// function pergunta() {
//  const nome1 = prompt ( " Entre com seu Nome:  ")
//  const idade1 = prompt ( " Entre com sua Idade:  ")
//  const profissao1 = prompt ( " Entre com sua Profissão: ")

// const pessoa= {
//     nome: nome1,
//     idade:idade1,
//     profissao:profissao1
//     }

//  console.log(pessoa)
// }
// pergunta()


//  // 2


//  const filme1 ={
//      nome: "Comer, Rezar, Amar",
//      ano: 1990
//  }

//  const filme2 = {
//      nome: "Como se fosse a primera vez",
//      ano: 2004
//  }
 
//  const n1 = filme1.ano
//  const n2 = filme2.ano

//  function comparar(n1,n2) {
// const compara = (n1< n2)
// return compara
//  }

//  function comparar1(n1,n2) {
//     const compara1= (n1==n2)
//         return compara1
//      }
//  const mostraTela = comparar(n1, n2)
//  const mostraTela1 = comparar1(n1, n2)
 
// console.log("O primeiro filme foi lançado antes do segundo?" , mostraTela)
// console.log("O primeiro filme foi lançado no mesmo ano do segundo?", mostraTela1)


// const minhaF=(obj)=> {
// let novoOb= { ...obj,vida:50}
// return novoOb
// }
// console.log(minhaF({nome:"Bulbassa", tipo:"Planta", vida:10}))

const minhaF=(arr)=> {
    let novoArr=[...arr].pop()
    console.log(" ARR " ,arr)
    console.log("novo : " , novoArr)
}

console.log(minhaF([1,2,3,4,5]))