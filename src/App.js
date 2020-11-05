import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51HizeiGIP8VbMOyUxv8jlwUpePf9cFg4dSvQWJpFtDvgFxjIn2Olz3OwLP0Tq2AUE3xj3xCcmhlFAAxpucckBdQf00M1KYecrk');

function App() {
  const  [{}, dispatch] = useStateValue();
  
  useEffect(() => {
        auth.onAuthStateChanged(authUser => {
			console.log('the user is', authUser);
			
			if(authUser) {
				//if the user was logged in
				dispatch({
					type: 'SET_USER',
					user: authUser
				})
			} else{
				//the user is logged out
				dispatch({
					type: 'SET_USER',
					user: null
				})
			}
		})
	}, [dispatch])
	
  return (
    <Router>
		<div className="App">
		  <Switch>
		      <Route path="/login">
				  <Login/>
			  </Route>
			  <Route path="/checkout">
				  <Header/>
				  <Checkout/>
			  </Route>
			  <Route path="/payment">
				  <Header/>
				  <Elements stripe={promise}>
				    <Payment/>
				  </Elements>
			  </Route>
			  <Route path="/">
				  <Header/>
				  <Home/>
			  </Route>
		  </Switch>
		</div>
	</Router>
  );
}

export default App;
