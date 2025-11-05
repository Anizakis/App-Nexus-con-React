import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useToast } from './ToastContext';

const CartContext = createContext(null);

const normalize = (b) => {
  if (!b || typeof b !== 'object') return null;
  return {
    id: b.id ?? b.ID ?? b._id ?? null,
    titulo: b.titulo ?? b.title ?? 'Sin título',
    autor: b.autor ?? b.author ?? 'Desconocido',
    precio: Number(b.precio ?? b.price ?? 0),
    imagen: b.imagen ?? b.image ?? b.cover ?? null,
    categoria: b.categoria ?? b.category ?? 'Sin categoría',
  };
};

export const CartProvider = ({ children }) => {
  const { show } = useToast();

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
    const n = normalize(book);
    if (!n || !n.id) return;

    setItems((prev) => {
      const idx = prev.findIndex((i) => i.id === n.id);
      if (idx !== -1) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + qty };
        return copy;
      }
      return [...prev, { ...n, qty }];
    });

    show(`Añadido al carrito: ${n.titulo}`, 'success');
  };

  const removeItem = (id) => {
    const removed = items.find((i) => i.id === id);
    setItems((prev) => prev.filter((i) => i.id !== id));
    if (removed) show(`Eliminado: ${removed.titulo}`, 'warning');
  };

  const clear = () => {
    if (items.length) show('Carrito vaciado', 'secondary');
    setItems([]);
  };

  const updateQty = (id, qty) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, Number(qty) || 1) } : i))
    );
     show('Cantidad actualizada', 'info');
  }

  const total = useMemo(() => items.reduce((acc, i) => acc + (Number(i.precio) || 0) * i.qty, 0), [items]);
  const count = useMemo(() => items.reduce((acc, i) => acc + i.qty, 0), [items]);

  const value = { items, addItem, removeItem, clear, updateQty, total, count };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
};
