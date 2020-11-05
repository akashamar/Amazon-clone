import React, {useState}  from 'react';
import "./Slider.css";
import Imgcomp from './Imgcomp';
import slider from './icons/slider.jpg';
import slider2 from './icons/slider2.jpg';
import slider3 from './icons/slider3.jpg';
import slider4 from './icons/slider4.jpg';
import slider5 from './icons/slider5.jpg';
import slider6 from './icons/slider6.jpg';

function Slider() {
	let sliderArr = [<Imgcomp src={slider}/>,
							    <Imgcomp src={slider2}/>, 
								<Imgcomp src={slider3}/>,
								<Imgcomp src={slider4}/>, 
								<Imgcomp src={slider5}/>,
								<Imgcomp src={slider6}/>];
	const [x, setX] = useState(0);
	
	const goLeft = () => {  
	    x === 0 ?  setX(-100*(sliderArr.length - 1)) : setX(x + 100);
	}
	
	const autoSlide = () => {
	    x === -100*(sliderArr.length - 1) ? goLeft() : setX(x - 100);
	}
	
	//sliding the image for every 4sec
	setTimeout(autoSlide, 4000);
	
	return (
		<div className='slider'>
		    {sliderArr.map((item,index) => {
			    return(
				    <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
					    {item}
					</div>
				);
			})}
		</div>
	);
	
}
	
export default Slider;