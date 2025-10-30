import { Container, Row, Col } from 'react-bootstrap';

const Catalog = () => {
  return (
    <Container fluid className="p-0">
      <div className="w-100 bg-primary text-white py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="display-5">Catálogo</h1>
              <p className="lead">
                Explora nuestra colección de libros académicos y literatura general
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="py-5">
        <Row>
          <Col>
            <h2 className="mb-4">Nuestra Colección</h2>
            <p>
              Bienvenido al catálogo de Nexus Library. Aquí encontrarás una amplia
              selección de libros académicos, literatura contemporánea y clásicos.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Catalog;