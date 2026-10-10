export const categories = ["Semua", "Ulang Tahun", "Anniversary", "Wisuda", "Pernikahan", "Baby Born", "Lebaran"];

export const products = [
  { id: 1, name: "Sweet Candle Box", category: "Ulang Tahun", price: 285000, emoji: "🕯️", image: "/sweet candles box.jpg", stock: 12, desc: "Lilin aromaterapi, cokelat, dan kartu ucapan." },
  { id: 2, name: "Birthday Bliss", category: "Ulang Tahun", price: 350000, emoji: "🎂", image: "/birthday bliss.jpg", stock: 8, desc: "Cookies, teh, dan mug personal." },
  { id: 3, name: "Golden Years", category: "Anniversary", price: 520000, emoji: "🥂", image: "/golden years.jpg", stock: 5, desc: "Sparkling grape, cokelat premium, dan bunga kering." },
  { id: 4, name: "Our Story Box", category: "Anniversary", price: 450000, emoji: "💌", image: "/our story box.jpg", stock: 0, desc: "Frame foto, lilin, dan surat cinta." },
  { id: 5, name: "Cum Laude", category: "Wisuda", price: 390000, emoji: "🎓", image: "/cumlaude.jpg", stock: 10, desc: "Boneka wisuda, snack, dan buket bunga mini." },
  { id: 6, name: "Happily Ever After", category: "Pernikahan", price: 780000, emoji: "💍", image: "/Happy ever after.jpg", stock: 3, desc: "Cokelat, madu, dan sepasang gelas keramik." },
  { id: 7, name: "Welcome Little One", category: "Baby Born", price: 420000, emoji: "🧸", image: "/welcome little one.jpg", stock: 7, desc: "Selimut lembut, kaus kaki, dan teether." },
  { id: 8, name: "Berkah Ramadan", category: "Lebaran", price: 495000, emoji: "🌙", image: "/berkah ramadan.jpg", stock: 15, desc: "Kurma, kue kering, dan sirup premium." },
];

export const rupiah = (n) => "Rp " + n.toLocaleString("id-ID");