import React from 'react';
import './Home.css';
import Product from './Product';
import Slider from './Slider';

function Home() {
	return(
		<div className='home'>
		    <div className='home_container'>
			    <Slider/>
			</div>
			<div className='home_row'>
			    <Product
				title='SONY PlayStation 4 Slim 1TB Console, Light & Slim PS4 System, 1TB Hard Drive, All the Greatest Games, TV, Music & More'
				image='https://m.media-amazon.com/images/I/61OL2zIliML._AC_UY218_.jpg'
				price={30657}
				rating={5}
				id={18601107}
				/>
				<Product
				title='Samsung Galaxy A20S w/Triple Cameras (32GB, 3GB RAM) 6.5" Display, Snapdragon 450, 4000mAh Battery, US & Global 4G LTE d'
				image='https://m.media-amazon.com/images/I/31DVClA7BaL._AC_UY218_.jpg'
				price={13402}
				rating={4}
				id={18601108}
				/>
				<Product
				title='New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage) - Space Gray'
				image='https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY218_.jpg'
				price={169384}
				rating={5}
				id={18601109}
				/>
				<Product
				title='Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa voice control - Black'
				image='https://images-na.ssl-images-amazon.com/images/I/41jSuUHT8eL._AC_US160_.jpg'
				price={15013}
				rating={4}
				id={186011010}
				/>
			</div>
			<div className='home_row'>
			    <Product
				title='New Apple iPhone 12 (64GB, Black) [Locked] + Carrier Subscription'
				image='https://m.media-amazon.com/images/I/71fVoqRC0wL._AC_UY218_.jpg'
				price={4236}
				rating={5}
				id={18601111}
				/>
				<Product
				title='Fitbit Versa 2 Health and Fitness Smartwatch with Heart Rate, Music, Alexa Built-In, Sleep and Swim Tracking, Petal/Copper Rose, '
				image='https://m.media-amazon.com/images/I/61iqvrkk3nL._AC_UY218_.jpg'
				price={13861}
				rating={4}
				id={18601112}
				/>
				<Product
				title='Nikon D3500 W/ AF-P DX NIKKOR 18-55mm f/3.5-5.6G VR Black'
				image='https://m.media-amazon.com/images/I/71TSinb4usL._AC_UL320_.jpg'
				price={38278}
				rating={4}
				id={18601113}
				/>
				<Product
				title='Optimum Nutrition Gold Standard 100% Whey Protein Powder, Vanilla Ice Cream, 2 Pound (Packaging May Vary)'
				image='https://m.media-amazon.com/images/I/81daniSBS7L._AC_UL320_.jpg'
				price={6500}
				rating={4}
				id={18601114}
				/>
			</div>
			<div className='home_row'>
			    <Product
				title='SKIPPY SUPER CHUNK Extra Crunchy Peanut Butter, 64 Ounce'
				image='https://m.media-amazon.com/images/I/81Igy-RUagL._AC_UL320_.jpg'
				price={614}
				rating={5}
				id={18601115}
				/>
				<Product
				title='OnePlus 7 Pro GM1925, 8GB RAM + 256GB Memory, Sprint + GSM LTE Unlocked - Nebula Blue. '
				image='https://m.media-amazon.com/images/I/71GbQ+8Ki0L._AC_UY218_.jpg'
				price={38436}
				rating={4}
				id={18601116}
				/>
				<Product
				title='CHUWI HeroBook Pro 14.1 inch Windows 10 Laptop PC, 8G RAM / 256GB SSD with 1080P Display, Intel Gmini Lake N4000'
				image='https://m.media-amazon.com/images/I/71jDooDQHpL._AC_UY218_.jpg'
				price={23031}
				rating={4}
				id={18601117}
				/>
				<Product
				title='Sony X950H 65 Inch TV: 4K Ultra HD Smart LED TV with HDR and Alexa Compatibility '
				image='https://m.media-amazon.com/images/I/61AZHTzK-dL._AC_UL320_.jpg'
				price={103741}
				rating={4}
				id={18601118}
				/>
			</div>
		</div>
	);
}

export default Home;