import React from 'react';

import Base from "../components/Base";
import FormKontak from "../components/FormKontak";
import Heading from "../components/Heading";
import Card from "../components/Card";
import Data from "../plastik-data/data";

function Contact() {
	return (
	  <Base>
	  	<div className="bg-image-contact">
	  		<div className="bg-overlay">
	  			<div className="content text-center"></div>
	  		</div>
	  	</div>
	  	
	  	<div id="hubungiKami" className="my-5">
	  		<Heading title="Hubungi Kami" className="text-center my-3 py-2"/> 
	  		<FormKontak />
	  	</div>
	  	
	  	<div>
	  		<Heading title="Galeri Kami" className="text-center my-5 py-3"/>
	  		<div className="container">
	  			<div className="row justify-content-center">
	  				{Data.slice(0, 4).map(({name, src, weight}, index) => {
	  				return (
	  				  <div className="col-md-3 col-sm-6 mb-5">
	  				  	<Card
	  				  	  name={name}
	  				  	  src={src}
	  				  	  weight={weight}
	  				  	/>
	  				  </div>
	  				)
	  				})}  
	  			</div>
	  		</div>
	  	</div>
	  </Base>
	)
}

export default Contact;