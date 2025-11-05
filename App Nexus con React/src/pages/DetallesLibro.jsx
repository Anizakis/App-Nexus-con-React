import { Container, Row, Col, Spinner, Alert, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useBookDetail from '../hooks/useBookDetail';
import { useCart } from '../contexts/CartContext';

const DetallesLibro = () => {
  const { id } = useParams();
  const { book, loading, error } = useBookDetail(id);
  const { addItem } = useCart();

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

  const {
    titulo,
    autor,
    imagen,
    categoria,
    precio,
    sinopsis,
    año,
  } = book;

  const fallbackSVG = 'data:image/svg+xml;utf8,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
      <rect width="100%" height="100%" fill="#e9ecef"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
            font-family="Arial, sans-serif" font-size="24" fill="#6c757d">
        Sin imagen
      </text>
    </svg>
  `);
  const imgSrc = imagen || fallbackSVG;

  return (
    <Container className="py-5">
      <Row>
        <Col md={4} className="mb-4">
          <Card className="shadow-sm">
            <Card.Img
              variant="top"
              src={imgSrc}
              alt={`Portada de ${titulo || 'Libro'}`}
              style={{ maxHeight: '400px', objectFit: 'cover' }}
              onError={(e) => { e.currentTarget.src = fallbackSVG; }}
            />
          </Card>
        </Col>

        <Col md={8}>
          <h2>{titulo}</h2>
          <p className="lead text-secondary">por {autor || 'Autor Desconocido'}</p>

          <hr />

          <div className="mb-4">
            <h4>
              Precio:{' '}
              <span className="text-success fw-bold">
                {precio != null ? `$${precio}` : 'N/A'}
              </span>
            </h4>
            <p className="badge bg-info text-dark">{categoria || 'Sin Categoría'}</p>
          </div>

          {año ? <p><strong>Año:</strong> {año}</p> : null}

          <hr />

          <button
            className="btn btn-primary mb-3"
            onClick={() => addItem(book)}
          >
            Agregar al carrito
          </button>

          <h4>Sinopsis</h4>
          <p>{sinopsis || 'Descripción no disponible.'}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default DetallesLibro;
