import React from "react"

export default class Etapa3 extends React.Component {

    render() {
        return (
            <div>
            <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
            <div>
                <p>5. Por que você não terminou um curso de graduação?</p>
              <input
               
                placeholder={"5. Por que não  terminou um curso de graduação?"}
              />

                <p>6. Você fez algum curso complementar?</p>
                <select>
            <option value="EMI">Nenhum</option>
            <option value="EMC">Tecnico</option>
            <option value="ESI">Ingles</option>
            </select>

         
        
            </div>
           
          </div>

          )
     }
     }

     