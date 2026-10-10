import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { rupiah } from "../../utils/data";

export default function Cart() {
  const { items, changeQty, removeItem, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="empty">
        <p>Keranjang masih kosong.</p>
        <Link to="/" className="link">Pilih hampers dulu</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Keranjang kamu</h1>
      {items.map((i) => (
        <div className="cart-row" key={i.id}>
<img className="cart-thumb" src={i.image} alt={i.name} />          <div className="grow">
            <strong>{i.name}</strong>
            <div className="qty">
              <button onClick={() => changeQty(i.id, -1)}>−</button>
              <span>{i.qty}</span>
              <button onClick={() => changeQty(i.id, 1)} disabled={i.qty >= i.stock}>+</button>
            </div>
          </div>
          <div className="right">
            <div>{rupiah(i.qty * i.price)}</div>
            <button className="link-btn" onClick={() => removeItem(i.id)}>Hapus</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total</span>
        <span>{rupiah(total)}</span>
      </div>
      <Link to="/checkout" className="btn inline">Lanjut ke checkout</Link>
    </div>
  );
}