import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinator";
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
const Input = styled.input`
    border-radius: 10px;
    border: 0px solid ;
    background-color:#d6ce8b;
    padding: 5px;
    width:400px;
`;

const Select = styled.select`
    border-radius: 10px;
    border: 0px solid ;
    background-color:#d6ce8b;
    padding: 5px;
    width:400px;
`;


const aluno="shaw-Silvia-Viadanna"


export const TripDetailsPage = () => {
  const navigate=useNavigate()
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    getTrips()
  }, []);

  const getTrips= () =>{
    axios
      .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`)
      .then(res => {
        console.log(res.data.trips)
        setTrips(res.data.trips);
      })
      .catch((err) => {
        console.log(err.data);
      });
    }

 



  useEffect(()=>{
                                                                        //3lwRu5F9SPnylZqILDvQ
                                                                        //   ${valueSelect}
axios                                                      
.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/:${aluno}/trip/:3lwRu5F9SPnylZqILDvQ`
, {
  headers:{
    auth:`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRtU…0NDJ9.YiA3kfz16Q-51xGDzp2BSSilysh3jrbN_zRwsuMqSF0`
  }
}
)
.then(res => {
  console.log("OK", res.data.trips)
})
.catch((err) => {
  console.log("ERRO", err.data);
});
},[])


const listaTrips=trips.map((list) => {
  return(
  <div key={list.id}>
  
  <p>Nome:{list.name}</p>
  
  <p>====================================================</p>
  <p></p>
  </div>
  )
  }
    )
   
    return (
      <Body>
      <Container>
       <Header><Title>LabeX </Title></Header>
       <SubTitle>Viagens Disponíveis:</SubTitle>    
       {listaTrips}

       <Botao onClick={()=>goBack(navigate)}>Voltar</Botao>
       </Container>

       <SubTitle>Candidatos Pendentes</SubTitle>    
       <SubTitle>Candidatos Aprovados</SubTitle>    


       </Body>

      
    );
  };
  
