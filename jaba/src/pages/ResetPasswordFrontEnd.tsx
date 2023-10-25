import classes from './ResetPasswordFrontEnd.module.css';

function ResetPassword() {
    return (
      <div className={classes.content}>
      <div className={classes.info_side}>
        <div className={classes.main_info}>
          <div className={classes.main_info_header}>Reset Password</div>
          <div className={classes.main_info_details}>We're here to help you get back into your account.</div>
          <div className={classes.main_info_details}>Create a new password to secure your account and regain access!</div>    
          <div className={classes.password_section}>
            <div className={classes.password_section_header}>New Password</div>
            <input type="text" placeholder='Enter a new password'/>
          </div>
          <div className={classes.password_section}>
            <div className={classes.password_section_header}>New Password</div>
            <input type="text" placeholder='Enter a new password'/>
          </div>
          <button onClick={() => window.open('https://www.google.com', '_blank')}>Reset and Login</button>
        </div>
      </div>
      </div>
    )
  }


export default ResetPassword