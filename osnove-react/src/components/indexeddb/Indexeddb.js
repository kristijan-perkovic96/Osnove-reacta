import React, { Component } from 'react';
import { createStore, get, set } from 'idb-keyval';

class Indexeddb extends Component{

constructor(){
    super();
    this.state={
        input:"",
        myStore: createStore("custom-store","table")
    }
}
componentDidMount(){
    /*var vrijednost=localStorage.getItem("input");
    if(vrijednost){
        this.setState({
            input:vrijednost
        })
    }*/

    get("input",this.state.myStore).then((value)=>{
        this.setState({
            input:value
        })
    })
}



postaviVrijednost(vrijednost){
    this.setState({input:vrijednost},()=>{
       // localStorage.setItem("input",vrijednost);
        set("input",vrijednost, this.state.myStore);
    })
}

render(){
    return(
        <div>
            <input value={this.state.input} onChange={(e)=>this.postaviVrijednost(e.target.value)}/>
        </div>
    );
}


}
export default Indexeddb;