import React, { useState, useEffect } from 'react';
import './signIn.css'
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';



//Just remove onClick prop from submit button and delete code above return statement to obtain previous code

export default function SignInComponent2() {

    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
    const user = "Greg"

    const loginViewUser = (email, password) => {
        dispatch({ type: "MAKE_REQUEST" })

        let data = JSON.stringify({ "email": email,"password": password });
        
        let config = {
          method: 'post',
          url: 'https://morning-headland-04700.herokuapp.com/http://dev.mymedsapi.com/auth/qrcode/request/viewUser/login',
          headers: { 
            'x-api-key': 'Pk6P3i0CVQLkgpgeQmqp', 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          dispatch({ type:"LOGIN_VIEW_USER", payload: {viewUserEmail: email, viewUserAuth: "test123456789"} })
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          dispatch({ type:"ERROR", payload: {error: error} })
          console.log(error);
        });
    }

    return(
        <div className="signInContent">
            <div className="row no-gutters align-items-center justify-content-center" style={{transform: "translateY(10%)"}}>
                <div className="col-8 col-md-4 col-lg-3">
                    <div className="signInContainer">
                        <div className="container-fluid" style={{display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "column", height: "100%"}}>
                            <div className="row no-gutters" style={{width: "100%"}}>
                                <h5 className="signInHeader col-12" style={{textAlign: "center"}}>
                                    Stay ahead with myMeds!
                                </h5>
                                <h6 className="signInSubHeader col-12" style={{textAlign: "center"}}>
                                    Sign in to your account {count}
                                </h6>
                                <button onClick={() => dispatch({ type: "ADD" })}>Test</button>
                            </div>
                            <div className="row no-gutters justify-content-center" style={{width: "100%"}}>
                                <div className="col-11">
                                    <form>
                                        {/* <div className="userInputs">
                                            <div className="form-group">
                                                <input onChange={e => setEmail(e.target.value)} type="email" className="form-control" style={{fontFamily: "FontAwesome"}} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="&#xf0e0;   Email"/>
                                            </div>
                                            <div className="form-group">
                                                <input onChange={e => setPassword(e.target.value)} type="password" className="form-control" style={{fontFamily: "FontAwesome"}} id="exampleInputPassword1" placeholder="&#xf023;    Password" />
                                                <small id="emailHelp" style={{textAlign: "right"}} className="form-text text-muted"><a className="signInLink" href="#">Forgot Your Password?</a></small>
                                            </div>
                                        </div> */}
                                        <div className="row justify-content-center" style={{position: "relative", top: "2vh"}}>
                                            {/* <div className="col-10">
                                                <button type="submit" onClick={() => submitValue() } className="signInSubmit btn btn-primary">Submit</button>
                                            </div> */}

                                            {/* All a test function. Remove this div when finished */}
                                            {/* <div className="col-10">
                                                <button type="submit" onClick={() => dispatch({ type:"GET_USER", payload: "Eric"})} className="signInSubmit btn btn-primary" style={{marginTop:"15px"}}>{user ? `Test: ${user}` : "Test: No current User"}</button>
                                            </div>

                                            <div className="col-10">
                                                <button type="submit" onClick={() => dispatch({ type:"ADD"})} className="signInSubmit btn btn-primary" style={{marginTop:"15px"}}>{`Count: ${count}`}</button>
                                            </div> */}
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


