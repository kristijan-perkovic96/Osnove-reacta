import React, { Component } from 'react';


class KlasnaForma extends Component{

    constructor(){
        super();
        this.state={
            ime:'',
            prezime:''
        };

    }

    metoda(){
        alert("ime: "+this.state.ime+" prezime: " +this.state.prezime);
    }

    setInputValue(value, property){
        this.setState({
            [property]:value
        });
    }

    render(){
        return(
            <div>
                <br/>
                <label>IME:</label>
                <input value = {this.state.ime} onChange={(e)=>this.setInputValue(e.target.value,'ime')}/>
                <br/>
                <label>Prezime:</label>
                <input value = {this.state.prezime} onChange={(e)=>this.setInputValue(e.target.value,'prezime')}/>
                <br/>
                <button onClick={()=>this.metoda()}>Gumb</button>
            </div>
        );
    }
}
export default KlasnaForma;