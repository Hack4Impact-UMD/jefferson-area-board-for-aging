/* eslint-disable react/jsx-pascal-case */
import classes from './ResetPassword.module.css';
import { ReactComponent as Logo } from '../image_6.svg';
import { useState } from 'react';

function ResetPassword() {
  const [isVisible1, setIsVisible1] = useState(true);

  const [isVisible2, setIsVisible2] = useState(true);

  const toggleVisibility2 = () => {
    setIsVisible2(!isVisible2);
  }

  const toggleVisibility1 = () => {
    setIsVisible1(!isVisible1);
  };

    return (
      <div className={classes.main_container}>
        <div className={classes.info_side}>
          <div className={classes.main_info}>
            <div className={classes.main_info_header}>Reset Password</div>
            <div className={classes.main_info_details}>We're here to help you get back into your account.</div>
            <div className={classes.main_info_details}>Create a new password to secure your account and regain access!</div>    
            <div className={classes.password_section}>
              <div className={classes.password_section_header}>New Password</div>
              <div className={classes.input_container}>
                <input type={isVisible1 ? 'text' : 'password'} className="input_val" placeholder='Enter a new password' />
                <button className={classes.visible_input} onClick={toggleVisibility1}>
                  {isVisible1?
                  <img src='https://www.svgrepo.com/show/380010/eye-password-show.svg' className={classes.eye_img} alt='bruh'/> :
                  <img src='https://www.svgrepo.com/show/380007/eye-password-hide.svg' className={classes.eye_img} alt='bruh'/>}
                </button>
              </div>
            </div>
            <div className={classes.password_section}>
              <div className={classes.password_section_header}>Confirm Password</div>
              <div className={classes.input_container}>
                <input type={isVisible2 ? 'text' : 'password'} className="input_val" placeholder='Re-enter a new password'/>
                <button className={classes.visible_input} onClick={toggleVisibility2}>
                {isVisible2?
                  <img src='https://www.svgrepo.com/show/380010/eye-password-show.svg' className={classes.eye_img} alt='bruh'/> :
                  <img src='https://www.svgrepo.com/show/380007/eye-password-hide.svg' className={classes.eye_img} alt='bruh'/>}
                </button>
              </div>
            </div>
            <button className={classes.reset_button} onClick={() => window.open('https://www.google.com', '_blank')}>Reset and Login</button>
            </div>
          </div>
          <div className={classes.image_container}>
            <Logo className={classes.svg_image}/>
          </div>
      </div>
    )
  }


export default ResetPassword