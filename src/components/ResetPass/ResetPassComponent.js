import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import NavBarComponent from '../NavBar/NavBarComponent';
import TrueVaultClient from 'truevault';
import './resetPass.css';

export default function ResetPassComponent() {

    let location = useLocation()
    const history = useHistory()
    const [newPassword, setNewPass] = useState('')

    const hashParams = location.hash.substr(1).split('&');
    const parsedParams = {};
    for(var i = 0; i < hashParams.length; i++) {
        const keyValue = hashParams[i].split('=');
        const key = decodeURIComponent(keyValue[0]);
        const value = decodeURIComponent(keyValue[1]);
        parsedParams[key] = value;
    }
    
    const tvClient = new TrueVaultClient({httpBasic: parsedParams.httpAuth});

    const submitNewPassword = async (event, password) => {
        event.preventDefault();

        try {
          await tvClient.updateUserPassword(parsedParams.userId, password);
          alert("We have successfully reset your password! You'll now be re-directed to the log in page.");
          await setNewPass('')
          history.push('/');
        } catch (error) {
            alert(`We're very sorry. An error occured while attempting to update your password. Please try again later. Error: `, error)
        }
    }

    return (
        <div className="resetPassComponent">
            <NavBarComponent />
            <div className="row justify-content-center align-items-center no-gutters" style={{height: '90vh', width: '100vw', backgroundColor: 'blue'}}>
                <div className="col-8 updateBox" style={{backgroundColor: 'yellow', height: '30%', position: 'relative', bottom: '15%'}}>
                    <div className="row no-gutters" style={{width: '100%'}}>
                        <div className="col-12 inputUpdateBox">
                            <input onChange={e => setNewPass(e.target.value)} value={newPassword} className="updateInput" type="text" placeholder="New Password" />
                            <button onClick={(event) => submitNewPassword(event, newPassword)} className="btn btn-primary submitUpdateBtn">Update Password</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
