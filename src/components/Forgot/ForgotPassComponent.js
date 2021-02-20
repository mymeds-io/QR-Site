import React, { useState } from 'react';
import NavBarComponent from '../NavBar/NavBarComponent';
import './forgotPass.css';

export default function ForgotPassComponent() {

    const [email, setEmail] = useState('')

    return (
        <div className="forgotPassComponent">
            <NavBarComponent />
            <div className="row justify-content-center align-items-center no-gutters" style={{height: '90vh', width: '100vw', backgroundColor: 'blue'}}>
                <div className="col-8 inputBox" style={{backgroundColor: 'yellow', height: '30%', position: 'relative', bottom: '15%'}}>
                    <div className="row no-gutters" style={{width: '100%'}}>
                        <div className="col-12 inputEmailReset">
                            <input onChange={e => setEmail(e.target.value)} value={email} className="resetInput" type="text" placeholder="myMedsRec Email" />
                            <button className="btn btn-primary submitResetBtn">Send reset link</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
