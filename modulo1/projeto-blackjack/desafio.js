/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
    console.log("Boas vindas ao jogo de Blackjack!")

    if(confirm("Quer iniciar uma nova rodada?")) {
      let cartaUsuario1 = comprarCarta()
      let cartaUsuario2 = comprarCarta()
         if(cartaUsuario1.texto.includes("A") && cartaUsuario2.texto.includes("A") ) {
            let cartaUsuario1 = comprarCarta();
            let cartaUsuario2 = comprarCarta();
          }
          
    somaUsuario=cartaUsuario1.valor + cartaUsuario2.valor

      let cartaPc1 = comprarCarta()
      let cartaPc2 = comprarCarta()

        if(cartaPc1.texto.includes("A") && cartaPc2.texto.includes("A") ) {

         let cartaPc1 = comprarCarta();
         let cartaPc2 = comprarCarta();

        }
    somaPc=cartaPc1.valor + cartaPc2.valor
    cartaPc= cartaPc1.texto + cartaPc2.texto
       cartaUsuario= cartaUsuario1.texto + cartaUsuario2.texto

    while(confirm(`Suas cartas são: ${cartaUsuario} A carta revelada do computador é ${cartaPc1.texto}
      \n Deseja comprar mais uma carta?`)&& somaUsuario<21)  {
         let novaCarta=comprarCarta()         
          cartaUsuario=cartaUsuario + novaCarta.texto
          somaUsuario=somaUsuario+novaCarta.valor
    }

    while(somaPc<21 && somaUsuario<=21)  {
         let novaCartaPc=comprarCarta()         
          cartaPc=cartaPc + novaCartaPc.texto
          somaPc=somaPc+novaCartaPc.valor
      }
   
   console.log(`Usuario - cartas: ${cartaUsuario} - pontuação: ${somaUsuario}`)

   console.log("Computador - cartas: ", cartaPc, " - pontuação: " , somaPc)
      
if(somaUsuario<=21 && somaPc <somaUsuario ||(somaPc>21)) {
      console.log("O usuário ganhou!")
   } else if(somaUsuario<somaPc && somaPc<=21 ||(somaUsuario>21)) {    console.log("O Computador ganhou!")
}
   else {
      console.log("Empate")
   }
         } else {
            console.log("O jogo acabou")
         }
         
         console.log("O jogo acabou")