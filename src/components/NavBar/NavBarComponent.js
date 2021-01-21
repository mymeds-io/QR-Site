import React from 'react';
import { useHistory } from 'react-router-dom';
import myMedsLogo from '../../images/myMedsLogo.png';
import './navBar.css';
import { useSelector, useDispatch } from 'react-redux';

export default function NavBarComponent() {

    var axios = require('axios');

    const isLogged = useSelector(state => state.isLogged)
    const token = useSelector(state => state.viewUserAuthToken)
    const dispatch = useDispatch();
    const history = useHistory();
    let urlName = window.location.pathname;


    const returnToSignIn = async () => {

        await dispatch({ type: 'MAKE_REQUEST' })

        var data = '';

        var config = {
            method: 'post',
            url: 'https://morning-headland-04700.herokuapp.com/http://dev.mymedsapi.com/auth/qrcode/request/viewUser/logout',
            headers: { 
                'x-api-key': 'Pk6P3i0CVQLkgpgeQmqp', 
                'Authorization': `Bearer ${token}`
                },
                data : data
            };
    
        await axios(config)
            .then(function (response) {
                dispatch({ type:"LOGOUT_VIEW_USER" })
                console.log(JSON.stringify(response.data));
        })
            .catch(function (error) {
                dispatch({ type:"ERROR", payload: {error: error} })
                console.log(error);
        });

        history.push("/");

    }

    const returnToSignUp = () => {
        history.push("/sign-up");
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
                
                {isLogged ? 
                
                <div className="col-3" style={{display: "flex", justifyContent: "flex-end", position: "relative", right: "2vw"}}>
                    <button type="button" onClick={() => returnToSignIn()} className="btn btn-outline-primary btn-sm">Log Out</button>
                </div>
                
                :
                
                <div className="col-3" style={{display: "flex", justifyContent: "flex-end", position: "relative", right: "2vw"}}>
                    {urlName === "/sign-up" ? 
                        <button type="button" onClick={() => returnToSignIn()} className="btn btn-outline-primary btn-sm">Sign In</button>
                        :
                        <button type="button" onClick={() => returnToSignUp()} className="btn btn-outline-primary btn-sm">Sign Up</button>
                    }
                </div>

                }
            </div>
        </div>
    )
}
