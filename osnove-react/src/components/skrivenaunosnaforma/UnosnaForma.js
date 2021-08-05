import React, { useState } from 'react';

function UnosnaForma(){
const[ime,setIme]=useState("");
const[prezime,setPrezime]=useState("");
const[starost,setStarost]=useState("");
    return(
        <div>
            <label>Ime:</label>
            <input value={ime} onChange={(e)=>setIme(e.target.value)}/>
            <br/>
            <label>Prezime:</label>
            <input value={prezime} onChange={(e)=>setPrezime(e.target.value)}/>
            <br/>
            <label>Starost:</label>
            <input value={starost} onChange={(e)=>setStarost(e.target.value)}/>
            <br/>
            <button onClick={(e)=>{e.preventDefault();console.log({ime:ime, prezime:prezime, starost:starost});}}>Spremi</button>
        </div>
    );
}
export default UnosnaForma;