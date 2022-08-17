import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import ProductListPage from "./Pages/ProductListPage/ProductListPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<ProductListPage />} />
      </Routes>
      
    </>
  );
}

export default App;
