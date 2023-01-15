import React from 'react';

import Card from "./Card";
import Data from "../plastik-data/data";

const Produk = ({src, name, weight, description}) => {
	return (
	  <div className="container">
	    <div className="row justify-content-between">
	    			{Data.map(({name, src, weight}, index) => {
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
	)
}

export default Produk;