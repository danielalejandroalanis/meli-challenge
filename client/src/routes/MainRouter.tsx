import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, ProductDetail, SearchResults } from "../pages";

export const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<SearchResults />} />
        <Route path="/items/:id" element={<ProductDetail />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </Router>
  );
};
