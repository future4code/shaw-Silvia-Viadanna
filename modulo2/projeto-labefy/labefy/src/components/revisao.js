import React from "react";

export const MeuComp=(props) =>{
    const incrementar=(numero)=> {
 return numero +1;
    }
    const textoTela=incrementar(props.valor)
    return  <p>{textoTela}</p>
}