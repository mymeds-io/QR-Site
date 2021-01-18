import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import NavBarComponent from '../NavBar/NavBarComponent';
import SignInComponent from '../SignIn/SignInComponent';

function HomeComponent() {

    const state = useSelector(state => state)

    useEffect(() => {
        console.log("Current state from home component: ", state)
    }, [])

    return (
        <div className="homeComponent">
            <NavBarComponent />
            <SignInComponent />
        </div>
    )
}

export default HomeComponent;