import React from 'react';
import { Link } from 'react-router-dom';
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
                                    Stay ahead with myMeds!
                                </h5>
                                <h6 className="signInSubHeader col-12" style={{textAlign: "center"}}>
                                    Sign in to your account
                                </h6>
                            </div>
                            <div className="row no-gutters justify-content-center" style={{width: "100%"}}>
                                <div className="col-11">
                                    <form>
                                        <div className="userInputs">
                                            <div className="form-group">
                                                <input type="email" className="form-control" style={{fontFamily: "FontAwesome"}} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="&#xf0e0;   Email"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" style={{fontFamily: "FontAwesome"}} id="exampleInputPassword1" placeholder="&#xf023;    Password" />
                                                <small id="emailHelp" style={{textAlign: "right"}} className="form-text text-muted"><a className="signInLink" href="#">Forgot Your Password?</a></small>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center" style={{position: "relative", top: "2vh"}}>
                                            <div className="col-10">
                                                <button type="submit" className="signInSubmit btn btn-primary">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="row no-gutters" style={{width: "100%"}}>
                                <div className="col-12">
                                    <p style={{textAlign: "center"}}>
                                        New to myMeds? <Link style={{fontWeight: "600"}} to={'/sign-up'}>Sign Up</Link>
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


