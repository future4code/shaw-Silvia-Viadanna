import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const aluno="shaw-Silvia-Viadanna"

const ProtectedPage=()=>{
 const getProctedData=() => {

    const token= window.localStorage.getItem("token")
    axios
.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/login`,{

headers:{
    auth:token
}
}
)
.then(response => {
  console.log("OK",response.data)
   }
   )
 }


}