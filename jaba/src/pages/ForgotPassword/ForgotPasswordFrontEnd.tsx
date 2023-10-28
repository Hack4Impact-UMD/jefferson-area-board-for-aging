import classes from './ForgotPasswordFrontEnd.module.css';

function ForgotPassword() {
    return (
      <div className={classes.content}>
      <div className={classes.info_side}>
        <div className={classes.main_info}>
          <div className={classes.main_info_header}>Forgot your password?</div>
          <div className={classes.main_info_details}>Enter the email address associated with your account, and we'll send you a link to reset your password.</div>    
          <div className={classes.email_section}>
            <div className={classes.email_section_header}>Email</div>
            <input type="text" placeholder='Enter your email linked to your account'/>
          </div>
          <button onClick={() => window.open('https://www.google.com', '_blank')}>Send Reset Link</button>
          <div className={classes.login_section}>
            <div className={classes.login_section_context}>Log in using another email?  <a href='https://www.google.com'>Log in here</a></div>
          </div>
        </div>
      </div>
      </div>
    )
  }


export default ForgotPassword