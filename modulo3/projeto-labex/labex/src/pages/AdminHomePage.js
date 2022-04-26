import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
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
const ListaViagens=styled.div`
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
const AdminHomePage = () => {
  
  
    return (
      
      <Body>
      <Container>
       <Header><Title>LabeX </Title> </Header>
         
           <Botao>Voltar</Botao>
       <Botao>Quero me inscrever!</Botao>
      
       </Container>
       <SubTitle>Painel Administrativo</SubTitle>  
       <Botao>Voltar</Botao>
       <Botao>Criar Viagem!</Botao> 
       <Botao>Logout</Botao>  
 <ListaViagens>Marte <Botao>X</Botao></ListaViagens>
 <ListaViagens>Lua<Botao>X</Botao></ListaViagens>
 <ListaViagens>Via Láctea<Botao>X</Botao></ListaViagens>
      </Body>

    );
  };
  
  export default AdminHomePage
  