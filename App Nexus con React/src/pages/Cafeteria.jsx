import { Container, Row, Col } from 'react-bootstrap';

const Cafeteria = () => {
  return (
    <Container fluid className="p-0">
      <div className="w-100 bg-primary text-white py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="display-5">Cafetería</h1>
              <p className="lead">
                Un espacio acogedor para relajarte y disfrutar
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="py-5">
        <Row>
          <Col>
            <h2 className="mb-4">Nuestra Cafetería</h2>
            <p>
              Un lugar perfecto para hacer una pausa, disfrutar de un buen café
              y aperitivos mientras estudias o te reúnes con amigos.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Cafeteria;