import React, { useEffect } from 'react';
import useFetchMeds from '../../functions/useFetchMeds';
import NavBarComponent from '../NavBar/NavBarComponent';
import './medList.css';
import SkeletonProfile from '../Skeletons/SkeletonProfile';
import SkeletonArticle from '../Skeletons/SkeletonArticle';

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
                    <div className="col-1" style={{position:"relative", right:"1vw"}}>
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
                                <div className="medExp" style={{position:"relative", right:"10%"}}><i className="fa fa-ban" style={{fontWeight:"700"}} aria-hidden="true">{med.exp}</i></div>
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
            return <h6 className="userAge" >{age + " Years Old"}</h6>
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
                <div className="row no-gutters justify-content-center" style={{transform: (!loading ? "translateY(15%)" : "translateY(5%)")}}>
                    <div className="col-9 col-md-4 col-lg-4">
                        <div className="medListContainer">
                            {!loading ? 
                            <img src="https://avatars2.githubusercontent.com/u/49351487?s=460&u=a49783af1f3ab38550aae809c9cc4ecdaa432c7c&v=4" alt="userPic" className="userImg img-fluid"/>    
                            : 
                            <SkeletonProfile theme="light" />}

                            <div className="medListContainerContent">
                                {!loading && 
                                
                                <div>
                                    <div className="row no-gutters userNameRow">
                                        <div className="col-4" style={{position:"relative", left:"5%"}}>
                                            {renderName()}
                                        </div>
                                    </div>
                                    <div className="row no-gutters">
                                        <div className="col-3" style={{position:"relative", left:"6%"}}>
                                            {renderAge()}
                                        </div>
                                    </div>
                                </div>

                                }
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
                                <div className={!loading ? "userMedContainer" : "userMedContainer-loading"} >
                                    {!loading ? renderMeds() : [1,2].map((n) => <SkeletonArticle key={n} theme="light"/>)}
                                    {error && <div className="center">You have no meds to display</div>}                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
