import React from "react";
import swal from 'sweetalert2';


class Popup extends React.Component {

    onClick() {
        swal.fire({
            title: '<h3> Popup worked </h3>',
            text: 'Sweetalert popup working well',
            timer:3000,
            showCancelButton: true,
            showConfirmButton: true,
            cancelButtonText: 'Cancel',
            cancelButtonColor: 'red',
            confirmButtonText: 'okey',
            confirmButtonColor: 'green'
        }).then(result=>{
            if(result.isConfirmed){
                swal.fire({
                    title: 'Confirmed',
                    text: 'Confirmed',
                    timer:2000,
                    showConfirmButton: true,
                    confirmButtonText: 'OK',
                    showCancelButton: false
                })
            }
            else {
                swal.fire({
                    title: 'Not confirmed',
                    text: 'Not Confirmed',
                    timer: 2000,
                    showConfirmButton: false,
                    showCancelButton: false
                })
            }
        })
    }

    render() {
        return (
            <button type="button" onClick={this.onClick}>Show popup</button>
        )
    }
    

}


export default Popup;