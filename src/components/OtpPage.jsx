import React from 'react';
import "./otp.css";
import grid from "../assets/grid.png"
import chart from "../assets/chart.png"

function OtpPage() {
    // variables to store 4 digit otp
    let firstDigit = "";
    let secondDigit = "";
    let thirdDigit = "";
    let forthDigit = "";
    // to handle otp form on submit button
    const handleOTP = (e) => {
        e.preventDefault();
        firstDigit = e.target[0].value;
        secondDigit = e.target[1].value;
        thirdDigit = e.target[2].value;
        forthDigit = e.target[3].value;
        console.log(firstDigit, secondDigit, thirdDigit, forthDigit)
    }
    // to handle reset otp field 
    const handleReEnter = () => {
        firstDigit = "";
        secondDigit = "";
        thirdDigit = "";
        forthDigit = "";
        console.log(firstDigit, secondDigit, thirdDigit, forthDigit);
        document.getElementById("otpform").reset();
    }
    return (
        <div className='otppage'>
            <div className="otpContent">
                <div className="logo">LOGO</div><br /><br />
                <div className="verification">Verification</div><br />
                <div className="otpnumber">
                    <div className="smsotp">SMS OTP</div>
                    <div className="otpOn">sent-on: 9155395918</div>
                </div>
                <form onSubmit={handleOTP} id='otpform'>
                    <input type="number" required maxLength="1" className='otpinput' />
                    <input type="number" required maxLength="1" className='otpinput' />
                    <input type="number" required maxLength="1" className='otpinput' />
                    <input type="number" required maxLength="1" className='otpinput' /><br /><br />
                    <div className='re-Enter'>
                        <span className='wrongdetail'>Entered Wrong Details? </span>
                        <span className='reEnter' onClick={() => { handleReEnter() }}> Re-enter</span>
                    </div><br />
                    <button type='submit' className='verifybtn'>Verify</button>
                </form><br />
                <div className="backHome">Go back to home</div>
            </div>
            <div className="otpCharts">
                <img src={grid} alt="Loading...." className='otpgridimg' />
                <img src={chart} alt="Loading...." className='otpchartimg' />
            </div>
        </div>
    )
}

export default OtpPage