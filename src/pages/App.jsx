// pages/App.jsx;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header.jsx";
import HomePage from "./HomePage";
import ProjectPage from "./ProjectPage.jsx";
import AboutPage from "./AboutPage.jsx";
import ContactPage from "./ContactPage.jsx";

function App() {
	return (
		<BrowserRouter>
			<>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/projects" element={<ProjectPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/contact" element={<ContactPage />} />
				</Routes>
			</>
		</BrowserRouter>
	);
}

export default App;
