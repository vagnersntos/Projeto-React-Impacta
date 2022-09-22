import React, {Component} from "react";
import Filho from "./Filho";

class Pai extends Component {
    render(){
        return(
            <div>
                <h2>Eu sou o Componente pai</h2>
                <Filho Dado="Texto enviado pelo componente pai" />
            </div>
        )
    }
}

export default Pai;