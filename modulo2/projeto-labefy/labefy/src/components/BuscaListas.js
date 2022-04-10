import React from "react";
import axios from "axios";
import styled from "styled-components";
import AdicionarMusica from "./AdicionarMusica";

const headers = {
    headers: {
      Authorization: "shaw-Silvia-Viadanna"
    }
  };


  const CardPlayList=styled.div`
  display:flex;
  border:1px solid black;
    border-radius: 10px;

  padding:4px;
  margin:4px;
  width:400px;
  justify-content:space-between;
  background-color:#fdfac7;
  &:hover{
      cursor:pointer;
      background-color: #fbea80;
  }
  `

 

  export default class BuscaListas extends  React.Component {

    state={
        playlists:[],
        pagina: 1,
        idPlayList: "",
    }
    componentDidMount() {

        this.mostrarPlayList()
    }



mostrarPlayList=()=>{
    const url="https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists" 
axios
.get(url,headers)

.then((res) => {
    // console.log(res)
   this.setState({playlists: res.data.result.list})
   
  })

  .catch((err) => {
//    console.log(err)
    alert("Ocorreu um erro!");
    alert(err);

  })
}

deletarPlayList=(id)=>{
    const url=`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    axios
    .delete(url,headers)


.then((res) =>{
    alert("PlayList Removida!")
    this.mostrarPlayList()
}
)

.catch((err) => {
    console.log(err.response.data)
    alert("Não foi possível remover!")

})
}

trocarPaginaDetalhes = (playListId) => {
    if (this.state.pagina === 1) {
      this.setState({
        pagina: this.state.pagina + 1,
        idPlayList: playListId
      });
    } else {
      this.setState({
        pagina: this.state.pagina - 1,
        idPlayList: ""
      });
    }
  };





    render() {
        

        const listaPlayList=this.state.playlists.map((list) =>{

            return    <CardPlayList key={list.id}
            onClick={() => this.trocarPaginaDetalhes(list.id)}
          >
                {list.name} 
            <button onClick={ () => this.deletarPlayList(list.id)}>X</button>
            </CardPlayList>
        }
        )

        return (
            <div>
                 {this.state.pagina === 1 ? (
                     <div>
          <h3>Lista PlayList:</h3>
          *clique sobre o nome da PlayList para adicionar música!
                  {listaPlayList}
                    </div>
        ) : (

                        <div>


                        <AdicionarMusica
            playListId={this.state.idPlayList}
           
          />
                        </div>
           
        )
            }

            </div>

        )
    }
}
