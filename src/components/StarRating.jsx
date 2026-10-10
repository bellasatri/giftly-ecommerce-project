export default function StarRating({ value, onChange }) {
  return (
    <span className="stars">
      {[1, 2, 3, 4, 5].map((n) =>
        onChange ? (
          <button
            type="button"
            key={n}
            className={n <= value ? "star on" : "star"}
            onClick={() => onChange(n)}
            aria-label={`${n} bintang`}
          >
            ★
          </button>
        ) : (
          <span key={n} className={n <= value ? "star on" : "star"}>★</span>
        )
      )}
    </span>
  );
}