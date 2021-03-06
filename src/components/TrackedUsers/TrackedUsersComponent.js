import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useFetchPts from '../../functions/useFetchPts';
import LoadingComponent from '../Loading/LoadingComponent';
import TrackedPtComponent from '../User/TrackedPtComponent';
import { useSelector } from 'react-redux';
import uuid from 'react-uuid';
import './trackedUsers.css';
import getStoredState from 'redux-persist/es/getStoredState';

//Just remove onClick prop from submit button and delete code above return statement to obtain previous code

export default function TrackedUsersComponent() {
    
    const viewUserId = useSelector(state => state.viewUserId)
    const viewUserEmail = useSelector(state => state.viewUserEmail)

    const [userId, setUserId] = useState("1");
    const { pts, loading, error } = useFetchPts(viewUserId);
    const history = useHistory();

    
    const handleSubmit = () => {
        history.push("/user-meds")
    }

    useEffect(() => {
        console.log("TRACKED COMPONENT - View user's patients: ", pts);
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
                        {pts.length > 0 ? pts.map((pt) => <TrackedPtComponent key={uuid()} patient={pt} />)
                        :
                        <div className="row no-gutters justify-content-center emptyPtRow">
                            <div className="emptyPtText">You currently have 0 patients that you are following. You can start adding patients by scanning their QR code on their myMedsRec app.</div>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}