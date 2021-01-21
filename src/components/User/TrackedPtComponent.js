import React from 'react';
import { Link } from 'react-router-dom';
import './trackedPt.css';
import { useSelector } from 'react-redux'

function TrackedPtComponent(props){

    const authToken = useSelector(state => state.viewUserAuthToken)

    return(
        <div className="ptRow row no-gutters justify-content-center" style={{width:"100%", height:"15%"}}>
            <div className="col-11" style={{height:"100%"}}>
                <div className="row no-gutters" style={{width:"100%", height:"100%"}}>
                    <div className="col-2 ptImage d-flex" style={{height:"100%", alignItems:"center", justifyContent:"center", textAlign:'center'}}>
                        <img src="https://avatars2.githubusercontent.com/u/49351487?s=460&u=a49783af1f3ab38550aae809c9cc4ecdaa432c7c&v=4" alt="ptPic" className="img-fluid" style={{height: '70%'}}/>
                    </div>
                    <div className="col-5 ptNameAndTime d-flex" style={{height:"100%", justifyContent:"center", flexDirection:"column"}}>
                        <div className="row no-gutters justify-content-center">
                            <div className="ptName col-12" style={{display:'flex', justifyContent:'center', paddingRight:'2vw', fontWeight:'700'}}>
                                {props.patient.userFirstName + ` ${props.patient.userLastName}`}
                            </div>
                        </div>
                        {/* Do we still need this Last updated column? If so, it needs to be returned with the patient */}
                        {/* <div className="row no-gutters">
                            <div className="col-12" style={{backgroundColor:"blue", paddingLeft:'2vw'}}>
                                {`Last updated: `}
                            </div>
                        </div> */}
                    </div>
                    <div className="col-3" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <Link className="viewPtMedsButton" to={`/user-meds-qr/${props.patient.userId}/${authToken}`}>View Meds</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrackedPtComponent;