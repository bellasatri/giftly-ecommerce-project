import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Giftly Admin</h3>
      <NavLink to="/admin/dashboard">Dashboard</NavLink>
      <NavLink to="/admin/about">About</NavLink>
    </aside>
  );
}