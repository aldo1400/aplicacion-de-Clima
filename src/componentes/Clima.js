import React, { Component } from 'react'

class Clima extends Component {

  mostrarResultado=()=>{

// obtener los datos de la consulta
    const {name,weather,main}=this.props.resultado;

    if(!name || !weather || !main) return null;

    return(
      <div className="row">
            {name}
     </div>
    )
  }

  render() {
      
    return (
      <div className="container">
       {this.mostrarResultado()}
      </div>
    )
  }
}

export default Clima;
