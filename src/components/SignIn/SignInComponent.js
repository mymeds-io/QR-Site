import React from 'react';
import './signIn.css';

export default function SignInComponent() {
    return (
        <div className="signInContent">
            <div className="row no-gutters align-items-center justify-content-center" style={{transform: "translateY(25%)"}}>
                <div className="col-8 col-md-4 col-lg-3">
                    <div className="signInContainer">
                        <div className="container-fluid" style={{display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "column", height: "100%"}}>
                            <div className="row no-gutters" style={{width: "100%"}}>
                                <h5 className="signInHeader col-12" style={{textAlign: "center"}}>
                                    All about your meds...
                                </h5>
                                <h6 className="signInSubHeader col-12" style={{textAlign: "center"}}>
                                    Sign in to your account
                                </h6>
                            </div>
                            <div className="row no-gutters" style={{width: "100%"}}>
                                <div className="col-12">
                                    <form>
                                        <div className="form-group">
                                            <input type="email" className="form-control" style={{fontFamily: "FontAwesome"}} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="&#xf0e0;   Email"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" style={{fontFamily: "FontAwesome"}} id="exampleInputPassword1" placeholder="&#xf023;    Password" />
                                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <button type="submit" className="signInSubmit btn btn-primary">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="row no-gutters" style={{width: "100%"}}>
                                <div className="col-12">
                                    <p style={{textAlign: "center"}}>
                                        New to myMeds? <a href="#">Sign Up.</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


