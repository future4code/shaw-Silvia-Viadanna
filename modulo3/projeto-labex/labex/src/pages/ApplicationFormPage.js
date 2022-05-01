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
  `
const aluno="shaw-Silvia-Viadanna"

export const ApplicationFormPage = () => {
  const navigate=useNavigate()
  const [trips, setTrips] = useState([]);
  const [valueSelect, setValueSelect] = useState("");
  const [valueName, setValueName] = useState("");
  const [valueAge, setValueAge] = useState();
  const [valueApplicationText, setValueApplicationText] = useState("");
  const [valueProfession, setValueProfession] = useState("");
  const [valueCountry, setValueCountry] = useState("");
  const [id,setId]=useState()


  useEffect(() => {
    getTrips()
  }, []);
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
    
      .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips/:${id}/apply`,body)
      
      .then(response => {
       alert ("Viajante incluído com sucesso ")
      })
      .catch((err) => {
      })
     }
     const getTrips= () =>{
      axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`)
        .then(res => {
          setTrips(res.data.trips);
        })
        .catch((err) => {
          console.log(err.data);
        });
      }
  
    const selectOptions=trips.map((list) => {
  return(
  <option onChange={handleSelectId} value={list.id}>
  
  <p>{list.name}</p>
     </option>
  )
    }
    )
  

    
    return (
      <Body>

      <Container>
       <Header><Title>LabeX </Title> </Header>
       </Container>
       <SubTitle>Escolha sua Viagem</SubTitle> 
       <CardInscrTrip>
       <Select name='valueSelect' onChange={handleSelectTrip} value={valueSelect}>
         <option value="" >Escolha uma Viagem</option>
         {selectOptions} 
         </Select><p></p>
       <Input placeholder='Nome' type='text' onChange={handleNameInput} value={valueName}/><p></p>
       <Input placeholder='Idade' type='number' onChange={handleAgeInput} value={valueAge}/><p></p>

       <Input placeholder="Texto de Candidatura" type='text' onChange={handleApplicationTextInput} value={valueApplicationText}/>
<p></p>
       <Input placeholder="Profissão"type='text' onChange={handleProfessionInput} value={valueProfession}/><p></p><p></p>
       <Select name='country'onChange={handleSelectCountry} value={valueCountry}>
       <option >Selecione um país</option>
       <option value="Brasil" >Brasil</option>
	<option value="Afeganistão">Afeganistão</option>
	<option value="África do Sul">África do Sul</option>
	<option value="Albânia">Albânia</option>
	<option value="Alemanha">Alemanha</option>

  </Select>
  </CardInscrTrip>
<Botao onClick={()=>goBack(navigate)}>Voltar</Botao>

       
<Botao onClick={onSubmitApplyToTrips}>Me Interessei!</Botao>

       </Body>
    );
  };
  
  