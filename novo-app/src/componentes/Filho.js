import React, {Component} from "react";

class Filho extends Component {
    render(){
        return(
            <div>
                <h3> Eu sou o Component Filho!</h3>
                <h3>{this.props.Dado}</h3>
            </div>
        )
    }
}

export default Filho;