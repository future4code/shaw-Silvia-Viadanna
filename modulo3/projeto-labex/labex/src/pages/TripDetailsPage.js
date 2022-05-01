import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate,useParams } from "react-router-dom";
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


const CardDetailTrip=styled.div`
 
  border:1px solid black;
    border-radius: 10px;
  padding:30px;
  margin:4px;
  width:400px;
  justify-content:space-between;
  background-color:#b5f83f;
  
`

const aluno="shaw-Silvia-Viadanna"

const useProtectedPage=()=>{
    const navigate=useNavigate()
    useEffect(() =>{
  
      const token=localStorage.getItem("token")
     
     
      if(token===null) {
        console.log("Não está logado")
        navigate("/login")
      }
        },[])
    }
export const TripDetailsPage  = () => {
  useProtectedPage()
  const token=localStorage.getItem("token")
 
  const navigate=useNavigate()
  const [tripsDetail, setTripsDetail] = useState({});
 

 const{id}=useParams()

  

  const getTripsDetail= (id) =>{
  
    axios
      .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trip/${id}`,{
       headers: {
          auth:token
       }
      })
      .then(response => {
       setTripsDetail(response.data.trip);
      })
      .catch((err) => {
        console.log("ERRO ID", err.response.data);
        });
    }
   
    useEffect(() => {
      getTripsDetail(id)
    }, [id]);
  
    return (
    <body>
      <Container>
       <Header><Title>LabeX </Title> </Header>
       <Botao onClick={()=>goBack(navigate)}>Voltar</Botao>
       </Container>
         <CardDetailTrip>
        id={id}<p></p>
    
       Planeta: {tripsDetail.planet}<p></p>
       Data: {tripsDetail.date}<p></p>
       Duração: {tripsDetail.durationInDays}<p></p>
      Nome: {tripsDetail.name}<p></p>
      Descrição: {tripsDetail.description}<p></p>
      Candidatos: tripsDetail.candidates[{}]        ??????????<p></p>
      {/* Candidatos: /*"{tripsDetail.candidates[{}]}"}<p></p> */}

      </CardDetailTrip>

     </body>
    )
  }
  