import { Route, Routes } from "react-router";
import FullNewsPage from "./pages/FullNewsPage";
import NewsPage from "./pages/NewsPage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<NewsPage />} />
			<Route path="/news/:id" element={<FullNewsPage />} />
		</Routes>
	);
}

export default App;
