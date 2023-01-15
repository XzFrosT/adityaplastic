import React from 'react';

const Card = ({src}) => {
	return (
	  <div className="text-center">
	  	<div className="px-2">
	  		<img src={src} alt="" width="100%" height="200vh"/>
	  	</div>
	  </div>
	)
}

export default Card;