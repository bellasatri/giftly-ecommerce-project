import { useState, useEffect } from "react";

// useState yang otomatis tersimpan di localStorage, jadi data tidak hilang saat refresh.
export default function usePersistedState(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // abaikan jika penyimpanan penuh atau diblokir
    }
  }, [key, value]);

  return [value, setValue];
}