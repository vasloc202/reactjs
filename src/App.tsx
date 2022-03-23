import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Navigate, Routes, Route, NavLink, Link } from "react-router-dom";
import { ProductType } from "./type/ProductType";
import { list } from "./api/product";
import WebsiteLayout from "./pages/layouts/WebsiteLayout";
import AdminLayout from "./pages/layouts/AdminLayout";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/admin/Dashboard";
import ProductDetail from "./pages/ProductDetail";
function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    };
    getProducts();
  }, []);
  return (
    <div className="App container">
      <main>
        <Routes>
          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<HomePage products={products} />} />
            <Route
              path="products"
              element={<ProductPage products={products} />}
            />
            <Route path="products/:id" element={<ProductDetail />} />
          </Route>

          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
