import React from 'react';
import { useHistory } from 'react-router-dom';
import myMedsLogo from '../../images/myMedsLogo.png';
import './navBar.css';

export default function NavBarComponent() {

    let urlName = window.location.pathname;
    const history = useHistory();

    const returnToSignIn = () => {
        history.push("/");
    }

    const returnToSignUp = () => {
        history.push("sign-up");
    }
    
    return (
        <div className="navBarComponent">
            <div className="row no-gutters justify-content-between align-items-center" style={{padding: "1vh 0vw"}}>
                <div className="col-2 col-md-2 col-lg-1" style={{position: "relative", left: "2vw"}}>
                    <img className="img-fluid" src={myMedsLogo} alt="myMedsLogo"/>
                </div>
                <div className="siteLinks col-7" style={{display: "flex", justifyContent: "center"}}>
                    <div>
                        <a className="siteLink" href="#">Home</a>
                        <a className="siteLink" href="#">Explore</a>
                        <a className="siteLink" href="#">About Us</a>
                    </div>
                </div>
                <div className="col-3" style={{display: "flex", justifyContent: "flex-end", position: "relative", right: "2vw"}}>
                    {urlName === "/sign-up" ? 
                        <button type="button" onClick={() => returnToSignIn()} className="btn btn-outline-primary btn-sm">Sign In</button>
                        :
                        <button type="button" onClick={() => returnToSignUp()} className="btn btn-outline-primary btn-sm">Sign Up</button>
                    }
                </div>
            </div>
        </div>
    )
}
