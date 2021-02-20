import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NavBarComponent from '../NavBar/NavBarComponent';
import './mfaEnroll.css';

export default function MFAEnrollComponent(props) {

    const [qrImage, setQRImage] = useState("https://via.placeholder.com/150")
    const [mfaCode1, setMFACode1] = useState('')
    const [mfaCode2, setMFACode2] = useState('')
    const mfaQRCode = useSelector(state => state.mfaQRCode)
    const history = useHistory()

    const { tvClient, newDoctorId, newDoctor } = props.location.state

    const resetFields = () => {
        setMFACode1('')
        setMFACode2('')
    }

    const submitMFAEnrollment = async (event, mfaCode1, mfaCode2) => {
        event.preventDefault()
        console.log("Submit MFA clicked")
        console.log('Doctor ID: ', newDoctorId)
        console.log("ID type: ", typeof newDoctorId)
        console.log('MFA Code 1: ', mfaCode1)
        console.log('MFA Code 2: ', mfaCode2)
        try {
          console.log("Now attempting to finalize MFA.....")
          await tvClient.finalizeMfaEnrollment(newDoctorId, mfaCode1, mfaCode2)
          newDoctor.mfa_enrolled = true;
          console.log('Newly enrolled doctor: ', newDoctor)
          resetFields()
          alert("Congratulations! You have successfully registered with myMedsRec!")
          history.push('/tracked')
        } catch (error) {
            console.log('An error occurred while finalizing MFA enrollment: ', error)
            resetFields()
            alert('Sorry. An error occurred while finalizing your MFA enrollment. Please double check your input values and make sure they are correct. If the problem persists, please try again later or contact us at support@MyMedsRec.com')
        }
    }

    useEffect(() => {
        setQRImage(mfaQRCode);
        console.log("mfa client: ", tvClient)
    }, [mfaQRCode])

    return (
        <div className="mfaEnrollComponent">
            <NavBarComponent />
            <div className="row no-gutters justify-content-center" style={{width: '100vw', height: '90vh'}}>
                <div className="mfaEnrollBlock col-9" style={{height: '80%', textAlign: 'center'}}>
                    <h5>Thank you for signing up! You're just about done! In order to complete your registration, please scan the QR code presented below with your authenticator then submit the two MFA codes generated.</h5>
                    {
                        qrImage == "https://via.placeholder.com/150" ?
                        <img className="mt-4" src={qrImage} alt=""/>
                    :
                        <img style={{maxWidth: '50%'}} src={`data:image/svg+xml;base64,${btoa(qrImage)}`}></img>
                    }
                    <div className="row no-gutters justify-content-center" style={{width: "100%", marginTop:'6%'}}>
                        <div className="col-11">
                            <form>
                                <div>
                                    <div className="form-group">
                                        <input onChange={e => setMFACode1(e.target.value)} value={mfaCode1} type="text" className="form-control" style={{fontFamily: "FontAwesome"}} placeholder="MFA Code #1"/>
                                    </div>
                                    <div className="form-group">
                                        <input onChange={e => setMFACode2(e.target.value)} value={mfaCode2} type="text" className="form-control" style={{fontFamily: "FontAwesome"}} placeholder="MFA Code #2" />
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-10">
                                        <button onClick={ (event) => submitMFAEnrollment(event, mfaCode1, mfaCode2) } type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
