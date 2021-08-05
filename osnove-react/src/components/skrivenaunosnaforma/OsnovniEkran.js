import React, { useState } from 'react';
import UnosnaForma from './UnosnaForma';

function OsnovniEkran(){
const [prikaziFormu,setPrikaziFormu]=useState(false);
var tekstGumb="";

if(prikaziFormu){
    tekstGumb="Sakrij formu";
}else{
    tekstGumb="Prikažu formu";
}
    return(
        <div>
            <button onClick={()=>setPrikaziFormu(!prikaziFormu)}>{tekstGumb}</button>
            {
                prikaziFormu? <UnosnaForma/>:""
            }
           
        </div>
    );
}
export default OsnovniEkran;