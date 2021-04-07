import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch, Route, Link
} from 'react-router-dom';
import Kontakt from './Kontakt';
import ONama from './ONama';
import Pocetna from './Pocetna';
import Proizvod from './Proizvod';
class NavigacijaDrugiTip extends Component {

    render() {
        return (

            <Router>
                <Link to="/">Početna</Link><br />
                <Link to="/Onama">O nama</Link><br />
                <Link to="/Kontakt">Kontakt</Link><br/>
                <Link to={{
                pathname: "proizvod:10", state: {
                   podatak:15
                }
            }}>Proizvod</Link>
                <Switch>
                    <Route exact path="/"> <Pocetna /></Route>
                    <Route exact path="/Onama"><ONama /></Route>
                    <Route exact path="/Kontakt"><Kontakt /></Route>
                    <Route
                        exact path="/proizvod:id"
                        render={({
                            match,location
                        }) => (
                            <Proizvod match={match} location={location}/>
                        )}
                    />
                </Switch>
            </Router>
        );
    }
}
export default NavigacijaDrugiTip;