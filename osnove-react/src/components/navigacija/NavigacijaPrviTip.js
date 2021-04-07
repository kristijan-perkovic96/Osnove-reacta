import React, { Component } from 'react';
import Kontakt from './Kontakt';
import ONama from './ONama';
import Pocetna from './Pocetna';


class NavigacijaPrviTip extends Component {

    constructor() {
        super();
        this.state = {
            prikaz: "1"
        }
    }

    promijeniPrikaz(vrijednost) {
        this.setState({
            prikaz: vrijednost
        });
    }

    render() {
        var komponenta;
        if (this.state.prikaz === "1") {
            komponenta= <Pocetna/>;
        } else if (this.state.prikaz === "2") {
            komponenta=<ONama/>;
        } else if (this.state.prikaz === "3") {
            komponenta= <Kontakt/>;
        }
        return (
            <div>
                <button onClick={() => this.promijeniPrikaz("1")}>Pocetna</button>
                <button onClick={() => this.promijeniPrikaz("2")}>O nama</button>
                <button onClick={() => this.promijeniPrikaz("3")}>Kontakt</button>
                {komponenta}
            </div>
        );

    }


}
export default NavigacijaPrviTip;