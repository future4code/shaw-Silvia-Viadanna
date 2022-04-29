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

const CardTrip=styled.div`
  display:flex;
  border:1px solid black;
    border-radius: 10px;
  padding:4px;
  margin:4px;
  width:400px;
  justify-content:space-between;
  background-color:#fdfac7;
  &:hover{
      cursor:pointer;
      background-color: #fbea80;
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
export const TripDetailsPage  = () => {
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

  useEffect(() => {
    getTripsDetail()
  }, []);

  const handleSelectTrip = (event) => {
    setValueSelect(event.target.value);
    console.log("TRIP===",event.target.value)
  };
  const handleSelectId = (event) => {
    setId(event.target.value);
    console.log("ID===",event.target.value)
  };
  const getTripsDetail= () =>{
     console.log("LOgado")
    axios
      .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trip/${id}`,{
       headers: {
          auth:token
       }
      })
      .then(response => {
        setTripsDetail(response.data.tripsDetail);
        console.log(" DETALH+++",response.data.tripsDetail)
       })
      .catch((err) => {
        console.log("ERRO ID", err.response.data);
        });
    }
    const listaTrips=tripsDetail.map((listDetail) => {
      return(
      <div key={listDetail.id}>
            <p>Planeta: {listDetail.planet}</p>
            <p>Duração: {listDetail.durationInDays}</p>
            <p>Data: {listDetail.date}</p>
            <p>Nome:{listDetail.name}</p>
            <p>Descrição:{listDetail.description}</p>
            <p>Candidatos:{listDetail.candidates}</p>


      
      <p>====================================================</p>
      <p></p>
      
      </div>
      )
      }
        )
        console.log("LISTA====",listaTrips)
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
    <body>
      <Container>
       <Header><Title>LabeX </Title> </Header>
       <Botao onClick={()=>goBack(navigate)}>Voltar</Botao>
       </Container>
       <SubTitle>Viagens Disponíveis:</SubTitle>    
       <div name='valueSelect' onClick={handleSelectTrip} value={valueSelect}>
         <option value="" >Escolha uma Viagem</option>
         {selectOptions} <p></p>
         {listaTrips}
         </div><p></p>
     </body>
    )
  }
  







// export const TripDetailsPage = () => {
//   const navigate=useNavigate()
//   const [trips, setTrips] = useState([]);
//   const [id,setId]=useState()

//   // useProtectedPage()

//   useEffect(() => {
//     getTrips()
//   }, []);



  // const handleSelectId = (event) => {
  //   setId(event.target.value);
  // };

//   useEffect(() =>{

//     const token=localStorage.getItem("token")
// console.log("LOgado")
    

  // useEffect(() => {
  //   getTripsDetail()
  // }, []);

  // const getTripsDetail= () =>{
  //   axios
  //     .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/:${aluno}/trip/:${id}`)
  //     .then(res => {
  //       console.log(res.data.trips)
  //       setTrips(res.data.trips);
  //     })
  //     .catch((err) => {
  //       console.log(err.data);
  //     });
  //   }

  // })
//   const getTrips= () =>{                                                                      //3lwRu5F9SPnylZqILDvQ
                                               
// axios                                                      
// .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/:${aluno}/trips`)
// .then(res => {
//   setTrips(res.data.trips);
//   console.log( 'res==',res.data.trips)
// })
// .catch((err) => {
//   console.log("ERRO", err.data);
// });
//   }

// const listaTrips=trips.map((list) => {
//   return(
//   <div key={list.id}>
  
//   <p>Nome:{list.name}</p>
 
  
//   <p></p>
//   </div>
//   )
//     }
//     )  
    
  

//     return (
//       <Body>
//       <Container>
//        <Header><Title>LabeX </Title> </Header>
//        <Botao onClick={()=>goBack(navigate)}>Voltar</Botao>
      
//        </Container>
//        <SubTitle>Viagens Disponíveis:</SubTitle>    
//        {listaTrips}

      
//      </Body>
      
//     );
    
//     }
  
  
