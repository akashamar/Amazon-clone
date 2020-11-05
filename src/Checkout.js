import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutItems from './CheckoutItems';
import { useStateValue } from './StateProvider';

function Checkout() {
  const [{cart}, dispatch] = useStateValue();
	
  return (
	    <div className='checkout'>
		    <div className='checkout_left'>
			    <div className='heading'>
				    <h2>Shopping Cart</h2>
				</div>
				{cart.map(item => (
					<CheckoutItems
					id={item.id}
					image={item.image}
					rating={item.rating}
					price={item.price}
					title={item.title}
					/>
			    ))}
			</div>
			<div className='checkout_right'>
			    <Subtotal/>
			</div>
		</div>
    );
}
	
export default Checkout;