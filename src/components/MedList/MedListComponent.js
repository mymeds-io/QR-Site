import React from 'react';
import NavBarComponent from '../NavBar/NavBarComponent';
import './medList.css';

export default function MedListComponent() {
    return (
        <div className="medListComponent">
            <NavBarComponent />
            <div className="medListContent">
                <div className="row no-gutters justify-content-center">
                    <div className="col-9 col-md-4 col-lg-4">
                        <div className="medListContainer">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
