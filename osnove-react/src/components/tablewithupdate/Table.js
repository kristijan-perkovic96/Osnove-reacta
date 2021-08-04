import React,{useState} from 'react';
import Row from './Row';
import './table.css';
function Table(){
    const [data,setData]=useState([
        {"id":1,"ime":"Kristijan","prezime":"Perković"},
        {"id":2,"ime":"Brigita","prezime":"Perković"},
        {"id":3,"ime":"Dino","prezime":"Validžić"},
    ]);
    const update=(podaci)=>{
        var podaciLista=[];
        for(var i=0;i<data.length;i++){
            if(data[i].id!=podaci.id){
                podaciLista.push(data[i]);
            }
            else{
                var noviSlog={id:podaci.id,ime:podaci.ime,prezime:podaci.prezime};
                podaciLista.push(noviSlog);
            }
        }
        setData(podaciLista);     
    }
    return(
    <div>
        <table className="table__cijela">
            <tr className="row__naslov">
                <td className="td__naslov">
                    Ime
                </td>
                <td className="td__naslov">
                    Prezime
                </td>
                <td className="td__naslov">
                    Ažuiraj
                </td>
            </tr>
         {data.map(osoba=><Row osoba={osoba} update={update}/>)}
        </table>
        <button onClick={()=>console.log(data)}>Ispiši trenutne podatke u konzolu</button>
    </div>
    );
}

export default Table;
