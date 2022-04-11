import React from "react";
import styled from "styled-components";
import axios from "axios";

const headers = {
  headers: {
    Authorization: "shaw-Silvia-Viadanna"
  }
};

// const CardMusica=styled.div`
//   display:flex;
//   border:1px solid black;
//     border-radius: 10px;

//   padding:4px;
//   margin:4px;
//   width:400px;
//   justify-content:space-between;
//   background-color:#fdfac7;
//   &:hover{
//       cursor:pointer;
//       background-color: #fbea80;
//   }
//   `

export default class AdicionarMusica extends React.Component {

  state = {
    listarMusica:[],
    nome:"",
    artista:"",
    urlmusica:"",
    }

//   componentDidMount() {

//     this.mostrarMusicas()
// }

// mostrarMusicas=()=>{
//   const url=`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playListId}/tracks`
//   axios
//   .get(url,headers)

// .then((res) => {
//     console.log(res)
//    this.setState({listarMusica: res.data})
   
//   })

//   .catch((err) => {
//    console.log(err)
//     alert(err);

//   })
// }

  
inputNome= (event)=>{
  this.setState({nome:event.target.value})
}
inputArtista= (event)=>{
  this.setState({artista:event.target.value})
 }
inputUrlMusica= (event)=>{
  this.setState({urlmusica:event.target.value})
 }

  incluirMusica=()=>{

    const url=`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playListId}/tracks` 
    
    const body={
      "name": this.state.nome,      
      "artist": this.state.artista,
      "url": this.state.urlmusica,
  }
  
  axios
  .post(url,body,headers)


  .then((res) => {
     alert ("Música incluída com sucesso ")
     console.log(res)
     console.log("NOME===" ,this.state.nome)
     this.setState({nome:""})
     this.setState({artista:""})
     this.setState({urlmusica:""})
     })
  
    .catch((err) => {
      alert(err.response.data.message);
      this.setState({nome:""})
      this.setState({artista:""})
      this.setState({urlmusica:""})
      });
      
  }
 
  render() {
    

  // const listaDeMusicas=this.state.listarMusica.map((list) =>{

  //   return    <CardMusica key={list.id}>{list.name} 
        
  //   </CardMusica>
  // });

     


    return (
      <div>
            <h4>Incluir Musica</h4>

          <input
          placeholder="Nome:"
          value={this.state.nome}
          onChange={this.inputNome}
          />
         <input
          placeholder="Artista:"
          value={this.state.artista}
          onChange={this.inputArtista}
          />
          <input
          placeholder="Link/URL da música :"
          value={this.state.urlmusica}
          onChange={this.inputUrlMusica}
          />
          <button onClick={this.incluirMusica}>Incluir Música</button>


          <h3>Musicas:</h3>
           {/* {listaDeMusicas} */}
      </div>
  )
 
    }


}