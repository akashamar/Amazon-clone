import React from 'react';
import { useStateValue } from './StateProvider';

function CheckoutItems({id, image, price, rating, title}) {
	const [{cart}, dispatch] = useStateValue();
	
	const removeFromCart = () => {
        //remove the item from the cart
		dispatch({
			type: 'REMOVE_FROM_CART',
			id: id,
		})
    }
	
	return(
		<div className='checkout_card'>
			<div className='card_left'>
				<img 
				src={image}
				alt=""
				/>
			</div>
			<div className='card_center'>
				<h2>
					{title}
				</h2>
				<div className='product_rating'>
				{Array(rating)
				   .fill()
					.map((_, i) => (
					<p>⭐</p>
				))}
				</div>
				<button onClick={removeFromCart}>Remove From Cart</button>
			</div>
			<div className='card_right'>
				<div className='product_price'>
					<h2>INR {price}</h2>
				</div>
			</div>
		</div>
	);
}

export default CheckoutItems;