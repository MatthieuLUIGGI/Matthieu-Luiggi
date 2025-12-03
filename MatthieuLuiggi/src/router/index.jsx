import { Routes, Route } from "react-router-dom";

import Home from "../page/Home";
import AteliersPratique from "../page/AtelierPratique";
import Contact from "../page/Contact";

export default function AppRouter() {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/" element={<Home />} />
			<Route path="/ateliers-pratique" element={<AteliersPratique />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>
	);
}
