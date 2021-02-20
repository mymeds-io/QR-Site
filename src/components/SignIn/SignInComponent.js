import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './signIn.css';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { loginConfig } from '../../functions/config';
import TrueVaultClient from 'truevault';
import constant from '../../constants';

//Just remove onClick prop from submit button and delete code above return statement to obtain previous code

export default function SignInComponent() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [mfa, setMFA] = useState('');
    const [password, setPassword] = useState('');
    const isLogged = useSelector(state => state.isLogged)
    const user = useSelector(state => state.user);
    const count = useSelector(state => state.count)
    const state = useSelector(state => state)
    const viewUserEmail = useSelector(state => state.viewUserEmail)
    const viewUserAuth = useSelector(state => state.viewUserAuthToken)
    const mfaQRCode = useSelector(state => state.mfaQRCode)
    const dispatch = useDispatch();

    const resetInputFields = () => {
        setEmail('')
        setMFA('')
        setPassword('')
    }

    const loginViewUser = async (email, password) => {
        await dispatch({ type: "MAKE_REQUEST" })

        let data = JSON.stringify({ "email": email,"password": password });
        
        let config = loginConfig(data);
        
        await axios(config)
        .then(function (response) {
          dispatch({ type:"LOGIN_VIEW_USER", payload: {viewUserEmail: email, viewUserAuth: response.data.Authorization, viewUserId: response.data.id} })
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          dispatch({ type:"ERROR", payload: {error: error} })
          console.log(error);
        });
    }

    const loginTVUser = async (email, password, mfaCode) => {
        console.log(`loginTvUser function started`)

        const accountId = constant.accountId

        try {
            const loggedUser = await TrueVaultClient.login(accountId, email, password, mfaCode)
            console.log("Successfully logged in as: ", loggedUser)
            const currentUser = await loggedUser.readCurrentUser()
            console.log(`Current user: `, currentUser)
            resetInputFields()
            await dispatch({ type: "ADD_LOGGED_TV_USER", payload: loggedUser })
            alert(`Thank you! You have successfully SIGNED in to myMedsRec!`)
            history.push('/tracked')       
        } catch (error) {
            resetInputFields()
            console.log(`An error occured while attempting to log you in: `, error)
            alert('Sorry. We were not able to log you in to myMedsRec. Please try again later or contact us at support@MyMedsRec.com')
        }
    }

    const submitValue = async (event, email, password, mfaCode) => {
        event.preventDefault()
        // await loginViewUser(email, password)
        // console.log("State after login: ", state)
        await loginTVUser(email, password, mfaCode)
    }
    
    const handleSubmit = () => {
        history.push("/user-meds")
    }

    useEffect(() => {

        console.log('Redux qr code: ', mfaQRCode)

    }, [])

    return (
        
        //Previous had loading component here; i.e. loading ? <LoadingComponent/> : etc.....
        
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
                                    Sign in to your account
                                </h6>
                            </div>
                            <div className="row no-gutters justify-content-center" style={{width: "100%"}}>
                                <div className="col-11">
                                    <form>
                                        <div className="userInputs">
                                            <div className="form-group">
                                                <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" style={{fontFamily: "FontAwesome"}} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="&#xf0e0;   Email"/>
                                            </div>
                                            <div className="form-group">
                                                <input value={mfa} onChange={e => setMFA(e.target.value)} type="text" className="form-control" style={{fontFamily: "FontAwesome"}} id="mfaCodeInput" aria-describedby="mfaCode" placeholder="&#xf084;   MFA Code"/>
                                            </div>
                                            <div className="form-group">
                                                <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control" style={{fontFamily: "FontAwesome"}} id="exampleInputPassword1" placeholder="&#xf023;    Password" />
                                                <small id="emailHelp" style={{textAlign: "right"}} className="form-text text-muted"><a className="signInLink" href="#">Forgot Your Password?</a></small>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center" style={{position: "relative", top: "2vh"}}>
                                            <div className="col-10">
                                                <button type="submit" onClick={(event) => submitValue(event, email, password, mfa) } className="signInSubmit btn btn-primary">Submit</button>
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


