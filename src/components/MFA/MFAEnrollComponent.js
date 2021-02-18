import React from 'react';
import NavBarComponent from '../NavBar/NavBarComponent';
import './mfaEnroll.css';

export default function MFAEnrollComponent() {

    return (
        <div className="mfaEnrollComponent">
            <NavBarComponent />
            <div className="row no-gutters justify-content-center" style={{width: '100%', height: '100%'}}>
                <div className="mfaEnrollBlock col-9" style={{height: '80%', textAlign: 'center'}}>
                    <h5>Thank you for signing up! You're just about done! In order to complete your registration, please scan the QR code presented below with your authenticator then submit the two MFA codes generated.</h5>
                    <img className="mt-4" src="https://via.placeholder.com/150" alt=""/>
                    <div className="row no-gutters justify-content-center" style={{width: "100%", marginTop:'6%'}}>
                        <div className="col-11">
                            <form>
                                <div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" style={{fontFamily: "FontAwesome"}} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="MFA Code #1"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" style={{fontFamily: "FontAwesome"}} id="exampleInputPassword1" placeholder="MFA Code #2" />
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-10">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
