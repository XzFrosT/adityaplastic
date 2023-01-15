import React from 'react';

const FormKontak = () => {
	return (
	  <div className="form container">
	  	<div className="row align-items-center ">
	  		<div className="col-md-6  p-5 my-auto">
	  			<img src="12.jpg" alt="" width="100%"/>
	  		</div>
	    	
	    	<div className="col-md-6 col-sm-12 px-4 mx-auto">
	    		<form name='kontak' action="/wa">
	    			<input type='hidden' name='form-name' value='contact' />
	    			<input type="text" placeholder="Nama Anda" required name="nama" />
	    			<textarea cols="30" rows="7" placeholder="Ketik Pesan" required name="pesan"></textarea>
	    			<button>Kirim</button>
	    		</form>
	    	</div>
	    </div>
	  </div>
	)
}

export default FormKontak;