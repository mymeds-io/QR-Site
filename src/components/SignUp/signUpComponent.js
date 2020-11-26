import React from 'react';
import './signUp.css';
import myMedsLogo from '../../images/myMedsLogo.png';


export default function SignUpComponent() {
    return (
        <div className="signUpContent">
            <div className="d-none d-sm-none d-md-flex signUpComponentDesktop">
                <span className="leftMyMedsSection">
                    <div className="row no-gutters justify-content-center" style={{width: "100%", position: "relative", bottom: "8vh"}}>
                        <div className="col-6">
                            <img src={myMedsLogo} alt="signUpMyMedsLogo" className="img-fluid"/>
                        </div>
                    </div>
                </span>
                <span className="rightMyMedsSection">
                    <div className="row no-gutters justify-content-center" style={{width: "100%"}}>
                        <div className="col-9" style={{position: "relative", bottom: "5vh", right: "1vw", textAlign: "center"}}>
                            <h4 style={{fontWeight: "700"}}>Sign Up</h4>
                        </div>
                    </div>
                    <div className="row no-gutters justify-content-center" style={{width: "100%"}}>
                        <div className="col-5" style={{position: "relative", right: "1vw"}}>
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="First Name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                    <input type="password" className="form-control" id="inputPassword4" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="inputAddress" placeholder="Email Address"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="inputAddress2" placeholder="Create Password"/>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                    <input type="text" className="form-control" id="inputCity" placeholder="Confirm Password" />
                                    </div>
                                </div>
                                <div className="row no-gutters" style={{width: "100%", position: "relative", top: "10vh"}}>
                                    <div className="col-12">
                                        <button type="submit" className="signUpBtn btn btn-primary" >Sign up for myMeds</button>
                                    </div>
                                    <div className="col-12" style={{textAlign: "center", position: "relative", top: "2vh"}}>
                                        <small className="form-text text-muted">By clicking "Sign up for myMeds" You agree to our Terms of Service and Privacy Statement</small>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </span>
            </div>
            <div className="d-block d-sm-block d-md-none d-lg-none signUpComponentMobile">

            </div>
        </div>
    )
}

