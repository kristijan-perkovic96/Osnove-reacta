import { update } from 'idb-keyval';
import React,{useState} from 'react';
import './table.css';

function Row(props){

    const[id,setId]=useState(props.osoba.id);
    const[ime,setIme]=useState(props.osoba.ime);
    const[prezime,setPrezime]=useState(props.osoba.prezime);
    const[inputClassName,setInputClassName]=useState("table__row");

return(
    <tr className="row__data">
        <td className="td__data">
            <input className={inputClassName} value={ime} onChange={(e)=>setIme(e.target.value)}/>
        </td>
        <td className="td__data">
            <input className={inputClassName}  value={prezime} onChange={(e)=>setPrezime(e.target.value)}/>
        </td>
        <td className="td__data">
           <button onClick={(e)=>{e.preventDefault(); props.update({id:id,ime:ime,prezime:prezime})}}>Ažuriraj</button>
        </td>
    </tr>
);

}
export default Row;