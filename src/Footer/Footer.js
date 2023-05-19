import { useEffect, useState } from 'react';
import './Footer.css';

function Footer() {

	const [getInTouchAddress, setGetInTouchAddress] = useState();
	const [getInTouchCity, setGetInTouchCity] = useState();
	const [getInTouchState, setGetInTouchState] = useState();
	const [getInTouchPostalCode, setGetInTouchPostalCode] = useState();
	const [getInTouchPhone, setGetInTouchPhone] = useState();
	const [getInTouchEmail, setGetInTouchEmail] = useState();

	async function fetchData() {
		const response = await fetch('https://dummyjson.com/users/1');
		const data = await response.json();
		setGetInTouchAddress(data.address.address);
		setGetInTouchCity(data.address.city);
		setGetInTouchState(data.address.state);
		setGetInTouchPostalCode(data.address.postalCode);
		setGetInTouchPhone(data.phone);
		setGetInTouchEmail(data.email);
	}

	useEffect(() => {
		fetchData();
	}, [])

	return (
		<div className='footer'>
			<div className="contact-details">
				<div className='address'>Address:<br></br>{getInTouchAddress},<br></br>{getInTouchCity}, {getInTouchState} - {getInTouchPostalCode}</div>
				<div className='contact'>
					<div>{getInTouchPhone}</div>
					<div>{getInTouchEmail}</div>
				</div>
			</div>
			<div className='copy-rights'>
				<span>© 2023 Devski | Online Education Learning Platform</span>
				<span className='developed-by'>Developed by Sonia Ananthoju</span>
			</div>
		</div>
	);
}

export default Footer;