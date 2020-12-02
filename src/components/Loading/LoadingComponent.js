import React from 'react';
import './loading.css';
import myMedsLogo from '../../images/myMedsLogo.png';

export default function LoadingComponent() {
    return (
        <div className="loadingComponent justify-content-center row no-gutters">
            <div className="col-4">
                <img src={myMedsLogo} alt="myMedsLoadingLogo" className="img-fluid"/>
                <div id="cup" />
            </div>
        </div>
    )
}
