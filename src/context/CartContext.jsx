import { createContext, useContext } from "react";
import usePersistedState from "../utils/usePersistedState";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = usePersistedState("giftly-cart", []);
  const [orders, setOrders] = usePersistedState("giftly-orders", []);
  const [reviews, setReviews] = usePersistedState("giftly-reviews", []);

  const addToCart = (product, qty = 1) => {
    setItems((prev) => {
      const found = prev.find((i) => i.id === product.id);
      if (found) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: Math.min(i.qty + qty, product.stock) } : i
        );
      }
      return [...prev, { ...product, qty }];
    });
  };

  const changeQty = (id, delta) =>
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: Math.min(i.qty + delta, i.stock) } : i))
        .filter((i) => i.qty > 0)
    );

  const removeItem = (id) => setItems((prev) => prev.filter((i) => i.id !== id));
  const clearCart = () => setItems([]);

  const count = items.reduce((sum, i) => sum + i.qty, 0);
  const total = items.reduce((sum, i) => sum + i.qty * i.price, 0);

  const placeOrder = (customer) => {
    const order = {
      id: "GFT-" + String(orders.length + 1).padStart(3, "0"),
      createdAt: new Date().toLocaleString("id-ID"),
      customer,
      items,
      total,
    };
    setOrders((prev) => [order, ...prev]);
    setItems([]);
    return order;
  };

  const addReview = (review) =>
    setReviews((prev) => [{ id: Date.now(), ...review }, ...prev]);

  return (
    <CartContext.Provider
      value={{
        items, addToCart, changeQty, removeItem, clearCart, count, total,
        orders, placeOrder, reviews, addReview,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);