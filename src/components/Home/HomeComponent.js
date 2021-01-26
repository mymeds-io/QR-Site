import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import NavBarComponent from '../NavBar/NavBarComponent';
import SignInComponent from '../SignIn/SignInComponent';
import LoadingOverlay from 'react-loading-overlay';

function HomeComponent() {

    const state = useSelector(state => state)
    const loading = useSelector(state => state.loading)

    useEffect(() => {
        console.log("Current state from home component: ", state)
    }, [])

    return (
        <div className="homeComponent">
            <LoadingOverlay
                active={loading}
                spinner
                text='Signing in...'
                >
                <NavBarComponent />
                <SignInComponent />
            </LoadingOverlay>
        </div>
    )
}

export default HomeComponent;