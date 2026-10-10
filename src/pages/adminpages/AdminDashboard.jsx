import { products, rupiah } from "../../utils/data";
import { useCart } from "../../context/CartContext";

export default function AdminDashboard() {
  const { orders } = useCart();
  const soldOut = products.filter((p) => p.stock === 0).length;
  const revenue = orders.reduce((sum, o) => sum + o.total, 0);

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="stats">
        <div className="stat"><span>Total produk</span><strong>{products.length}</strong></div>
        <div className="stat"><span>Stok habis</span><strong>{soldOut}</strong></div>
        <div className="stat"><span>Total pesanan</span><strong>{orders.length}</strong></div>
        <div className="stat"><span>Pendapatan</span><strong>{rupiah(revenue)}</strong></div>
      </div>

      <table className="table">
        <thead>
          <tr><th>Produk</th><th>Kategori</th><th>Harga</th><th>Stok</th></tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.emoji} {p.name}</td>
              <td>{p.category}</td>
              <td>{rupiah(p.price)}</td>
              <td>{p.stock === 0 ? <span className="tag red">Habis</span> : p.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}