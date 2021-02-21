import React, { useState } from 'react';
import NavBarComponent from '../NavBar/NavBarComponent';
import './forgotPass.css';
import TrueVaultClient from 'truevault';

export default function ForgotPassComponent() {

    const [email, setEmail] = useState('')

    const scopedAccessTokenAuth = 'c2F0LWU4YzVmZmU0LWNmZGEtNDE2NS05ZDg5LWZmMWE2MGIzMDMxMToyaUNuT1NnWjNGUERHU1h1NzAwT1U0OV9EVWMyckRvZHBSRkJSV3R6OHlN';
    const passwordResetFlowId = 'fe06359a-a5f4-4ffc-b762-b0844756887c';
    const tvClient = new TrueVaultClient({httpBasic: scopedAccessTokenAuth});

    const submitResetLink = async (event, email) => {
        event.preventDefault();

        try {
          await tvClient.sendPasswordResetEmail(passwordResetFlowId, email)
          alert('Success! Please check your email for the reset link')  
          setEmail('')
        } catch (error) {
            alert(`We're very sorry. We were unable to send you a reset password link. Please try again later.`)
        }
    }

    return (
        <div className="forgotPassComponent">
            <NavBarComponent />
            <div className="row justify-content-center align-items-center no-gutters" style={{height: '90vh', width: '100vw', backgroundColor: 'blue'}}>
                <div className="col-8 inputBox" style={{backgroundColor: 'yellow', height: '30%', position: 'relative', bottom: '15%'}}>
                    <div className="row no-gutters" style={{width: '100%'}}>
                        <div className="col-12 inputEmailReset">
                            <input onChange={e => setEmail(e.target.value)} value={email} className="resetInput" type="text" placeholder="myMedsRec Email" />
                            <button onClick={(event) => submitResetLink(event, email)} className="btn btn-primary submitResetBtn">Send reset link</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
