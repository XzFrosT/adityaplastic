import Base from "../components/Base";
import FormKontak from "../components/FormKontak";
import Heading from "../components/Heading";
import Produk from "../components/Produk";

function Home() {
	return (
	  <Base>
	    <div className="bg-image">
	    	<div className="bg-overlay">
	    		<div className="content text-center">
	    			<h1 className="heading mb-3 myFontSize">Aditya Plastik</h1>
	    			<h3 className="heading px-2 myFontSizeTwo">Menerima orderan plastik wrapping segel gas segala ukuran mulai dari:3Kg, 12Kg, dan 50Kg.</h3>
	    		</div>
	    	</div>
	    </div>
	    
	    <div>
	    	<Heading title="Tentang Kami" className="text-center my-5 py-3"/>
	    	<div className="container">
	    		<div className="row">
	    			<div className="col-md-5 col-sm-12 mb-4">
	    				<img src="9.jpg" alt="Tentang Kami" width="100%"/>
	    			</div>
	    			
	    			<div className="col-md-7 col-sm-12 my-auto">
	    				<div className="content">
	    					<p>
	    					  Dalam kesempatan ini kami ingin menawarkan produk plastik wrapping kepada ibu / bapak.
	    					</p>
	    					<p>
	    					  Kami memproduksi sendiri produk wrapping segel gas dengan harga ekonomis
	    					</p>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    </div>
	    
	    <div>
	    	<Heading title="Produk Kami" className="text-center my-5 py-3"/>
	    	<Produk />
	    </div>
	    
	    <div id="kontakKami" className="mb-5">
	    	<Heading title="Hubungi Kami" className="text-center my-3 py-2"/>
	    	<FormKontak />
	    </div>
	  </Base>
	)
}

export default Home;