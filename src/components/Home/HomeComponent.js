import React from 'react';
import NavBarComponent from '../NavBar/NavBarComponent';
import SignInComponent from '../SignIn/SignInComponent';

export default function HomeComponent() {
    return (
        <div className="homeComponent">
            <NavBarComponent />
            <SignInComponent />
        </div>
    )
}
