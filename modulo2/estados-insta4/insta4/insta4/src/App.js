import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state = {

    usuarios: [
      {
        nomeUsuario:"paulinha",
        fotoUsuario:"https://picsum.photos/50/50",
        fotoPost:"https://picsum.photos/200/150"
      },

      {
        nomeUsuario:"galho",
        fotoUsuario:"https://picsum.photos/id/1006/50/50",
        fotoPost:"https://picsum.photos/id/1016/200/150"
      },

      {
        nomeUsuario:"auauaua",
          fotoUsuario:"https://picsum.photos/id/237/50/50",
          fotoPost:"https://picsum.photos/id/1015/200/150"
      }
    ]
  };


  render() {

    const listaDeComponentes = this.state.usuarios.map((usuario) => {
      return (

        <MainContainer>
        <Post>
           {usuario.nomeUsuario}   
           {usuario.fotoUsuario} 
           {usuario.fotoPost}
      </Post>
        
      </MainContainer>
      );
    });

    return (
         {listaDeComponentes}
         
    );
  }
}


export default App;
