/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * ""
 */
// O JOGO SIMPLIFICADO

    console.log("Boas vindas ao jogo de Blackjack!")

    if(confirm("Quer iniciar uma nova rodada?")) {
      let cartaUsuario1 = comprarCarta();
      let cartaUsuario2 = comprarCarta();
          
    somaUsuario=cartaUsuario1.valor + cartaUsuario2.valor
console.log("Usuario - cartas: ", cartaUsuario1.texto , cartaUsuario2.texto , " - pontuação: " , somaUsuario)

      let cartaPc1 = comprarCarta();
      let cartaPc2 = comprarCarta();
          
    somaPc=cartaPc1.valor + cartaPc2.valor
console.log("Computador - cartas: ", cartaPc1.texto , cartaPc2.texto , " - pontuação: " , somaPc)

if(somaUsuario>somaPc) {
   console.log("O usuário ganhou!")
} else if(somaUsuario<somaPc) {    console.log("O Computador ganhou!")
}
else {
   console.log("Empate")
}
         } else {
            console.log ("O jogo acabou")
         }

   









































    //     console.log("Boas vindas ao jogo de Blackjack!")
//     if( confirm ("Quer iniciar uma nova rodada?"))  {
//         let cartaPc = []
//     cartaPc.push(comprarCarta())
//     cartaPc.push(comprarCarta())
//     let cartaUsuario=[]
//     cartaUsuario.push(comprarCarta())
//     cartaUsuario.push(comprarCarta())
//     while(cartaPc[0].texto.includes("A")&& cartaPc[1].texto.includes("A")){
//       cartaPc[0] = comprarCarta() 
//        cartaPc[1] = comprarCarta()  
//    }
//     while(cartaUsuario[0].texto.includes("A")&& cartaUsuario[1].texto.includes("A")) {
//     cartaUsuario[0] = comprarCarta() 
//     cartaUsuario[1] = comprarCarta()  
//     }
//     let pontoPc =cartaPc[0].valor + cartaPc[1].valor
//     let pontoUsuario =cartaUsuario[0].valor + cartaUsuario[1].valor
//     let loop=true
    

// let resultado=""
// let mensagemUsuario= ""
// let mensagemPc=""

// if(pontoUsuario>21 || pontoPc<=21 && pontoPc > pontoUsuario) {

// resultado= "O computador ganhou"
// }

// else if(pontoUsuario===pontoPc) {
//    resultado= "Deu Empate"

// }
// else { 
//    resultado= " O Usuáro ganhou" 
// }
//  for (carta of cartaUsuario) {
//     mensagemUsuario += `${carta.texto}`
//  }
//  for (carta of cartaPc) {
//     mensagemPc += `${carta.texto}`

//  }
//     console.log ("Usuário-Cartas = ", mensagemUsuario , " POntuação=  "  , pontoUsuario ,  "\n Computador - Cartas = "  , mensagemPc ,  "Pontuação = ", pontoPc  , "\n" ,resultado)

// } else 
// {   console.log ( " O jogo acabou")
// }
   
   
   
   
   






