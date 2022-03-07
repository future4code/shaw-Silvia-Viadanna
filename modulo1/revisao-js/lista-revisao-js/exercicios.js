// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   let tamanhoArray=array.length
   return tamanhoArray
}


// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  let arrayInvertido=array.slice(0).reverse();
  return arrayInvertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a,b) => 
    a-b)
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
     
    let numerosPares = []
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
          numerosPares.push (array[i])
        }
    }
    return numerosPares
}


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numerosParesQuadrado= []
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
          numerosParesQuadrado.push (array[i]*array[i])
        }
            
    }
    return numerosParesQuadrado
 }
 

// EXERCÍCIO 06


function retornaMaiorNumero(array) {
   return Math.max.apply(Math,array)
   
}
// EXERCÍCIO 07

function retornaObjetoEntreDoisNumeros(num1, num2) {
let resultadoMaior=Math.max(num1,num2)
let resultadoMenor=Math.min(num1,num2)
return resultadoMaior
}



// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}