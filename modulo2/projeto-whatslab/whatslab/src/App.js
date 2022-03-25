import React from 'react';
import styled from 'styled-components';


const DivPai = styled.div`
  // display: flex;
  // justify-content: center;
  // flex-direction: column;
  // align-items: center;
  `

  const Estilizacao=styled.div`
  // display: flex;
  // justify-content: center;
  // flex-direction: column;
  // align-items: center;
  `

  const EstiloMain=styled.main`
  // display: flex;
  // justify-content: center;
  // flex-direction: column;
  // align-items: center;
  `

 
    class App extends React.Component {

      state = {
        pessoas: [
          {
            nome: "",
            mensagem: "",
          }
        ],

        valorInputNome: "",
        valorInputMensagem:"",
       };

       adicionaPessoa = () => {

        const novaPessoa = {
          nome: this.state.valorInputPessoa,
          mensagem: this.state.valorInputEmail
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
return (
  <DivPai>
    <Estilizacao>


 <EstiloMain>

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
    
    </EstiloMain>
    <div>{listaDeComponentes}</div>
  </Estilizacao>
  </DivPai>
  );
  }

  }
  
  export default App;
