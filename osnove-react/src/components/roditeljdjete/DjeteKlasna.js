import React,{ Component } from "react";

class DjeteKlasna extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <p>Ime: {this.props.ime}</p>
                <button onClick={()=>this.props.metoda("Dio iz djeteta")}>Klikni</button>
            </div>
           
        );
    }

}
export default DjeteKlasna;