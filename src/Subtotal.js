import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getCartTotal } from './reducer';
import { Link, useHistory } from 'react-router-dom';

function Subtotal() {
	const history = useHistory();
    const [{cart}, dispatch] = useStateValue();
	
	return(
		<div className='subtotal'>
		    <CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({cart.length} items) : <br/>
							<strong>{value}</strong>
						</p>
						<small className='subtotal_gift'>
							<input type='checkbox' />This order contains a gift
						</small>
					</>
				)}
				decimalScale={2}
				value={getCartTotal(cart)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"INR "}
			/>
			<button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
		</div>
	);
}
	
export default Subtotal;