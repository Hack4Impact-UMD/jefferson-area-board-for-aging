import { useState, useEffect } from 'react';
import './RequestAccountPage.css';
import ConfirmationPage from './RequestAccountConfirmation';
const RequestAccountPage = () => {
  
  return (
    <div className="request-page">
      <div className="request-header">

        <h1 className="req-title">Request for Account</h1>

        <div id="format-header">
          <p className = "req-text">
            To request an account, please fill 
            out the form below with your details and requirements. 
            An administrator will review your request and create 
            your account accordingly.
          </p>
        </div>

        <form>
          <div className="fields">
            <div className="req-entry" style={{gridArea:'fullname'}}>
              <p>Full name</p>
              <textarea className = "input-text" placeholder='Enter your full name'></textarea>
            </div>

            <div className="req-entry" style={{gridArea: 'email'}}>
              <p>Email</p>
              <textarea className = "input-text" placeholder='Enter your email linked to your account'></textarea>
            </div>

            <div className="req-entry" style={{gridArea: "phone"}}>
              <p>Phone</p>
              <textarea className = "input-text" placeholder='Enter your phone number'></textarea>
            </div>

            <div className="req-entry" style={{gridArea: "organization"}}>
              <p>Organization</p>
              <textarea className = "input-text" placeholder="Enter your organization's name"></textarea>
            </div>

            <div className="req-entry" style={{gridArea: "position"}}>
              <p>Position at Organization</p>
              <textarea className = "input-text" placeholder='Enter your role'></textarea>
            </div>

            <div className="req-entry" style={{gridArea:"address"}}>
              <p>Address</p>
              <textarea className = "input-text" placeholder='Enter your residential address'></textarea>
            </div>

            <div className="req-options" style={{gridArea:"create"}}>
              <div style={{display: "flex", alignItems: "center"}}>
                <p>Create Account as:</p>
                <button className ="reg-btn">Admin</button>
                <button className ="reg-btn">User</button>
              </div>
            </div>

            <div className="req-options" style={{gridArea:"priority"}}>
              <div style={{display: "flex", alignItems: "center"}}>
                <p>Priority:</p>
                <button className="reg-btn">Regular</button>
                <button className="reg-btn">Urgent</button>
              </div>
            </div>

            <div className="req-entry" style={{gridArea:"additional"}}>
              <p>Additional Information</p>
              <textarea className = "input-text" placeholder='Use this space to enter any extra information or specific requirements they have for the account.'></textarea>
            </div>

            <div className="submit" style={{gridArea:"submit_btn"}}>
              <button type = "submit" className="submit-response">Submit Request</button>
            </div>
          </div>
        </form>
      </div>
      <ConfirmationPage/>
    </div>
  );
};

export default RequestAccountPage;
