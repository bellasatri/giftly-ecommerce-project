import { useCart } from "../../context/CartContext";
import { rupiah } from "../../utils/data";

export default function Orders() {
  const { orders } = useCart();

  return (
    <div>
      <h1>Pesanan</h1>

      {orders.length === 0 ? (
        <p className="muted">Belum ada pesanan masuk.</p>
      ) : (
        orders.map((o) => (
          <div className="order" key={o.id}>
            <div className="order-head">
              <strong>{o.id}</strong>
              <span className="muted">{o.createdAt}</span>
            </div>
            <p>
              {o.customer.name}, {o.customer.address}. Kirim tanggal {o.customer.date}.
            </p>
            {o.customer.message && <p className="muted">Kartu: {o.customer.message}</p>}
            {o.items.map((i) => (
              <div className="sum-row" key={i.id}>
                <span>{i.name} × {i.qty}</span>
                <span>{rupiah(i.qty * i.price)}</span>
              </div>
            ))}
            <div className="sum-row"><strong>Total</strong><strong>{rupiah(o.total)}</strong></div>
          </div>
        ))
      )}
    </div>
  );
}