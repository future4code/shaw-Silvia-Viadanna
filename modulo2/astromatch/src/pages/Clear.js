import React, { useEffect,useState} from "react";
import axios from "axios";

const aluno = "shaw-Silvia-Viadanna";

function Clear() {
    const [matchs, setMatchs] = useState("");

    useEffect(() => {
        putMatches();
    }, [matchs]);

    const putMatches = () => {

        axios
            .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:${aluno}/clear`)
            .then((res) => { setMatchs(res.data.matchs); })
            .catch((err) => {
                console.log(err.response.data);
            });
    };

    return (
        <div>


        </div>
    );




}

export { Clear };
