import React, {useState, useEffect, useRef} from 'react';
import './Payment.css';
import CheckoutItems from './CheckoutItems';
import { getCartTotal } from './reducer';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import CurrencyFormat from 'react-currency-format';

function Payment() {
  const [{cart, user}, dispatch] = useStateValue();
  const history = useHistory();
  const paypal = useRef()
  
  useEffect(() => {
	    window.paypal.Buttons({
			createOrder: (data, actions, err) => {
				return actions.order.create({
					intent: "CAPTURE",
					purchase_units: [
						{
							description: "cool looking table",
							amount: {
								currency_code: "INR",
								value: getCartTotal(cart)
							}
						}
					]
				})
			},
			onApprove: async (data, actions) => {
			    const order = await actions.order.capture();
			console.log(order)
			},
			onError: (err) => {
			    console.log(err)
			}
		}).render(paypal.current)
	}, [])
	
  return (
	    <div className='payment'>
		    <div className='payment_heading'>
	            <h1>Checkout({cart.length} items)</h1>
	        </div>
			<div className='payment_body'>
				<div className='payment_top'>
					<h2>Deliver Address</h2>
					<div className='address'>
						<h3>123 React Lane</h3>
						<h3>Los Angeles ,CA</h3>
					</div>
				</div>
				<div className='payment_center'>
					<h2>Review items and delivery</h2>
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
				<div className='payment_bottom'>
				    <div className='address1'>
					    <h2>Payment Method</h2>
						<CurrencyFormat
								renderText={(value) => (
								<h2>Order Total : {value}</h2>
								)}
								decimalScale={2}
								value={getCartTotal(cart)}
								displayType={"text"}
								thousandSeparator={true}
								prefix={"INR "}
							/>
					</div>
					<div className='address'>
					    <form className='payment_stripe'>
						    <div className='paypal' ref={paypal}></div>
						</form>
					</div>
				</div>
			</div>
	    </div>
    );
}

export default Payment;