import React from 'react';

function TrackedPtComponent(){

    return(
        <div className="row no-gutters justify-content-center" style={{width:"100%", height:"15%"}}>
            <div className="col-11" style={{height:"100%", backgroundColor:"blue"}}>
                <div className="row no-gutters" style={{width:"100%", height:"100%"}}>
                    <div className="col-2 ptImage d-flex" style={{height:"100%", backgroundColor:"red", alignItems:"center", justifyContent:"center", textAlign:'center'}}>
                        {"Add pt image"}
                    </div>
                    <div className="col-5 ptNameAndTime d-flex" style={{height:"100%", backgroundColor:"yellow", justifyContent:"center", flexDirection:"column"}}>
                        <div className="row no-gutters">
                            <div className="col-12" style={{backgroundColor:"blue", paddingLeft:'2vw'}}>
                                {"Pt Name"}
                            </div>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-12" style={{backgroundColor:"blue", paddingLeft:'2vw'}}>
                                {"Last updated"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrackedPtComponent;