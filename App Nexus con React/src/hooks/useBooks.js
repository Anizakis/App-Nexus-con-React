import { useState, useEffect } from 'react';

const API_URL = 'https://mock.apidog.com/m1/1069422-1057565-default/books';

const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        setBooks(data);
      } catch (err) {
        console.error("Error al cargar los libros:", err);
        setError("No se pudieron cargar los datos.");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);
  return { books, loading, error };
};

export default useBooks;