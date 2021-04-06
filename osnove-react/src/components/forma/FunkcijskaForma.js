import React, { useState } from 'react';


function FunkcijskaForma (){
const [ime,setIme]=useState('');
const [prezime,setPrezime]=useState('');

   const metoda=()=>{
        alert("ime: "+ime+" prezime: " +prezime);
    }


        return(
            <div>
                <br/>
                <label>IME:</label>
                <input value = {ime} onChange={(e)=>setIme(e.target.value)}/>
                <br/>
                <label>Prezime:</label>
                <input value = {prezime} onChange={(e)=>setPrezime(e.target.value)}/>
                <br/>
                <button onClick={()=>metoda()}>Gumb</button>
            </div>
        );
    
}
export default FunkcijskaForma;