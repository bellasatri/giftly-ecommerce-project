import { useState } from "react";
import { useCart } from "../context/CartContext";
import StarRating from "./StarRating";

export default function ReviewSection({ productId }) {
  const { reviews, addReview } = useCart();
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const list = reviews.filter((r) => r.productId === productId);
  const average = list.length ? list.reduce((s, r) => s + r.rating, 0) / list.length : 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview({ productId, name, rating, comment });
    setName("");
    setRating(5);
    setComment("");
  };

  return (
    <section className="reviews">
      <h2>Ulasan pembeli</h2>

      {list.length > 0 ? (
        <p className="avg">
          <StarRating value={Math.round(average)} /> {average.toFixed(1)} dari {list.length} ulasan
        </p>
      ) : (
        <p className="muted">Belum ada ulasan. Jadilah yang pertama.</p>
      )}

      <form className="review-form" onSubmit={handleSubmit}>
        <input
          placeholder="Nama kamu"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <StarRating value={rating} onChange={setRating} />
        <textarea
          placeholder="Ceritakan pengalamanmu dengan hampers ini"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button className="btn" type="submit">Kirim ulasan</button>
      </form>

      {list.map((r) => (
        <div className="review" key={r.id}>
          <strong>{r.name}</strong> <StarRating value={r.rating} />
          <p>{r.comment}</p>
        </div>
      ))}
    </section>
  );
}