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
const ApplicationFormPage = () => {
  
  
    return (
      <Body>
      <Container>
       <Header><Title>LabeX </Title> </Header>
       </Container>
       <SubTitle>Escolha sua Viagem</SubTitle> 
       <Select >
         <option>Escolha uma Viagem</option>
         <option>1</option>
         <option>2</option>
         <option>3</option>

         </Select><p></p>
       <Input placeholder="Nome"></Input><p></p>
       <Input placeholder="Idade"></Input><p></p>
       <Input placeholder="Texto de Candidatura"></Input><p></p>
       <Input placeholder="Profissão"></Input><p></p>
       <Select >
         <option>Escolha um País</option>
         <option>1</option>
         <option>2</option>
         <option>3</option>

         </Select><p></p>
<p></p>
       <Botao>Voltar</Botao>
       <Botao>CONFIRMAR</Botao> 
      </Body>
    );
  };
  
  export default ApplicationFormPage
  