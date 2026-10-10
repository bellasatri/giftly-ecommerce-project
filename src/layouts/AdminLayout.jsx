import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function AdminLayout() {
  return (
    <div className="admin">
      <Sidebar />
      <section className="admin-content">
        <Outlet />
      </section>
    </div>
  );
}