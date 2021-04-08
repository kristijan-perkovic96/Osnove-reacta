import React, { Component } from 'react';
import { toast } from 'react-toastify';

class ObavjestKomponenta extends Component {

    baciObavjest() {
        toast.success('Succes',{
            position:'bottom-right',
            autoClose:8000,
            pauseOnHover:false,
            hideProgressBar:false,
            closeOnClick:true
        });
        toast.error('Error',{
            position:'bottom-right',
            autoClose:false
        });
        toast.warn('Warning',{
            position:'bottom-right',
            pauseOnHover:true,
            hideProgressBar:true,
        });
    }


    render() {
        return (
            <button onClick={()=>this.baciObavjest()}>Klikni za obavjest</button>
        );
    }
}
export default ObavjestKomponenta;