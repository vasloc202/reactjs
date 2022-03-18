import { useState } from 'react'
import ShowInfo from "./components/showInfo";
import { userInfo } from './type/user';
import './Index.css';
import { Navigate, Routes, Route, NavLink  } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from './pages/ProductPage';
import Dashboard from './pages/DashBoard';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import AdminLayout from './pages/layouts/AdminLayout';

function App() {
  const [count, setCount] = useState(0)
  const [info, setInfo] = useState<userInfo>({
    name: "Loc",
    age: 22
  })

  return (
    <div className='App'>
      <header >
        <ul className='flex justify-center flex-row'>
          <li className='px-4'><NavLink to="/">Home Page</NavLink></li>
          <li className='px-4'><NavLink to="/products">Product Page</NavLink></li>
          <li className='px-4'><NavLink to="/abouts">About Page</NavLink></li>
        </ul>
      </header>
      <main>
        <Routes>
            <Route path="/" element={ <WebsiteLayout /> }>
              <Route index element={<HomePage />} />
              <Route path="products" element={<ProductPage />} />
            </Route>
            <Route path="admin" element={<AdminLayout />} >
              <Route index element={<Navigate to="/admin/dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
