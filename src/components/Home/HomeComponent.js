import React from 'react';
import LoadingComponent from '../Loading/LoadingComponent';
import NavBarComponent from '../NavBar/NavBarComponent';
import SignInComponent from '../SignIn/SignInComponent';

function HomeComponent() {
    return (
        <div className="homeComponent">
            <NavBarComponent />
            {/* <SignInComponent /> */}
            <LoadingComponent />
        </div>
    )
}

export default HomeComponent;