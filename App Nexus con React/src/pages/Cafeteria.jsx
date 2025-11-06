import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Spinner,
  ButtonGroup,
  Button,
} from 'react-bootstrap';
import useProducts from '../hooks/useProducts';
import { useCart } from '../contexts/CartContext';

const Cafeteria = () => {
  const {
    products,
    loading,
    error,
    categories,
    selectedCategory,
    setSelectedCategory,
  } = useProducts();
  
  const { addItem } = useCart();

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-5">
        <h2>Error</h2>
        <p className="text-danger">{error}</p>
      </div>
    );
  }

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Menú de la Cafetería</h1>

      <div className="text-center mb-5">
        <ButtonGroup className="flex-wrap">
          <Button
            variant={selectedCategory === 'all' ? 'primary' : 'outline-primary'}
            onClick={() => setSelectedCategory('all')}
            className="mb-2"
          >
            Todos
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={
                selectedCategory === category
                  ? 'primary'
                  : 'outline-primary'
              }
              onClick={() => setSelectedCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </ButtonGroup>
      </div>

      <Row xs={1} md={2} lg={3} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <Card className="h-100 shadow-sm hover-card">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <Badge bg="success" className="px-3 py-2">
                    {product.price.toFixed(2)} €
                  </Badge>
                  <Badge bg="info" className="px-3 py-2">
                    {product.category}
                  </Badge>
                </div>
                <Button 
                  variant="primary" 
                  className="w-100"
                  onClick={() => addItem(product)}
                >
                  Añadir al carrito
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cafeteria;