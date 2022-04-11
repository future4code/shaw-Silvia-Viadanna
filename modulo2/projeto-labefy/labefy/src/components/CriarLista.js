import React from "react";
import axios from "axios";

const headers = {
    headers: {
      Authorization: "shaw-Silvia-Viadanna"
    }
  };

export default class CriarLista extends  React.Component {

    state={
        nome:"",
      
    }

inputNome= (event)=>{
    this.setState({nome:event.target.value})
}



cadastrar=()=>{
console.log(this.state)
const url="https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const body={
    "name": this.state.nome,
}

axios
.post(url,body,headers)

.then((res) => {
    console.log(res)
   alert (`PlayList incluída com sucesso `)
   this.setState({nome:""})

  })

  .catch((err) => {
   console.log(err.response.data.message)
    alert(err.response.data.message);
    this.setState({nome:""})

  });
}


    render() {

        return (
            <div>  
             <h4>Incluir Play</h4>

                <input
                placeholder="PlayList:"
                value={this.state.nome}
                onChange={this.inputNome}
                />


                <button onClick={this.cadastrar}>Incluir Playlist</button>
                
            </div>
        )
    }
}