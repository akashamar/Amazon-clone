import React from 'react';
import './Product.css';
import basketblack from './icons/basketblack.png';
import { useStateValue } from './StateProvider';

function Product({id, title, image, price, rating}) {
	const [{cart}, dispatch] = useStateValue();
	
	const addToCart = () =>{
	    //dispatch the item into the data layer
		dispatch({
			type: 'ADD_TO_CART',
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		})
	}
	
	return(
		<div className='product'>
		    <div className='product_info'>
				<img src={image} alt="" /><br/>
				<div className='details'>
					<p className='title'>{title}</p>
					<div className='product_rating'>
						{Array(rating)
							.fill()
							.map((_, i) => (
							<p>⭐</p>
						))}
					</div>
					<p className='product_price'>
						<small>INR</small>
						<strong>{price}</strong>
						<small>35</small><br/>
					</p>
				</div>
				<p className='bottom'>
					<small >Ships to India</small><br/>
					<img src={basketblack} alt="" />
					<button onClick={addToCart}>Add to Cart</button>
				</p>
			</div>
		</div>
	);
}

export default Product;