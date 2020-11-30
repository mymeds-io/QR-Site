import React, { useEffect } from 'react';
import useFetchMeds from '../../functions/useFetchMeds';
import NavBarComponent from '../NavBar/NavBarComponent';
import './medList.css';

export default function MedListComponent() {

    const {meds, loading, error} = useFetchMeds("1");

    useEffect(() => {
        if(meds && meds.data && meds.data.meds){
            console.log("Here are the user's meds: ", meds.data.meds[0]);
        }
    })

    const renderMeds = () => {
        if(meds && meds.data && meds.data.meds){
            return meds.data.meds.map((med) => {
                return <li>{med}</li>
            })
        }
    }

    const renderName = () => {
        if(meds && meds.data && meds.data.name){
            return <h5>{meds.data.name}</h5>
        }
    }

    const renderAge = () => {
        if(meds && meds.data && meds.data.age){
            return <h6>{meds.data.age + " Years Old"}</h6>
        }
    }

    
    let btns = document.getElementsByClassName("medHx");

    for( let i = 0; i < btns.length; i++){
        btns[i].addEventListener("click", function() {
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
    


    return (
        <div className="medListComponent">
            <NavBarComponent />
            <div className="medListContent">
                <div className="row no-gutters justify-content-center" style={{transform: "translateY(15%)"}}>
                    <div className="col-9 col-md-4 col-lg-4">
                        <div className="medListContainer">
                            <div className="row no-gutters">
                                <div className="col-4">
                                    {renderName()}
                                </div>
                            </div>
                            <div className="row no-gutters">
                                <div className="col-3">
                                    {renderAge()}
                                </div>
                            </div>
                            <div className="row no-gutters justify-content-center">
                                <div className="col-5">
                                    <div className="medHx medHistoryContainer active">
                                        <div className="medHxOverlay"></div>
                                        <span>Medicine Tracking List</span>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="medHx medHistoryContainer2">
                                        <div className="medHxOverlay2"></div>
                                        <span>History</span>
                                    </div>
                                </div>
                            </div>
                            <ul>
                                {renderMeds()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
