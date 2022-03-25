import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Navigate, Routes, Route, NavLink, Link } from "react-router-dom";
import { ProductType } from "./type/ProductType";
import { list, add } from "./api/product";
import WebsiteLayout from "./pages/layouts/WebsiteLayout";
import AdminLayout from "./pages/layouts/AdminLayout";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/admin/Dashboard";
import ProductDetail from "./pages/ProductDetail";
import ProductAdd from "./pages/admin/ProductAdd";
function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    };
    getProducts();
  }, []);

  const onHandleAdd = async (product: any) => {
    const { data } = await add(product);
    setProducts([...products, data]);
  };
  return (
    <div className="App container">
      <main>
        <Routes>
          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<HomePage product={products} />} />
            <Route
              path="products"
              element={<ProductPage product={products} />}
            />
            <Route path="products/:id" element={<ProductDetail />} />
          </Route>

          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route
              path="products/add"
              element={<ProductAdd onAdd={onHandleAdd} />}
            />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
