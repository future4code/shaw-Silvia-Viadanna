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
  
const maiorNumero=Math.max(num1,num2)
const menorNumero=Math.min(num1,num2)
const diferenca=maiorNumero-menorNumero
if (maiorNumero % menorNumero === 0){
     maiorDivisivelPorMenor="true"
}
    return ("maiorNumero:",maiorNumero,"maiorDivisivelPorMenor:", maiorDivisivelPorMenor,"diferenca:",diferenca)

}


// EXERCÍCIO 08


function retornaNPrimeirosPares(n) {
            let numerosPares = [];
        for (let i = 0; numerosPares.length < n; i++) {
            if (i % 2 == 0) {
                numerosPares.push(i);
            }
        }
        return numerosPares;
    }
    
    
// EXERCÍCIO 09
 function classificaTriangulo(ladoA, ladoB, ladoC) {
if(ladoA===ladoB && ladoA===ladoC) {
    triangulo="Equilátero"
}
else if ( ladoA===ladoB || ladoA===ladoC || ladoB===ladoC) {
    triangulo="Isósceles"
}
else{ triangulo="Escaleno"}

return triangulo
}



// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    arrayOrdenado=array.sort((a,b) => 
    a-b)
    segundoMaior=arrayOrdenado[array.length-2]
    segundoMenor=arrayOrdenado[1]
    novoArray=(segundoMaior,segundoMenor)
    return novoArray

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const novaPessoa = {...pessoa, nome:"ANÔNIMO"}
   return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasAutorizadas= pessoas.filter((pessoa,array) => {
        return pessoa.altura >= 1.5 && pessoa.idade>14 && pessoa.idade<60
     })
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasAutorizadas= pessoas.filter((pessoa,array) => {
        return pessoa.altura < 1.5 && pessoa.idade<14 && pessoa.idade>60
     })
     
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
// const saldoAtual=contas.map((conta)=> {
//     return(...conta,saldoTotal: -conta.compras[0]-conta.compras[1]-conta.compras[2])
//     })

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    return array.sort((a,b) => 
    a-b)
    
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}