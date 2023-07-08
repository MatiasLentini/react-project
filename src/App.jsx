import "./App.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Views
import AboutPage from "./views/AboutPage/AboutPage";
import ContactPage from "./views/ContactPage/ContactPage";
import HomePage from "./views/HomePage/HomePage";
import ProductCategoryPage from "./views/ProductCategoryPage/ProductCategoryPage";
import ProductDetailPage from "./views/ProductDetailPage/ProductDetailPage";

// Components
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product-category/:category" element={<ProductCategoryPage />} />
          <Route path="/product-detail/:id" element={<ProductDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;