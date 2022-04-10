import React from 'react';


 
    class App extends React.Component {
      state = {
        pessoas: [
          {
            nome: "",
            mensagem: ""
          }
        ],

        valorInputNome: "",
        valorInputMensagem:"",
       };

       adicionaPessoa = () => {

        const novaPessoa = {
          nome: this.state.valorInputNome,
          mensagem: this.state.valorInputMensagem
        };

        const novoPessoas = [...this.state.pessoas, novaPessoa];

        this.setState({ 
          pessoas: novoPessoas,
          valorInputNome: "",
          valorInputMensagem:""
        
        });
  };

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };
  
  render() {

  const listaDeComponentes = this.state.pessoas.map((pessoa) => {
    return (
      <p>
        {pessoa.nome} - {pessoa.mensagem}

        
      </p>
);
});

console.log(listaDeComponentes)
return (

<div>

<h1>WHATSLAB</h1>

    <input
        value={this.state.valorInputNome}
        onChange={this.onChangeInputNome}
        placeholder={"Nome"}
      />
      <input
        value={this.state.valorInputMensagem}
        onChange={this.onChangeInputMensagem}
        placeholder={"Mensagem"}
      />
      <button onClick={this.adicionaPessoa}>ENVIAR</button>
    
    
    <b>{listaDeComponentes}</b>
  </div>
  );
  }

  }
  
  export default App;
