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
    padding: 5px;
    width:400px;
`;
const Select = styled.select`
    border-radius: 10px;
    border: 0px solid ;
    padding: 5px;
    width:400px;
`;
const CardInscrTrip=styled.div`
  border:1px solid black;
  border-radius: 10px;
  padding:30px;
  margin:4px;
  width:400px;
  justify-content:space-between;
  background-color:#b5f83f;
  `;
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

export const CreateTripPage = () => {

  const navigate=useNavigate()
  const [trips, setTrips] = useState([]);
  const [valueSelect, setValueSelect] = useState("");
  const [valueName, setValueName] = useState("");
  const [valueAge, setValueAge] = useState();
  const [valueApplicationText, setValueApplicationText] = useState("");
  const [valueProfession, setValueProfession] = useState("");
  const [valueCountry, setValueCountry] = useState("");
  const [id,setId]=useState()


  const handleSelectTrip = (event) => {
    setValueSelect(event.target.value);
  };
  const handleNameInput = (event) => {
    setValueName(event.target.value);
  };
  const handleAgeInput = (event) => {
    setValueAge(event.target.value);
  };
  const handleApplicationTextInput = (event) => {
    setValueApplicationText(event.target.value);
  };
  const handleProfessionInput = (event) => {
    setValueProfession(event.target.value);
  };
  const handleSelectCountry = (event) => {
    setValueCountry(event.target.value);
  };
  const handleSelectId = (event) => {
    setId(event.target.value);
  };


  useEffect(() => {
    onSubmitApplyToTrips()
  }, {});

  const onSubmitApplyToTrips= () =>{
      const body ={
      name: valueName,
      age: valueAge,
      applicationText: valueApplicationText,
      profession: valueProfession,
      country: valueCountry,
      
  }                                                                                    
    axios   
    
      .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`,body)
      
      .then(response => {
       alert ("Viagem incluída com sucesso ")
      })
      .catch((err) => {
      })
     }
     
  
    return (
      <div>
      <Container>
       <Header><Title>LabeX </Title> </Header>
       </Container>
       <SubTitle>Criar Viagem</SubTitle> 
       <CardInscrTrip>
       <Input placeholder="Nome"></Input><p></p>
       <Select >
         <option>Escolha um Planeta</option>
         <option>1</option>
         <option>2</option>
         <option>3</option>

         </Select><p></p>
       
       <Input type="date" ></Input><p></p>
       <Input placeholder="Descrição da Viagem"></Input><p></p>
       <Input placeholder="Duração em Dias"></Input><p></p>
       </CardInscrTrip>
      
       <Botao onClick={()=>goBack(navigate)}>Voltar</Botao>

       <Botao>CRIAR</Botao> 
    </div>
    );
  };
  
  