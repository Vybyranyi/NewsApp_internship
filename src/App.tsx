import { Route, Routes } from "react-router";
import FullNewsPage from "./pages/FullNewsPage";
import LoginPage from "./pages/LoginPage";
import NewsPage from "./pages/NewsPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<NewsPage />} />
			<Route path="/news/:id" element={<FullNewsPage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage />} />
		</Routes>
	);
}

export default App;
