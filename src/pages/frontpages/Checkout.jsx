import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { rupiah } from "../../utils/data";

export default function Checkout() {
  const { items, total, placeOrder } = useCart();
  const [form, setForm] = useState({ name: "", address: "", date: "", message: "" });
  const [order, setOrder] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrder(placeOrder(form));
  };

  if (order) {
    return (
      <div className="success-page">
        <h1>Pesanan berhasil</h1>
        <p>Terima kasih, {order.customer.name}. Nomor pesananmu <strong>{order.id}</strong>.</p>
        <div className="summary">
          <h3>Rincian pesanan</h3>
          {order.items.map((i) => (
            <div className="sum-row" key={i.id}>
              <span>{i.emoji} {i.name} × {i.qty}</span>
              <span>{rupiah(i.qty * i.price)}</span>
            </div>
          ))}
          <div className="total"><span>Total</span><span>{rupiah(order.total)}</span></div>
          <p className="muted">Dikirim ke {order.customer.address} pada {order.customer.date}.</p>
          {order.customer.message && <p className="muted">Pesan kartu: {order.customer.message}</p>}
        </div>
        <Link to="/" className="btn inline">Belanja lagi</Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="empty">
        <p>Belum ada hampers yang dipilih.</p>
        <Link to="/" className="link">Kembali ke Home</Link>
      </div>
    );
  }

  return (
    <div className="checkout">
      <form onSubmit={handleSubmit}>
        <h1>Checkout</h1>
        <label>Nama penerima
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>Alamat pengiriman
          <textarea name="address" value={form.address} onChange={handleChange} required />
        </label>
        <label>Tanggal kirim
          <input type="date" name="date" value={form.date} onChange={handleChange} required />
        </label>
        <label>Pesan di kartu ucapan
          <textarea name="message" value={form.message} onChange={handleChange} />
        </label>
        <button className="btn" type="submit">Pesan sekarang</button>
      </form>

      <div className="summary">
        <h3>Ringkasan</h3>
        {items.map((i) => (
          <div className="sum-row" key={i.id}>
            <span>{i.name} × {i.qty}</span>
            <span>{rupiah(i.qty * i.price)}</span>
          </div>
        ))}
        <div className="total"><span>Total</span><span>{rupiah(total)}</span></div>
      </div>
    </div>
  );
}