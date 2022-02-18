// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
    
    let soma = num1+num2
    return soma
    }
    const num1 = Number(prompt(`Digite seu numero 1`))
    const num2 = Number(prompt(`Digite seu numero 2`))
    console.log((num1,num2))


  

// EXERCÍCIO 0B
function imprimeMensagem() {
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura,largura) {
  const area = altura*largura
  return area
 }

  const altura= Number(prompt(`Digite a altura: `))
  const largura = Number(prompt(`Digite a largura: `))
  const mostraTela = calculaAreaRetangulo(altura,largura)

  console.log(mostraTela)   


// EXERCÍCIO 02
function imprimeIdade() {
  const idade = anoAtual-anoDeNascimento
  return idade

}
const anoAtual= Number(prompt(`Digite o ano em que estamos: `))
  const anoDeNascimento = Number(prompt(`Digite o ano que você nasceu: `))
  const mostraTelaidd = imprimeIdade(anoAtual,anoDeNascimento)

  console.log(mostraTelaidd) 



// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso/(altura*altura)
  return imc   

}
const peso= Number(prompt(`Digite seu peso: `))
  const altura = Number(prompt(`Digite sua altura: `))
  const mostraTelaimc = calculaIMC(peso,altura)

  console.log(mostraTelaimc) 


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
    const msg = ("Meu nome é" , nome , ", tenho " ,idade, " anos  e o meu email é " ,email, ".")
  return msg
  }
  const nome= prompt(`Digite seu nome: `)
  const idade = Number(prompt(`Digite sua idade: `))
  const email = prompt (`Digite seu email: `)
  const mostraTelamsg = imprimeInformacoesUsuario(nome,idade,email)
  
  console.log("Meu nome é" , nome , ", tenho " ,idade, " anos  e o meu email é " ,email, ".")
  



// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}