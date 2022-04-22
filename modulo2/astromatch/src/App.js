import React, { useEffect,useState} from "react";
import "./styles.css";
import axios from "axios";
import styled from "styled-components";
import { Match } from "./pages/Match";
import { Clear } from "./pages/Clear";


// const Container = styled.div `
//     border: 1px solid gray;
//     width: 300px;
//     margin-bottom: 10px;
//     justify-content: center;
//     align-items: center;
//     `
    const Container = styled.div`
    
    justify-content: center;
    border: 1px solid gray;
    width: 300px;
    margin-bottom: 10px;
    border-radius: 10px;
    box-shadow: 3px 3px 4px 2px grey;
  `;
  const Header = styled.div `
    height: 40px
       border: 1px solid gray;

    display: flex;
    align-items: center;
    padding-left: 10px;
    justify-content: space-between;

    `

const Card = styled.div`
  display: flex;
  
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;

const Botao= styled.button`
  width: 20%;
  margin-right: 5px;
`;
const Footer = styled.div `
height: 40px;
display: flex;
align-items: center;
padding: 0 10px;
justify-content: space-between;
 `

export const aluno = "shaw-Silvia-Viadanna";


function App () {
const [perfil,setPerfil]=useState({})

useEffect(()=>{
  getProfileToChoose()
},[])

const getProfileToChoose=()=>{
  axios
  .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:${aluno}/person`)

.then((res) => setPerfil(res.data.profile))
.catch((err) => console.log(err))
}

const postChoosePerson=(id,boolean)=> {
const body={id:id,choise:boolean}
  axios
.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:${aluno}/choose-person`,body)
.then(()=>getProfileToChoose)
.catch((err)=>console.log(err.response))
}

return(
  <Container>
    <Header> Astro Match
<Botao onClick={(Match)}>Ver Matches</Botao>

    </Header>
  <Card>
  {console.log(perfil)}
  <Img src={perfil.photo}/>
  <p>eu sou {perfil.name},tenho {perfil.age} anos!</p>
  <p>...{perfil.bio}</p>
  
  <Footer>
    
    <Match key={perfil.id} onClick={() =>postChoosePerson(perfil.id,true)}>S2</Match>
    <button onClick={() =>postChoosePerson(perfil.id,false)}> X </button>
    <Clear> Limpar Matches</Clear>
    </Footer>
    </Card>
</Container>
 
)
}

export default App;