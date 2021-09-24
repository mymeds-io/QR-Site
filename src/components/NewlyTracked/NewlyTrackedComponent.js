import React from 'react';
import NavBarComponent from '../NavBar/NavBarComponent';
import TrackedUsersComponent from '../TrackedUsers/TrackedUsersComponent';
import { useParams, useHistory } from "react-router-dom";


function NewlyTrackedComponent() {

    const isLogged = useSelector(state => state.isLogged)
    const viewUserId = useSelector(state => state.viewUserId)
    const history = useHistory()

    let { userId, requestId } = useParams()

    useEffect(() => {
        if(!isLogged){
            history.push("/")
        }
    }, [])

    return (
        <div className="trackedComponent">
            <NavBarComponent />
            <TrackedUsersComponent />
        </div>
    )
}

export default NewlyTrackedComponent;