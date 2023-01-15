import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { NomorWhatsApp } from "../plastik-data/data";

function Wa() {
	const params = useLocation();
	const query = new URLSearchParams(params?.search);
	const pesan = encodeURIComponent(query.get("pesan"));
	
	useEffect(() => {
		window.location.replace(`https://wa.me/${NomorWhatsApp}?text=${pesan ?? ""}`);
	}, [ pesan ]);
	
	return (
		<p>melanjutkan ke WhatsApp...</p>
	)
}

export default Wa;