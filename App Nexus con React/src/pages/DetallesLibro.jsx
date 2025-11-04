import { Container, Row, Col, Spinner, Alert, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useBookDetail from '../hooks/useBookDetail';

const DetallesLibro = () => {
  const { id } = useParams(); 
  
  const { book, loading, error } = useBookDetail(id); 

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" role="status" />
        <p className="mt-3">Cargando detalles del libro...</p>
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

  if (!book) {
    return (
      <Container className="py-5">
        <Alert variant="warning">Libro no encontrado.</Alert>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row>
        <Col md={4} className="mb-4">
          <Card className="shadow-sm">
            <Card.Img 
              variant="top" 
              src={book.image || book.cover || 'placeholder.jpg'} 
              alt={`Portada de ${book.title}`} 
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </Card>
        </Col>
        
        <Col md={8}>
          <h2>{book.title}</h2>
          <p className="lead text-secondary">por {book.author || 'Autor Desconocido'}</p>
          
          <hr />
          
          <div className="mb-4">
            <h4>Precio: <span className="text-success fw-bold">${book.price || 'N/A'}</span></h4>
            <p className="badge bg-info text-dark">{book.category || 'Sin Categoría'}</p>
          </div>

          <p><strong>ISBN:</strong> {book.isbn || 'N/A'}</p>
          <p><strong>Páginas:</strong> {book.pages || 'N/A'}</p>
          
          <hr />
          
          <h4>Descripción</h4>
          <p>{book.description || 'Descripción no disponible.'}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default DetallesLibro;