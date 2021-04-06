import React, { Component } from 'react';
import DjeteFunkcijska from './DjeteFunkcijska';
import DjeteKlasna from './DjeteKlasna';

class RoditeljskaKomponenta extends Component{

    constructor(){
        super();
        this.state={
            ime:"Kristijan",
            prezime:"Perković"
        }
    }

    metodaURoditelju(tekst){
        alert("Dio iz roditelja, "+tekst);
    }

    render(){
        return(
            <div>
                <DjeteKlasna ime={this.state.ime} metoda={this.metodaURoditelju}/>
                <DjeteFunkcijska prezime={this.state.prezime}/>
            </div>
        );

    }
}
export default RoditeljskaKomponenta;