import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Navigate, Routes, Route, NavLink, Link } from "react-router-dom";
import { ProductType } from "./type/ProductType";
import { UserType } from "./type/UserType";
import { list, add, remove } from "./api/product";
import WebsiteLayout from "./pages/layouts/WebsiteLayout";
import AdminLayout from "./pages/layouts/AdminLayout";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/admin/Dashboard";
import ProductDetail from "./pages/ProductDetail";
import ProductAdd from "./pages/admin/ProductAdd";
import ProductManager from "./pages/admin/ProductManager";
import PrivateRouter from "./components/PrivateRouter";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  // get all products
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    };
    getProducts();
  }, []);
  // add products
  const onHandleAdd = async (product: any) => {
    const { data } = await add(product);
    setProducts([...products, data]);
  };
  // remove product
  const onHandleRemove = async (id: number | string | undefined) => {
    remove(id);
    setProducts(products.filter((item) => item._id !== id));
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
            <Route path="signin" element={<LoginPage />} />
            <Route path="signup" element={<RegisterPage />} />
          </Route>

          <Route
            path="admin"
            element={
              <PrivateRouter>
                <AdminLayout />
              </PrivateRouter>
            }
          >
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route
              path="products"
              element={
                <ProductManager products={products} onRemove={onHandleRemove} />
              }
            />
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
