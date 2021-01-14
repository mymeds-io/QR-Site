import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useFetchMeds from '../../functions/useFetchMeds';
import LoadingComponent from '../Loading/LoadingComponent';
import TrackedPtComponent from '../User/TrackedPtComponent';
import './trackedUsers.css';

//Just remove onClick prop from submit button and delete code above return statement to obtain previous code

export default function TrackedUsersComponent() {

    const [userId, setUserId] = useState("1");
    const {meds, loading, error} = useFetchMeds(userId);
    const history = useHistory();
    
    const handleSubmit = () => {
        history.push("/user-meds")
    }

    useEffect(() => {
        console.log("State userId is: ", userId);
        console.log("Successfully fetched meds!: ", meds);
    })

    return (
        <div className="signInContent">
            <div className="row no-gutters align-items-center justify-content-center" style={{transform: "translateY(10%)"}}>
                <div className="col-8 col-md-4 col-lg-6">
                    <div className="signInContainer">
                        <div className="row no-gutters justify-content-center titleAndSearch" style={{height:"20%", width:"100%"}}>
                            <div className="col-12" style={{height: "100%"}}>
                                <div className="row no-gutters justify-content-between align-items-center" style={{height:"100%", width:"100%"}}>
                                    <div className="col-4 d-flex" style={{height:"40%", justifyContent:"center", alignItems:"center"}}>
                                        <h4>Patients</h4>
                                    </div>
                                    <div className="col-6 d-flex" style={{height:"40%", alignItems:"center", }}>
                                        <input className="searchInput" style={{width:"100%", borderRadius:"20px", height:"90%", paddingLeft:"15px", position:"relative", right:"2vw"}} type="name" id="inputSearch" placeholder="Search..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <TrackedPtComponent />
                    </div>
                </div>
            </div>
        </div>

    )
}