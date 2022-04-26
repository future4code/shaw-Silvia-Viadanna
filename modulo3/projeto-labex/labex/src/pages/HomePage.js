import React, { useState, useEffect } from "react";
import axios from "axios";
// import {Body,Header,Botao,Container,Title} from "./Style"
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




const HomePage  = () => {

  
    return (

      <Body>
      <Container>
       <Header><Title>LabeX </Title></Header>
       <Botao>Ver Viagens</Botao>
       <Botao>Área Administração</Botao>
       <Botao>Login</Botao>
       
       </Container>
       </Body>
    );
  };
  
  export default HomePage