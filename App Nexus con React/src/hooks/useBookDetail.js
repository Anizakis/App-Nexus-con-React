import { useState, useEffect } from 'react';

const BASE_DETAIL_URL = 'https://mock.apidog.com/m1/1069422-1057565-default/books/';

// Normalizamos a CLAVES EN ESPAÑOL (las que usas en el componente)
const toSpanish = (raw) => {
  if (!raw || typeof raw !== 'object') return null;
  const b = raw.data && typeof raw.data === 'object' ? raw.data : raw;
  return {
    id: b.id ?? b.ID ?? b._id ?? null,
    titulo: b.titulo ?? b.title ?? 'Sin título',
    autor: b.autor ?? b.author ?? 'Autor Desconocido',
    imagen: b.imagen ?? b.image ?? b.cover ?? null,
    categoria: b.categoria ?? b.category ?? 'Sin Categoría',
    precio: b.precio ?? b.price ?? null,
    sinopsis: b.sinopsis ?? b.description ?? b.descripcion ?? 'Descripción no disponible.',
    isbn: b.isbn ?? b.ISBN ?? 'N/A',
    paginas: b.paginas ?? b.pages ?? 'N/A',
    año: b.año ?? b.year ?? b.anio ?? 'N/A',
  };
};

const useBookDetail = (bookId) => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!bookId) {
      setLoading(false);
      setError('ID de libro no válido.');
      return;
    }

    const fetchBook = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${BASE_DETAIL_URL}${bookId}`);
        if (!res.ok) throw new Error(`HTTP ${res.status} para ID ${bookId}`);

        const data = await res.json();
        const raw = Array.isArray(data) ? data[0] : data;
        const es = toSpanish(raw);
        if (!es) throw new Error('Respuesta de detalle no válida.');
        setBook(es);
      } catch (err) {
        console.error('Error al cargar el detalle del libro:', err);
        setError('No se pudo cargar la información del libro.');
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [bookId]);

  return { book, loading, error };
};

export default useBookDetail;
