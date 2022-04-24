import React, { useEffect,useState} from "react";
import axios from "axios";
import styled from "styled-components";


const aluno = "shaw-Silvia-Viadanna";

const Match=()=>{
    
    const [matches,setMatches]= useState([])

useEffect(()=>{
getMatches()
}, [matches])



const getMatches=() => {

    axios
    .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:${aluno}/person`)
    .then ((res)=>{setMatches(res.data.matches)
        console.log(res.data.matches)}
    )
    .catch((err)=>{ console.log(err.response.data)
    })
}

return (
<div>

{console.log(matches)}
  <img src={matches.photo}/> {matches.name}
 
  
</div>
)




}

export { Match };



