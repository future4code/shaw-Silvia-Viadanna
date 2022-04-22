import React, { useEffect,useState} from "react";
import axios from "axios";

const aluno = "shaw-Silvia-Viadanna";

const Match=()=>{
    const [matchs,setMatchs]= useState([])

useEffect(()=>{
getMatches()
}, [matchs])

const getMatches=(props) => {

    axios
    .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:${aluno}/person`)
    .then ((res)=>{setMatchs(res.data.matchs)})
    .catch((err)=>{ console.log(err.response.data)
    })
}

return (
<div>


    <img src={matchs.photo} alt={matchs.name}/>
<p>{matchs.name}</p>
</div>
)




}

export { Match };



