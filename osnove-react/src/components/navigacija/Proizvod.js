import React from 'react';

function Proizvod(props){

    return (
        <div>
              <p>Proizvod id: {props.match.params.id}</p>
              <p>Podatak: {props.location.state.podatak}</p>
        </div>
      
    );
}
export default Proizvod;