import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/frontpages/Dashboard";
import ProductDetail from "./pages/frontpages/ProductDetail";
import Cart from "./pages/frontpages/Cart";
import Checkout from "./pages/frontpages/Checkout";
import AdminDashboard from "./pages/adminpages/AdminDashboard";
import Orders from "./pages/adminpages/Orders";
import AboutPage from "./pages/adminpages/AboutPage";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/produk/:id" element={<ProductDetail />} />
        <Route path="/keranjang" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Route>
    </Routes>
  );
}