import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { rupiah } from "../utils/data";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const soldOut = product.stock === 0;

  return (
    <article className="card">
      <div className="thumb">
        <span className="chip">{product.category}</span>
        <img src={product.image} alt={product.name} />
      </div>
      <div className="info">
        <h3>{product.name}</h3>
        <p>{product.desc}</p>
        <div className="price">{rupiah(product.price)}</div>
        <Link to={`/produk/${product.id}`} className="link">Lihat detail</Link>
        {soldOut ? (
          <button className="btn" disabled>Stok habis</button>
        ) : (
          <button className="btn" onClick={() => addToCart(product)}>Tambah ke keranjang</button>
        )}
      </div>
    </article>
  );
}