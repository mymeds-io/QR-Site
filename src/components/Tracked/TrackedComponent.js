import React from 'react';
import NavBarComponent from '../NavBar/NavBarComponent';
import TrackedUsersComponent from '../TrackedUsers/TrackedUsersComponent';


function TrackedComponent() {
    return (
        <div className="trackedComponent">
            <NavBarComponent />
            <TrackedUsersComponent />
        </div>
    )
}

export default TrackedComponent;