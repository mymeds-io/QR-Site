import React, { useState } from 'react';
import './signUp.css';
import myMedsLogo from '../../images/myMedsLogo.png';
import NavBarComponent from '../NavBar/NavBarComponent';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


export default function SignUpComponent() {

    const history = useHistory();
    const dispatch = useDispatch();

    const returnToSignIn = () => {
        history.push("/");
    }

    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const submitSignUp = async () => {

        await dispatch({ type: 'MAKE_REQUEST' })

        var axios = require('axios');
        var data = JSON.stringify({"full_name": `${fName} ${lName}`,"email":`${email}`,"phone":`${phone}`,"password":`${password}`});

        var config = {
            method: 'post',
            url: 'https://morning-headland-04700.herokuapp.com/dev.mymedsapi.com/qrcode/request/viewUser/create',
            headers: { 
                'x-api-key': 'Pk6P3i0CVQLkgpgeQmqp', 
                'Content-Type': 'application/json'
            },
            data : data
        };

        await axios(config)
            .then(function (response) {
                //Missing auth token (Add auth token later)
                dispatch({  type:"LOGIN_VIEW_USER", payload: {viewUserEmail: email, viewUserAuth: null, viewUserId: response.data.id} })
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
        });

        history.push("/tracked");
    }

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
                    <button type="button" onClick={() => returnToSignIn()} className="btn btn-outline-primary signInBtnDesktop">Sign In</button>
                    <div className="row no-gutters justify-content-center" style={{width: "100%", position: "relative", bottom: "5vh"}}>
                        <div className="col-9" style={{position: "relative", right: "1vw", textAlign: "center"}}>
                            <h4 style={{fontWeight: "700"}}>Sign Up</h4>
                        </div>
                    </div>
                    <div className="row no-gutters justify-content-center" style={{width: "100%"}}>
                        <div className="col-5" style={{position: "relative", right: "1vw"}}>
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                    <input onChange={e => setfName(e.target.value)} type="name" className="form-control" id="inputEmail4" placeholder="First Name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                    <input onChange={e => setlName(e.target.value)} type="lastName" className="form-control" id="inputPassword4" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input onChange={e => setEmail(e.target.value)} type="text" className="form-control" id="inputAddress" placeholder="Email Address"/>
                                </div>
                                <div className="form-group">
                                    <input onChange={e => setPhone(e.target.value)} type="text" className="form-control" id="inputPhone" placeholder="Phone Number"/>
                                </div>
                                <div className="form-group">
                                    <input onChange={e => setPassword(e.target.value)} type="text" className="form-control" id="inputAddress2" placeholder="Create Password"/>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                    <input onChange={e => setPassword(e.target.value)} type="text" className="form-control" id="inputCity" placeholder="Confirm Password" />
                                    </div>
                                </div>
                                <div className="row no-gutters" style={{width: "100%", position: "relative", top: "10vh"}}>
                                    <div className="col-12">
                                        <button onClick={() => submitSignUp() } type="submit" className="signUpBtn btn btn-primary" >Sign up for myMeds</button>
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
                <NavBarComponent />
                <div className="signUpContentMobile">
                    <div className="row no-gutters signUpTitleRowMobile" style={{width: "100%"}}>
                        <div className="col-6" style={{textAlign: "center"}}>
                            <h4>Sign Up</h4>
                        </div>
                    </div>
                    <div className="row no-gutters align-items-center justify-content-center">
                        <div className="col-8">
                            <div className="signUpContainerMobile">
                                <form>
                                    <div className="signUpInputsMobile">
                                        <div className="form-row justify-content-center">
                                            <div className="form-group col-5">
                                            <input onChange={e => setfName(e.target.value)} type="name" className="form-control" id="inputEmail4" placeholder="First Name" />
                                            </div>
                                            <div className="form-group col-5">
                                            <input onChange={e => setlName(e.target.value)} type="lastname" className="form-control" id="inputPassword4" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="form-row justify-content-center">
                                            <div className="form-group col-10">
                                                <input onChange={e => setEmail(e.target.value)} type="text" className="form-control" id="inputAddress" placeholder="Email Address"/>
                                            </div>
                                        </div>
                                        <div className="form-row justify-content-center">
                                            <div className="form-group col-10">
                                                <input onChange={e => setPhone(e.target.value)} type="text" className="form-control" id="inputPhone" placeholder="Phone Number"/>
                                            </div>
                                        </div>
                                        <div className="form-row justify-content-center">
                                            <div className="form-group col-10">
                                                <input onChange={e => setPassword(e.target.value)} type="text" className="form-control" id="inputAddress2" placeholder="Create Password"/>
                                            </div>
                                        </div>
                                        <div className="form-row justify-content-center">
                                            <div className="form-group col-10">
                                            <input onChange={e => setPassword(e.target.value)} type="text" className="form-control" id="inputCity" placeholder="Confirm Password" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row no-gutters justify-content-center" style={{width: "100%", position: "relative", top: "10vh"}}>
                                        <div className="col-10">
                                            <button onClick={() => submitSignUp() } type="submit" className="signUpBtn btn btn-primary" >Sign up for myMeds</button>
                                        </div>
                                        <div className="col-10" style={{textAlign: "center", position: "relative", top: "2vh"}}>
                                            <small className="form-text text-muted">By clicking "Sign up for myMeds" You agree to our Terms of Service and Privacy Statement</small>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

