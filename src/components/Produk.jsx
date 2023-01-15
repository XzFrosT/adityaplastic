import React from 'react';

import Card from "./Card";
import Data from "../plastik-data/data";

const Produk = ({src, name, weight, description}) => {
	return (
	  <div className="container">
	    <div className="row justify-content-center">
	      {Data.map((img, index) => {
	      return (
	        <div key={index} className="col-md-3 col-sm-6 mb-2">
	    		  <Card
	    			  src={img}
	    			/>
	    		</div>
	    	)
	    	})}
	    </div>
	  </div>
	)
}

export default Produk;