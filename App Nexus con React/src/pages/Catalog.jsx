import { Container, Row, Col, Spinner, Alert, Form } from 'react-bootstrap';
import { useState } from 'react'; 
import { Link } from 'react-router-dom';
import useBooks from '../hooks/useBooks'; 

const Catalog = () => {
  const { books, loading, error } = useBooks(); 
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredBooks = books.filter((book) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    
    const searchMatch = !searchTerm || 
      (book.title?.toLowerCase().includes(lowerCaseSearchTerm) || 
       book.author?.toLowerCase().includes(lowerCaseSearchTerm));

    const categoryMatch = selectedCategory === 'all' || 
      (book.category && book.category.toLowerCase() === selectedCategory.toLowerCase());

    return searchMatch && categoryMatch;
  });

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" role="status" />
        <p className="mt-3">Cargando catálogo...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="py-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  const categories = [...new Set(books.map(book => book.category).filter(c => c))];

  return (
    <Container fluid className="p-0">
      <Container className="py-5">
        <Row className="mb-4">
          <Col xs={12}>
            <h2 className="mb-4">Catálogo ({filteredBooks.length} resultados)</h2>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={6} className="mb-3">
            <Form.Control
              type="text"
              placeholder="Buscar por título o autor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
          </Col>
          <Col md={3} className="mb-3">
            <Form.Select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">Todas las categorías</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </Form.Select>
          </Col>
        </Row>

        <Row>
          {filteredBooks.length === 0 ? (
            <Col><Alert variant="info">No se encontraron libros con esos filtros.</Alert></Col>
          ) : (
            filteredBooks.map((book) => (
              <Col key={book.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                <Link 
                  to={`/detalles/${book.id}`} 
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="border p-3 h-100 shadow-sm rounded hover-shadow-lg">
                    <h5 className="text-primary">{book.title || 'Título Desconocido'}</h5>
                    <p className="small mb-1">Autor: {book.author || 'Desconocido'}</p>
                    <p className="small text-success fw-bold">${book.price || 'N/A'}</p>
                  </div>
                </Link>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </Container>
  );
};

export default Catalog;