import React from 'react';
import './Header.css';
import basket from './icons/basket.png';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth} from './firebase.js';

function Header() {
	const [{cart, user}, dispatch] = useStateValue();
	
	const handleAuthenticaton = () => {
	    if(user) {
		    auth.signOut()
		}
	}
	
	
	return (
		<div className="header" >
		    <Link to="/">
				<div className='header_logo'>
					<img className='header_Img'  src="https://1079life.com/wp-content/uploads/2018/12/amazon_PNG11.png" alt="" />
				</div>
			</Link>
			<div className='header_search'>
			    <input className='header_input' type="search" />
			    <img src="https://static.thenounproject.com/png/1377017-200.png" alt="" />
			</div>
			<div className='header_options'>
			    <Link to={!user && '/login'}>
					<div className='option option1' onClick={handleAuthenticaton}>
						<span className='light'>Hello, {user? user.email : 'guest'}</span><br/>
						<span>{user? 'Sign Out' : 'Sign In'}</span>
					</div>
				</Link>
				<div className='option'>
				    <span className='light'>Returns</span><br/>
					<span>& Orders</span>
				</div>
				<Link to="/checkout">
				    <div className='hoverborder'>
						<div className='option2'>
							<span className='basket_count'>{cart?.length}</span>
							<div className='basket'>
								<img src={basket} alt="" />
							</div>
							<span className='cart'>Cart</span>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;