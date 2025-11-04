import { useState, useEffect } from 'react';

const BASE_DETAIL_URL = 'https://mock.apidog.com/m1/1069422-1057565-default/books/';

const useBookDetail = (bookId) => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!bookId) {
        setLoading(false);
        return;
    }
    
    const fetchBook = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`${BASE_DETAIL_URL}${bookId}`);

        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status} para el ID: ${bookId}`);
        }

        const data = await response.json();
        setBook(data);
      } catch (err) {
        console.error("Error al cargar el detalle del libro:", err);
        setError("No se pudo cargar la información del libro.");
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [bookId]); 

  return { book, loading, error };
};

export default useBookDetail;