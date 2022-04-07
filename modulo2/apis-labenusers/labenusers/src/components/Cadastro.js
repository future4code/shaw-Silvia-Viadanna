import React from "react";
import axios from "axios";

const headers = {
    headers: {
      Authorization: "shaw-Silvia-Viadanna"
    }
  };

export default class Cadastro extends  React.Component {

    state={
        nome:"",
        email:"",
    }

inputNome= (event)=>{
    this.setState({nome:event.target.value})
}

inputEmail= (event)=>{
    this.setState({email:event.target.value})
}

cadastrar=()=>{
// console.log(this.state)
const url="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
const body={
    "name": this.state.nome,
    "email": this.state.email
}

axios
.post(url,body,headers)

.then((res) => {
    // console.log(res)
   alert ("Cadastrado(a) com Sucesso! ")
   this.setState({nome:"",email:""})

  })

  .catch((err) => {
//    console.log(err.response.data.message)
    alert(err.response.data.message);
    this.setState({nome:"",email:""})

  });
}


    render() {

        return (
            <div>
                    <button onClick={this.props.irUsuarios}>Ir Para Usuários</button>
                        <h3>Cadastro</h3>

                <input
                placeholder="Nome:"
                value={this.state.nome}
                onChange={this.inputNome}
                />

<input
                placeholder="Email:"
                value={this.state.email}
                onChange={this.inputEmail}
                />
                <button onClick={this.cadastrar}>Cadastrar</button>
            </div>
        )
    }
}
