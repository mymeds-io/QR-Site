import React, { useState } from 'react';
import NavBarComponent from '../NavBar/NavBarComponent';
import './resetPass.css';

export default function ResetPassComponent() {

    const [newPassword, setNewPass] = useState('')

    return (
        <div className="resetPassComponent">
            <NavBarComponent />
            <div className="row justify-content-center align-items-center no-gutters" style={{height: '90vh', width: '100vw', backgroundColor: 'blue'}}>
                <div className="col-8 updateBox" style={{backgroundColor: 'yellow', height: '30%', position: 'relative', bottom: '15%'}}>
                    <div className="row no-gutters" style={{width: '100%'}}>
                        <div className="col-12 inputUpdateBox">
                            <input onChange={e => setNewPass(e.target.value)} value={newPassword} className="updateInput" type="text" placeholder="New Password" />
                            <button className="btn btn-primary submitUpdateBtn">Update Password</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
