import React from 'react';
import './loading.css';
import myMedsLogo from '../../images/myMedsLogo.png';

export default function LoadingComponent() {
    return (
        <div className="loadingComponent justify-content-center row no-gutters" style={{height:"90vh"}}>
            <div className="col-11 col-md-6 col-lg-4" style={{position:"relative"}}>
                <div className="loadingCupRow row no-gutters justify-content-center">
                    <div className="col-4">
                        <img src={myMedsLogo} alt="myMedsLoadingLogo" className="img-fluid"/>
                    </div>
                </div>
                <div id="cup" />
            </div>
            <div className="col-9 loadingText">
                <h3><b>Just one moment while we retrieve your medication list..</b></h3>
            </div>
        </div>
    )
}
