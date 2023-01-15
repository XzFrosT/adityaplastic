import Base from "../components/Base";
import Card from "../components/Card";
import FormKontak from "../components/FormKontak";
import Heading from "../components/Heading";
import Data from "../plastik-data/data";

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
	    						Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus consequatur corporis distinctio accusamus nulla, laudantium totam beatae veritatis expedita asperiores, id voluptas omnis facilis earum aperiam dolore reiciendis et placeat accusantium, doloribus voluptatum! Debitis cum omnis consectetur sapiente itaque non quaerat reiciendis nemo hic, veritatis magni, culpa quam voluptates natus.
	    					</p>
	    					<p>
	    						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium eligendi voluptatem minima necessitatibus maiores asperiores, id repellat ratione ex ut amet vero, similique culpa distinctio.
	    					</p>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    </div>
	    
	    <div>
	    	<Heading title="Galeri Kami" className="text-center my-5 py-3"/>
	    	<div className="container">
	    		<div className="row justify-content-center">
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
	    </div>
	    
	    <div id="kontakKami" className="mb-5">
	    	<Heading title="Hubungi Kami" className="text-center my-3 py-2"/>
	    	<FormKontak />
	    </div>
	  </Base>
	)
}

export default Home;