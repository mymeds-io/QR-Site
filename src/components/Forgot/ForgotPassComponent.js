import React from 'react';
import NavBarComponent from '../NavBar/NavBarComponent';
import './forgotPass.css';

export default function ForgotPassComponent() {

    return (
        <div className="forgotPassComponent">
            <NavBarComponent />
            <div className="row justify-content-center align-items-center no-gutters" style={{height: '90vh', width: '100vw', backgroundColor: 'blue'}}>
                <div className="col-8 inputBox" style={{backgroundColor: 'yellow', height: '30%', position: 'relative', bottom: '15%'}}>
                    <input type="text"/>
                    <button className="btn btn-primary"></button>
                </div>
            </div>
        </div>
    )
}
