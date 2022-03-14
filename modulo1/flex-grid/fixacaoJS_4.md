```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
      contador=0
 
 let tamanho = arrayDeNumeros.length
 for (let i = 0; i < tamanho; i++) {
     let posicao = arrayDeNumeros[i]
     if (posicao === numeroEscolhido) {
         contador += 1
     }
   else { contador===0
   }
}
 if(contador>0) { msg=`O número ${numeroEscolhido} aparece ${contador}x`}
 else { msg="Número não encontrado"}
    
     
return msg
    }```