import React, { useEffect,useState} from "react";
import "./styles.css";
import axios from "axios";
import styled from "styled-components";
import { Clear } from "./pages/Clear";
import {Match}  from "./components/Match";

   
    const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    heigth:60vh;
    border: 1px solid gray;
    justify-content: center;
    width: 500px;
    margin: 0 auto;

  `
  const Header = styled.div `
  display: flex;
         justify-content: space-between;
     
       
    `

const Card = styled.div`
  display: flex;
   flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const Img = styled.img`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 60vh;

`;


const Footer = styled.div `
display: flex;
width:100%;
 justify-content: space-between;
     `


     const Button = styled.button `
     background-color:red;
     height: 40px;

     `
const aluno = "shaw-Silvia-Viadanna";


function App() {
  const [profile, setProfile] = useState({});


  useEffect(() => {
    getProfileToChoose();
  }, []);

  const getProfileToChoose = () => {
    axios
      .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:${aluno}/person`)

      .then((res) => setProfile(res.data.profile))
      .catch((err) => console.log(err));
  };

  const postChoosePerson = (id, boolean) => {

    const body = {
      id: id,
      choise: boolean
    };
    axios

      .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:${aluno}/choose-person`, body)

      .then((response) => {
        getProfileToChoose();
        console.log("res=====", profile.id, boolean);
      })

      .catch((err) => console.log(err.response));
  };




  return (





    <Container>
      <Header> <h2>Astro Match</h2><p></p>
        <p> <Button onClick={Match}>➤❤</Button></p>
      </Header>
      <Card>
        {console.log(profile)}
        <Img src={profile.photo} />
        <p>eu sou {profile.name},tenho {profile.age} anos!</p>
        <p>...{profile.bio}</p>
      </Card>
      <Footer>


        <Button onClick={() => postChoosePerson(profile.id, false)}> ✘ </Button>
        <Button onClick={() => postChoosePerson(profile.id, true)}>❤</Button>
        <Button onClick={Clear}>Limpar ❤</Button>

      </Footer>
      <div>

        
      </div>

    </Container>


  );
}

export default App;