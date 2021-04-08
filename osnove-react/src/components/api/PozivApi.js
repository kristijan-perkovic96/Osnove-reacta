import axios from 'axios';
import React, { Component } from 'react';
import {AxiosConf} from './AxiosKonf';
class PozivApi extends Component {

    constructor() {
        super();
        this.state = {
            tablica: []
        }
    }
    dohvatiOsobe() {

        axios.get("http://localhost:8080/people").then((response) => {
            console.log(response.data);
            this.setState({
                tablica: response.data
            })


        });
    }

    dohvatiOsobe2(){
        var zaglavlje={
            method:"GET",
            url:"http://localhost:8080/people"
        }
        axios(zaglavlje).then((response) => {
            console.log(response.data);
            this.setState({
                tablica: response.data
            })


        });
    }

    dohvatiOsobe3(){
        var zaglavlje={
            method:"GET",
            url:"people"
        }
        AxiosConf(zaglavlje).then((response) => {
            console.log(response.data);
            this.setState({
                tablica: response.data
            })


        });
    }
    render() {
        return (
            <div onClick={() => this.dohvatiOsobe3()}>
                <button>Dohvati osobe</button>
                <table>
                    <th>
                        <td>Ime</td>
                        <td>Prezime</td>
                    </th>
                    {this.state.tablica.map(person => {
                        return <tr>
                            <td>{person.firstname}</td>
                            <td>{person.lastname}</td>
                        </tr>
                    })}
                </table>

            </div>
        );
    }
}
export default PozivApi;
