import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goBack,goToLogin } from "../routes/coordinator";


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



const CardLogin=styled.div`
  border:1px solid black;
  border-radius: 10px;
  padding:30px;
  margin:4px;
  width:400px;
  justify-content:space-between;
  background-color:#b5f83f;
  
`
const aluno="shaw-Silvia-Viadanna"

export const LoginPage = () => {
  const navigate=useNavigate()
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const onChangeEmail=(event)=>{
 setEmail(event.target.value)
}
 
const onChangePassword=(event)=>{
  setPassword(event.target.value)
 }


 const onSubmitLogin = () => {
console.log(email,password)

 const body={
  email:email,
  password:password,
}

axios
.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/login`,body)
.then(response => {
  console.log("OK",response.data)
  window.localStorage.setItem("token",response.data.token)
  navigate("/paginaAdmin")
   }
   )
  
  .catch((err) => {
    console.log("ERR===" ,err.response.data)
  })
 }
      
  return (
  <div>
  <Container>
   <Header><Title>LabeX </Title> </Header>
   </Container>
   <SubTitle>Login</SubTitle> 
   <CardLogin>
   <Input placeholder="e-mail" type="email" value={email} onChange={onChangeEmail} required/><p></p>
   <Input type="password" placeholder="Senha" value={password} onChange={onChangePassword} required/><p></p>
   </CardLogin>
   <Botao onClick={()=>goBack(navigate)}>Voltar</Botao>

   <Botao onClick={onSubmitLogin}>Entrar</Botao>
  </div>
    );
}
  
