import { useState } from "react";
import { products, categories } from "../../utils/data";
import ProductCard from "../../components/ProductCard";
import CategoryFilter from "../../components/CategoryFilter";

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Semua");

  const filtered = products.filter(
    (p) =>
      (category === "Semua" || p.category === category) &&
      p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <section className="hero">
        <h1>Hampers cantik untuk setiap momen berharga.</h1>
        <p>Ulang tahun, anniversary, wisuda, dan kabar bahagia lainnya.</p>
      </section>

      <div className="toolbar">
        <input
          placeholder="Cari hampers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <CategoryFilter categories={categories} active={category} onChange={setCategory} />
      </div>

      {filtered.length > 0 ? (
        <div className="grid">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <p className="empty">Hampers tidak ditemukan. Coba kata kunci atau kategori lain.</p>
      )}
    </>
  );
}