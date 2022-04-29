import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate} from "react-router-dom";
import { goBack,goToApplicationFormPage } from "../routes/coordinator";

const Body=styled.body`  
    color: #000;
    font-family: Arial, Serif;
    font-size: 16px;
    background-color:#ffffc2;
    width:100%;
  `;
const Container = styled.div`
    display: flex;
    align-items: space-between;
    margin: 0 auto;
`;
const Title = styled.h1`
    font-size:  1.5em;
 `;

 const SubTitle = styled.h2`
    font-size:  1.2em;
    color:#288f00;
    display: flex;
    flex-direction: row;
    justify-content: center;

 `;
const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin:auto;
    flex-direction: row;
    align-items: center;
    height: 70px;
    font-size:30px;
    color:#288f00;
`;
const Botao = styled.button`
    background: #288f00;
    border: 0px solid ;
    border-radius: 10px;
    align-content: space-between;
    margin: 1rem;
    padding: 5px;
    color:white;
`;

const aluno="shaw-Silvia-Viadanna"

export const ListTripsPage  = () => {
  const navigate=useNavigate()
  const [trips, setTrips] = useState([]);


  useEffect(() => {
    getTrips()
  }, []);

  const getTrips= () =>{
    axios
      .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`)
      .then(res => {
        setTrips(res.data.trips);
        console.log( 'res==',res.data.trips)

      })
      .catch((err) => {
        console.log(err.data);
      });
    }

  const listaTrips=trips.map((list) => {
return(
<div key={list.id}>

<p>Nome:{list.name}</p>
<p>Descrição:{list.description}</p>
<p>Planeta: {list.planet}</p>
<p>Duração: {list.durationInDays}</p>
<p>Data: {list.date}</p>

<p>====================================================</p>
<p></p>
</div>
)
}
  )
    return (
    <body>
      <Container>
       <Header><Title>LabeX </Title> </Header>
       <Botao onClick={()=>goBack(navigate)}>Voltar</Botao>
       <Botao onClick={()=>goToApplicationFormPage(navigate)}>Quero me inscrever!</Botao>
      
       </Container>
       <SubTitle>Viagens Disponíveis:</SubTitle>    
       {listaTrips}

       Cadastrar:
     </body>
    )
  }
  
  