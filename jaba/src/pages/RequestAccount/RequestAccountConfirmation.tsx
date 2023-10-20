import { useState, useEffect } from 'react';
import './RequestAccountConfirmation.css';

const ConfirmationPage = () => {
    return (
        <div className="confirmation-outer">
            <div className="confirmation-inner">
                <h1 className="confirmation-header">Request Submitted Successfully!</h1>
                <p className="confirmation-text">
                    Please allow a few business days for our admin to process your application. 
                    Keep an eye on your email for any additional information or questions from our admins
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="26" viewBox="0 0 40 26" fill="none">
                    <path d="M39.1429 0.755411C38 -0.251804 36.2857 -0.251804 35.1429 0.755411L13.7143 19.6407L4.85714 11.8348C3.71428 10.8276 2 10.8276 0.857143 11.8348C-0.285714 12.842 -0.285714 14.3528 0.857143 15.36L11.7143 24.9286C12.2857 25.4322 12.8571 25.684 13.7143 25.684C14.5714 25.684 15.1429 25.4322 15.7143 24.9286L39.1429 4.28067C40.2857 3.27345 40.2857 1.76263 39.1429 0.755411Z" fill="black"/>
                </svg>
                <p className="another-req">Submit another request? <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" style={{color:"#000"}}>Click here</a></p>
            </div>
        </div>
    )
}

export default ConfirmationPage