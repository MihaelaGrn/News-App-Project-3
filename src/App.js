import Header from "./components/Header";
import Footer from "./components/Footer";
import Page404 from "./pages/Page404";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewsCategory from "./pages/NewsCategory";
import NewsDetails from "./pages/NewsDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category/:categoryId" element={<NewsCategory />} />
        <Route path="news/:newsId*" element={<NewsDetails />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
