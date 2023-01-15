import React from 'react';
import Navbar from './Navbar';

const Year = new Date().getFullYear();

const Base = ({ className="", children }) => (
  <div>
  	<div><Navbar /></div>
  	<div className="">
  		<div className={className}>
  			<div>{children}</div>
  		</div>
  	</div>
  	
  	<footer className=" coffeeBG footer py-4">
  		<div className="container-fluid " >
  			<div className="row text-white" style={{fontSize: "14px", letterSpacing: "1.4px"}}>
  				<div className="col-sm-12 col-md-6 footerText">Copyright © {Year} All rights reserved</div>    
  			</div>
  		</div>
  	</footer>
  </div>
)

export default Base;