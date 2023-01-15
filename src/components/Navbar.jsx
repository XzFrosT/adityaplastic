import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const currentTab = (history, path) => {
	if (history.pathname === path)
	{
		return {color: "#ffe500" };
	}
	else
	{
		return {color: "#fff"};
	}
}

const Navbar = () => {
	const history = useLocation();
	const [scroll, setScroll] = useState(false);
	
	window.addEventListener('scroll', () => {
		if (window.pageYOffset > 35)
		{
			setScroll(true);
		}
		else
		{
			setScroll(false);
		}
	});
	
	return (
	  <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{backgroundColor: scroll ? "#29190d" : ""}}>
	  	<div className="container-fluid my-2">
	  		<Link style={currentTab(history, '/')} className="navbar-brand heading" to="/">Aditya Plastik</Link>
	  		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">
	  			<span className="navbar-toggler-icon"></span>
	  		</button>
	  		
	  		<div className="collapse navbar-collapse" id="navbarSupportedContent">
	  			<ul className="navbar-nav ml-auto">
	  				<li className="nav-item">
	  					<Link style={currentTab(history, '/kontak')} className="navbar-brand heading" to="/kontak">Hubungi Kami</Link>
	  				</li>
	  			</ul>
	  		</div>
	  	</div>
	  </nav>
  )
}

export default Navbar;