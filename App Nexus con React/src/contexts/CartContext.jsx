import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useToast } from './ToastContext';

const CartContext = createContext(null);

const normalize = (item) => {
  if (!item || typeof item !== 'object') return null;
  
  const isProduct = item.name !== undefined || item.description !== undefined;
  
  return {
    id: item.id ?? item.ID ?? item._id ?? null,
    titulo: item.titulo ?? item.title ?? item.name ?? 'Sin título',
    autor: item.autor ?? item.author ?? null,
    descripcion: item.descripcion ?? item.description ?? null,
    precio: Number(item.precio ?? item.price ?? 0),
    imagen: item.imagen ?? item.image ?? item.cover ?? null,
    categoria: item.categoria ?? item.category ?? 'Sin categoría',
    tipo: isProduct ? 'producto' : 'libro',
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

  const addItem = (item, qty = 1) => {
    const n = normalize(item);
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
