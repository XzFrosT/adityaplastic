import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home";
import Kontak from "./pages/Kontak";
import Wa from "./pages/Wa";

function App() {
  return (
    <BrowserRouter>
    	<Routes>
    		<Route exact path="/" element={<Home />} />
    		<Route exact path="/kontak" element={<Kontak />} />
    		<Route exact path="/wa" element={<Wa />} />
    	</Routes>
    </BrowserRouter>
  );
}

export default App;