import React, { useEffect } from 'react';
import useFetchMeds from '../../functions/useFetchMeds';
import NavBarComponent from '../NavBar/NavBarComponent';
import './medList.css';

export default function MedListComponent() {

    const {meds, age, name, loading, error} = useFetchMeds("1");

    useEffect(() => {
        if(meds && meds.length > 0){
            console.log("Here are the user's meds: ", meds);
        }
    })

    const renderMeds = () => {
        if(meds){
            return meds.map((med) => {
                return (
                <div className="row no-gutters medsRow justify-content-center mt-3">
                    <div className="col-2" style={{position:"relative", right:"1vw"}}>
                        <img className="img-fluid" src={med.image} alt="medPic"/>
                    </div>
                    <div className="col-8" style={{position:"relative", left:"1vw", top:"1vh"}}>
                        <div className="row no-gutters">
                            <div className="col-12">
                                <div className="medName">{med.medName}</div>
                            </div>
                            <div className="col-12">
                                <div className="medDirections">{med.directions}</div>
                            </div>
                            <div className="col-5" style={{display:"flex", justifyContent:"center"}}>
                                <div className="medRefill" style={{position:"relative", right:"1vw"}}><i className="fa fa-share" style={{fontWeight:"700"}} aria-hidden="true">{med.refill}</i></div>
                            </div>
                            <div className="col-5" style={{display:"flex", justifyContent:"center"}}>
                                <div className="medExp" style={{position:"relative", right:"3vw"}}><i class="fa fa-ban" style={{fontWeight:"700"}} aria-hidden="true">{med.exp}</i></div>
                            </div>
                        </div>
                    </div>
                </div>)
            })
        }
    }

    const renderName = () => {
        if(name){
            return <h5>{name}</h5>
        }
    }

    const renderAge = () => {
        if(age){
            return <h6>{age + " Years Old"}</h6>
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
                                        <span style={{textAlign:"center", fontSize:".9rem"}}>Medicine Tracking List</span>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="medHx medHistoryContainer2">
                                        <div className="medHxOverlay2"></div>
                                        <span>History</span>
                                    </div>
                                </div>
                            </div>
                                {renderMeds()}                                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
