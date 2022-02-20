// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A

// function soma(num1, num2) {
  
//   // implemente sua lógica aqui
// }

// // EXERCÍCIO 0B
// function imprimeMensagem() {
//   // implemente sua lógica aqui
//   }

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
 function calculaAreaRetangulo() {
 

    const altura = Number(prompt("Digite a altura: "))
    const largura= Number(prompt("Digite a largura: "))


 console.log(altura*largura)   

 }

//  EXERCÍCIO 02
 function imprimeIdade() {
  const anoAtual = Number(prompt("Digite o ano atual: "))
  const anoNasc = Number(prompt("Digite o ano que voce nasceu: "))
  console.log(anoAtual-anoNasc) 

 }

 

//  EXERCÍCIO 03
// function calculaIMC(peso, altura) {
//   const imc = peso/(altura*altura)
//   return imc   

// }
// // const peso= Number(prompt(`Digite seu peso: `))
//   const altura = Number(prompt(`Digite sua altura: `))
//   const mostraTelaimc = calculaIMC(peso,altura)

//   console.log(mostraTelaimc) 



//    EXERCÍCIO 04
// function imprimeInformacoesUsuario() {
    
//   const nome= prompt("Digite seu nome: ")
//   const idade = Number(prompt("Digite sua idade: "))
//   const email = prompt ("Digite seu email: ")


//  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
// }




//   EXERCÍCIO 05
// function imprimeTresCoresFavoritas() {
//   const cor1=prompt("Digite sua 1a cor preferida")
//   const cor2=prompt("Digite sua 2a cor preferida")
//   const cor3=prompt("Digite sua 3a cor preferida")
// const cores=[cor1,cor2,cor3]

// console.log(cores)


//}

// EXERCÍCIO 06
// function retornaStringEmMaiuscula(string) {
//     const novoNome = string.toUpperCase()
//     return novoNome
//    }


//    EXERCÍCIO 07
// function calculaIngressosEspetaculo(custo, valorIngresso) {
//     let venda=(custo/valorIngresso)
//     return venda 
    
// }
    

//   EXERCÍCIO 08
// function checaStringsMesmoTamanho(string1, string2) {
//   const tam1 = string1.length
//   const tam2 = string2.length
//   const condicao = tam1===tam2
//   return condicao
// }


//  EXERCÍCIO 09
// function retornaPrimeiroElemento(array) {
//   return array[0]
//   }
//   console.log(retornaPrimeiroElemento(["Laranja", "Banana", "Maçã"]))





//    EXERCÍCIO 10
// function retornaUltimoElemento(array) {
  
//   nrelementos = array.length
//   return array[nrelementos-1]

// }
// console.log(retornaUltimoElemento(["Laranja", "Banana", "Maçã"]))


//       EXERCÍCIO 11
// function trocaPrimeiroEUltimo(array) {
  
//   let prim= array[0]
//    nrelementos = array.length
//   let ulti= array[nrelementos-1]
// let aux= ulti
// let ult= prim  
// array.pop()  // exclui ultimo elemento
// array.push(ult) // adiciona ultimo elemento
// array.shift()  // exclui 1o elemento
// array.unshift(aux) // adidiona 1o elemento

// return array

// }

//console.log(trocaPrimeiroEUltimo([aux, "Banana", prim]))


//    OOOOOKKKKKKK  EXERCÍCIO 12
// function checaIgualdadeDesconsiderandoCase(string1, string2) {
  
//   string1=string1.toLowerCase()
//   string2=string2.toLowerCase()

//   const condicao = string1 === string2
// return condicao
// }

// EXERCÍCIO 13
// function checaRenovacaoRG() {
  
//    anoAtual = Number(prompt(" Em que ano estamos? "))
//   anoNasc = Number(prompt(" Em que ano você nasceu? "))
//    anoEmiss = Number(prompt(" Qual ano de emissão? "))
 
//    idade= anoAtual-anoNasc
//  idadeRg= anoAtual-anoEmiss
//   renova=( idade <= 20 && idadeRg >= 5) || ( (idade > 20 && idade <= 50) && idadeRg >= 10)|| (idade > 50 && idadeRg >= 15)

//   console.log (renova)
//  }

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
return (ano % 400===0 || ano % 100 !==0 && ano % 4 ===0)

}

 //EXERCÍCIO 15
 function checaValidadeInscricaoLabenu() {
  const maiorIdade= prompt( "Você tem mais de 18 anos?")
  const ensinoMedio= prompt( "Você possui ensino médio completo?")
   const disponExcl = prompt ( "Você possui disponibilidade exclusiva durante os horários do curso?")
   


   if(maiorIdade==="sim" && ensinoMedio==="sim" && disponExcl==="sim")  { result=true} else {result=false}
   
   console.log(result)

  }

 
 