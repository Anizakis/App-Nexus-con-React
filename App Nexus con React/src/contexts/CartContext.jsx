import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem('cart');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addItem = (book, qty = 1) => {
    setItems(prev => {
      const idx = prev.findIndex(i => i.id === book.id);
      if (idx !== -1) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + qty };
        return copy;
      }
      return [...prev, { id: book.id, title: book.title, author: book.author, price: book.price || 0, qty }];
    });
  };

  const removeItem = (id) => setItems(prev => prev.filter(i => i.id !== id));
  const clear = () => setItems([]);
  const updateQty = (id, qty) =>
    setItems(prev => prev.map(i => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i)));

  const total = useMemo(() => items.reduce((acc, i) => acc + (Number(i.price) || 0) * i.qty, 0), [items]);
  const count = useMemo(() => items.reduce((acc, i) => acc + i.qty, 0), [items]);

  const value = { items, addItem, removeItem, clear, updateQty, total, count };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
};
