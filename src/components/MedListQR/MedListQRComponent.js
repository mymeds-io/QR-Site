import React, { useEffect } from 'react';
import NavBarComponent from '../NavBar/NavBarComponent';
import './medList.css';
import SkeletonProfile from '../Skeletons/SkeletonProfile';
import SkeletonArticle from '../Skeletons/SkeletonArticle';
import {useParams} from "react-router-dom";
import useFetchMedsQR from '../../functions/useFetchMedsQR';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


export default function MedListQRComponent(props) {

    const dispatch = useDispatch();
    const history = useHistory()
    const viewUserId = useSelector(state => state.viewUserId)
    const isLogged = useSelector(state => state.isLogged)

    let { id, token } = useParams();
    
    const {meds, loading, error} = useFetchMedsQR( id, viewUserId )
    const { firstName, lastName, userPhoto } = props.location.state
    const age = 31
    const name = `${firstName} ${lastName}`

    useEffect( async () => {

        if(!isLogged){
            await dispatch({ type: "ADD_PT", payload: {ptId: id, ptToken: token } })
            alert("You need to be signed in to see this patient's medications")
            history.push('/')
        }

        if(meds && meds.length > 0){
            console.log("Here are the pt's meds: ", meds);
        }

    }, [])

    let dummyImage = "https://www.meijer.com/content/dam/meijer/product/0030/04/5044/90/0030045044905_2_A1C1_0600.png"
    

    const renderMeds = () => {
        if(meds && meds.length > 0){
            return meds.map((med) => {
                return (
                <div className="row no-gutters medsRow justify-content-center mt-3">
                    <div className="col-1" style={{position:"relative", right:"1vw"}}>
                        <img className="img-fluid" src={dummyImage} alt="medPic"/>
                    </div>
                    <div className="col-8" style={{position:"relative", left:"1vw", top:"1vh"}}>
                        <div className="row no-gutters">
                            <div className="col-12">
                                <div className="medName">{med.name}</div>
                            </div>
                            <div className="col-12">
                                <div className="medDirections">{med.notes}</div>
                            </div>
                            <div className="col-5" style={{display:"flex", justifyContent:"center"}}>
                                <div className="medRefill" style={{position:"relative", right:"1vw"}}><i className="fa fa-share" style={{fontWeight:"700"}} aria-hidden="true">{"11/30/24"}</i></div>
                            </div>
                            <div className="col-5" style={{display:"flex", justifyContent:"center"}}>
                                <div className="medExp" style={{position:"relative", right:"10%"}}><i className="fa fa-ban" style={{fontWeight:"700"}} aria-hidden="true">{"12/31/25"}</i></div>
                            </div>
                        </div>
                    </div>
                </div>)
            })
        }
        else if(meds.length < 1 && !error){
            return (
                <div className="errorMedsText" style={{width: '80%'}}>Your patient "{name}" currently has 0 meds that he/she is tracking</div>
            )
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
                            <img src={userPhoto} alt="userPic" className="userImg img-fluid"/>    
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
                                    {error && <div className="errorMedsText"> An error occurred while retrieving {name}'s medications </div>}                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
