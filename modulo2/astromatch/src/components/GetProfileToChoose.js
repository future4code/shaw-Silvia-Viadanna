import React, { useEffect,useState} from "react";
import "./styles.css";
import axios from "axios";

const GetProfileToChoose =(props) => {

const [id,setId]=useState("")
const [age,setAge]=useState(0)
const [name,setName]=useState("")
const [photo,setPhoto]=useState(null)
const [bio,setBio]=useState("")
}

useEffect(()=>{

const getProfileToChoose=()=>{
  axios
  .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person`)

.then((res) => {
setName(response.data.result)
  console.log(res)
  
})
.catch((err) => {
   console.log(err)
  alert("Ocorreu um erro!");
})
}

}, (""))





 export default GetProfileToChoose
