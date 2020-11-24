import React from 'react';
import myMedsLogo from '../../images/myMedsLogo.png';
import './navBar.css';

export default function NavBarComponent() {
    return (
        <div className="navBarComponent">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="myMedsPic">
                    <img className="myMedsLogo img-fluid" src={myMedsLogo} alt="myMedsLogo"/>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse2" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-none d-lg-flex collapse navbar-collapse row collapsedNavBar" id="navbarTogglerDemo01">
                    <div className="col-3">
                        <div className="navFiller"></div>
                    </div>
                    <div className="col-3">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3 navSignUp">
                        <button type="button" className="btn btn-outline-info">Sign Up</button>
                    </div>
                </div>
                {/* <div className="collapse2" id="navbarTogglerDemo02"></div> */}
            </nav>
        </div>
    )
}
