// Exercícios de interpretação de código
//  1.  Será impressa numa linha, cada item da  array-lista, seguido do seu nr indice (0,1,2) e seguida da array completa. 
//  2.  Será impresso o nr de índice mais o nome do usuário
//  3.  Será impresso um novo array, que não contenha o usuário de apelido Chijo

// Exercícios de escrita de código

// 1.

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

// a) Crie um novo array que contenha apenas o nome dos doguinhos
const nomePets = pets.map((pets) => {
   return pets.nome
})
  console.log(nomePets)

//  b) Crie um novo array apenas com os cachorros salsicha

const petsSalsicha= pets.filter((pet,array) => {
    return pet.raca === "Salsicha"
 })
 
 console.log(petsSalsicha)

// c)  Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles.
//  A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

const petsPoodle = pets.filter((pet)=>{
       return pet.raca === "Poodle"
   }).map((pet)=>{
       console.log("Você ganhou um cupom de desconto de 10% para tosar o/a ", pet.nome)
   })

// 2 .Dado o seguinte array de produtos,
//  realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// a) Crie um novo array que contenha apenas o nome de cada item

const nomeProduto = produtos.map((produto)=>{
       console.log(produto.nome)
   })

   // b) Crie um novo array que contenha um objeto com o nome e o preço de cada item,
   //  aplicando 5% de desconto em todos eles

   const nomePrecoProduto = produtos.map((produto,valor)=>{
      const novoValor=produto.preco* 0.95
      console.log("nome: " , produto.nome," , preço:" ,novoValor.toFixed(2))
  })

//   c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

const bebidas= produtos.filter((produto,array) => {
       return produto.categoria === "Bebidas"
    })
    
    console.log(bebidas)

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

const prodYpe = produtos.filter((produto,array) => {
   return produto.nome.includes("Ypê")
})
console.log(prodYpe);


