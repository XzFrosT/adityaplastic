import React from 'react';

import Base from "../components/Base";
import FormKontak from "../components/FormKontak";
import Heading from "../components/Heading";
import Produk from "../components/Produk";

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
	  		<Heading title="Produk Kami" className="text-center my-5 py-3"/>
	  		<Produk />
	  	</div>
	  </Base>
	)
}

export default Contact;