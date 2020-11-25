import React from 'react';
import './signUp.css';
import myMedsLogo from '../../images/myMedsLogo.png';


export default function SignUpComponent() {
    return (
        <div className="signUpComponent">
            <div className="leftMyMedsSection">
                <div className="row no-gutters justify-content-center" style={{width: "100%", position: "relative", bottom: "7vh"}}>
                    <div className="col-6">
                        <img src={myMedsLogo} alt="signUpMyMedsLogo" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
