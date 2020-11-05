import React, {useState} from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import  { auth } from './firebase';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  
  //firebase registration
  const signIn = e => {
       e.preventDefault();
	   
	   auth
	        .signInWithEmailAndPassword(email,password)
			.then((auth) => {
			   history.push('/');
			})
			.catch(error => alert(error.message))
    }

  const register = e => {
       e.preventDefault();
	   
	   auth
	        .createUserWithEmailAndPassword(email,password)
			.then((auth) => {
			    //successful creates the user 
				if (auth) {
				    history.push('/')	
				}
			})
			.catch(error => alert(error.message))
    }
  
  return (
		<div className='login'>
		    <Link to='/'>
				<img
				className='login_logo'
				src="https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png?resize=740%2C204"
				alt=""
				/>
			</Link>
			<form>
				<div className='login_card'>
					<div className='login_details'>
						<div className='login_heading'>
							<h2>Sign-In</h2>
						</div>
						<div className='email' value={email} 
						onChange={e => setEmail(e.target.value)}>
							<h3>Email</h3>
							<input type='text'/>
						</div>
						<div className='password' value={password} 
						onChange={e => setPassword(e.target.value)}>
							<h3>Password</h3>
							<input type='password'/>
						</div>
						<div className='login_button'>
							<button type='submit' onClick={signIn}>Login</button>
						</div>
					</div>
					<div className='create_account'>
						<button onClick={register}>Create your Amazon account</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default Login;
