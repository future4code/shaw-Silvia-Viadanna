import React from "react"


export default class Etapa1 extends React.Component {

// state = {
//     valorInputPessoa: "",
//     valorInputEmail: "",
//     valorInputIdade:"",
//     valorInputEscolaridade:"",
//   };

//   adicionaPessoa = () => {
//     const novaPessoa = {
//       nome: this.state.valorInputPessoa,
//       email: this.state.valorInputEmail,
//       idade: this.state.valorInputIdade,
//      escolaridade: this.state.valorInputEscolaridade,

//     };

//   }
//     onChangeInputPessoa = (event) => {
//             this.setState({ valorInputPessoa: event.target.value });
//     };

//     onChangeInputEmail = (event) => {
//       this.setState({ valorInputEmail: event.target.value });
//     };

//     onChangeInputIdade = (event) => {
//       this.setState({ valorInputIdade: event.target.value });
//     };

//     onChangeInputEscolaridade = (event) => {
//       this.setState({ valorInputEscolaridade: event.target.value });
//     };
  



    render() {
        return (
            <div>
            <h1>Etapa 1 - Dados Gerais</h1>
            <div>
              <p>1. Qual o seu nome?</p>
              <input
               
                placeholder={"1. Qual seu nome?"}
              />
               <p>2. Qual sua idade?</p>
              <input
                
                placeholder={"2. Qual sua idade?"}
              />
                <p>3. Qual seu email?</p>
              <input
           
            placeholder={"3. Qual seu email?"}
          />


          <p>Qual sua Escolaridade?</p>
          <select>
            <option value="EMI">Ensino Medio Incompleto</option>
            <option value="EMC">Ensino Medio Completo</option>
            <option value="ESI">Ensino Superior Incompleto</option>
            <option value="ESC">EnsinoSuperiorCompleto</option>
            </select>
            
        <p><p></p></p>
            </div>
          </div>

          )
     }
     }

     