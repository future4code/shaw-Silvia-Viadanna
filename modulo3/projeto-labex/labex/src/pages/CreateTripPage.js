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
export const CreateTripPage = () => {
  const navigate=useNavigate()

  
  
  
    return (
      <div>
      <Container>
       <Header><Title>LabeX </Title> </Header>
       </Container>
       <SubTitle>Criar Viagem</SubTitle> 
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
      
       <Botao onClick={()=>goBack(navigate)}>Voltar</Botao>

       <Botao>CRIAR</Botao> 
    </div>
    );
  };
  
  