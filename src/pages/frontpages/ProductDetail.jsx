import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { products, rupiah } from "../../utils/data";
import { useCart } from "../../context/CartContext";
import ReviewSection from "../../components/ReviewSection";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="empty">
        <p>Produk tidak ditemukan.</p>
        <Link to="/" className="link">Kembali ke Home</Link>
      </div>
    );
  }

  const handleAdd = () => {
    addToCart(product, qty);
    setAdded(true);
  };

  return (
    <>
      <div className="detail">
        <div className="thumb big"><img src={product.image} alt={product.name} /></div>        <div>
          <span className="chip dark">{product.category}</span>
          <h1>{product.name}</h1>
          <p>{product.desc}</p>
          <div className="price">{rupiah(product.price)}</div>
          <p className="muted">Stok: {product.stock}</p>

          {product.stock > 0 ? (
            <>
              <div className="qty">
                <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                <span>{qty}</span>
                <button onClick={() => setQty(Math.min(product.stock, qty + 1))}>+</button>
              </div>
              <button className="btn" onClick={handleAdd}>Tambah ke keranjang</button>
            </>
          ) : (
            <button className="btn" disabled>Stok habis</button>
          )}

          {added && (
            <p className="success">
              Berhasil ditambahkan. <Link to="/keranjang" className="link">Lihat keranjang</Link>
            </p>
          )}
        </div>
      </div>

      <ReviewSection productId={product.id} />
    </>
  );
}