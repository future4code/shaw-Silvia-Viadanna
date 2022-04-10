import React from "react";
import axios from "axios";
import styled from "styled-components";

const headers = {
    headers: {
      Authorization: "shaw-Silvia-Viadanna"
    }
  };


  const CardUsuario=styled.div`
  display:flex;
  border:1px solid black;
  padding:4px;
  margin:4px;
  width:250px;
  justify-content:space-between;
  `
export default class BuscarListas extends  React.Component {

    state={
        playlists:[]
    }
    componentDidMount() {

        this.mostrarUsuarios()
    }



mostrarUsuarios=()=>{
    const url="https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists" 
axios
.get(url,headers)

.then((res) => {
    console.log(res)
   this.setState({playlists: res.data})
   alert("Sucesso!");
  })

  .catch((err) => {
   console.log(err)
    alert("Ocorreu um erro!");

  })
}

deletarUsuario=(id)=>{
    const url=`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    axios
    .delete(url,headers)


.then((res) =>{
    alert("Usuário(a) removido!")
    this.mostrarUsuarios()
}
)

.catch((err) => {
    console.log(err.response.data)
    alert("Não foi possível remover!")

})
}


    render() {
        const listaUsuarios=this.state.playlists.map((user) =>{

            return    <CardUsuario key={user.id}>{user.name} 
            <button onClick={ () => this.deletarUsuario(user.id)}>X</button>
            </CardUsuario>
        }
        )

        return (
            <div>
                    <button onClick={this.props.irCadastro}>Ir Para Cadastro</button>
                        <h3>Usuários:</h3>
                        {listaUsuarios}
            </div>
        )
    }

} 