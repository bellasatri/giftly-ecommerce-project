export default function CategoryFilter({ categories, active, onChange }) {
  return (
    <div className="tabs">
      {categories.map((c) => (
        <button
          key={c}
          className={c === active ? "tab active" : "tab"}
          onClick={() => onChange(c)}
        >
          {c}
        </button>
      ))}
    </div>
  );
}