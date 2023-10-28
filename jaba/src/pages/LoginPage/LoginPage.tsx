import classes from './LoginPage.module.css';
import {useState} from 'react';
import { signInUser } from '../../backend/authentication/AuthenticationFunctions';
import { useAuth } from '../../UserContext/UserContext';

function LoginPage() {
    const [email, setEmail] = useState('me@example.com');
    const [password, setPassword] = useState('123');
    const { logIn } = useAuth();

   const EmailChange = (event: any) => {
    setEmail(event.target.value);
   }

   const PasswordChange = (event: any) => {
    setPassword(event.target.value);
   }

    const handleLogin = (event: any) => {
      event.preventDefault();
      signInUser(email, password)
        .then(userProfile => {
          if (userProfile) {
            logIn(userProfile); 
          } else {
            alert("Incorrect username or password")
          }
        });
    }

    return (
      <div >
        <div >
          <h1>Login as Admin or User</h1>
          <form>
            <input className={classes.input} onChange={EmailChange} value={email} type="email" id="email" name="email" placeholder="me@example.com"/>
            <input className={classes.input} onChange={PasswordChange} value={password} type="password" id="password" name="password" placeholder="••••••••••" />
            <button name="Submit" onClick={handleLogin} value="Submit" className={classes.buttonOne}>Login</button>
            <button name="Request" value="Request" className={classes.buttonTwo}>Request for account</button>
          </form>
        </div>
      </div>
    )
  }


export default LoginPage
  