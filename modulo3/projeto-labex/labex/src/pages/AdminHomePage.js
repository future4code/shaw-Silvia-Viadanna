import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goBack,goToCreateTripPage } from "../routes/coordinator";

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
    margin: 1rem;
    padding: 5px;
    color:white;
`;
const BotaoListaViagens=styled.button`
  display:flex;
  border: 0px solid ;
  border-radius: 10px;
  padding:4px;
  margin:4px;
  width:400px;
  justify-content:space-between;
  background-color:#d6ce8b;
  &:hover{
      cursor:pointer;
      background-color: #dffda7;
  }
`
;

const CardTrip=styled.div`
  display:flex;
  border:1px solid black;
    border-radius: 10px;
  padding:4px;
  margin:4px;
  width:400px;
  justify-content:space-between;
  background-color:#b5f83f;
  &:hover{
      cursor:pointer;
      background-color: green;
  }
`

const aluno="shaw-Silvia-Viadanna"

  const useProtectedPage=()=>{
    const navigate=useNavigate()
    useEffect(() =>{
  
      const token=localStorage.getItem("token")
      console.log("Logado:",token)
      

      if(token===null) {
        console.log("Não está logado")
        navigate("/login")
      }
        },[])
    }
export const AdminHomePage = () => {
  useProtectedPage()
  
  const token=localStorage.getItem(token)
  const navigate=useNavigate()
  const [trips, setTrips] = useState([]);
  const [id,setId]=useState()
  const [valueSelect, setValueSelect] = useState("");
  const [tripsDetail, setTripsDetail] = useState([]);
  
  useEffect(() => {
    getTrips()
  }, []);

  const handleSelectTrip = (event) => {
    setValueSelect(event.target.value);
    console.log("TRIP===",event.target.value)
  };
  const handleSelectId = (event) => {
    setId(event.target.value);
    console.log("ID===",event.target.value)
    navigate(`/detalheViagem/${event.target.value}`)
  };
    
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
    const selectOptions=trips.map((list) => {
      return(
  <CardTrip> <option onClick={handleSelectId} value={list.id}>
   <p>{list.name}</p>
     </option></CardTrip>
)
}  )
    return (
      <div>
      <Container>
       <Header><Title>LabeX </Title> </Header>
         
       <Botao onClick={()=>goBack(navigate)}>Voltar</Botao>
       <Botao onClick={()=>goToCreateTripPage(navigate)}>Criar Viagem</Botao>
</Container>
       <SubTitle>Viagens Disponíveis:</SubTitle>    
       <div name='valueSelect' onClick={handleSelectTrip} value={valueSelect}>
         <option value="" >Escolha uma Viagem</option>
         {selectOptions} <p></p>
         
         </div><p></p>
     </div>
    )
  }
  
    
  
  