import { Container, Row, Col, Card, Button, Badge, ListGroup } from 'react-bootstrap';

const Coworking = () => {
  const spaces = [
    {
      id: 1,
      name: "Zona Silenciosa",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80",
      capacity: "24 puestos",
      features: ["Escritorios individuales", "Iluminación natural", "Enchufes individuales", "WiFi de alta velocidad"],
      priceHour: "3€",
      type: "individual"
    },
    {
      id: 2,
      name: "Sala Colaborativa",
      image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?w=800&auto=format&fit=crop&q=80",
      capacity: "16 puestos",
      features: ["Mesas compartidas", "Pizarra digital", "Proyector", "Café gratuito"],
      priceHour: "5€",
      type: "grupo"
    },
    {
      id: 3,
      name: "Sala de Reuniones",
      image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&auto=format&fit=crop&q=80",
      capacity: "8 personas",
      features: ["Mesa de reuniones", "TV 55'", "Videoconferencia", "Pizarra"],
      priceHour: "15€",
      type: "reunion"
    }
  ];

  const amenities = [
    { icon: "wifi", text: "WiFi de alta velocidad" },
    { icon: "printer", text: "Impresión y escaneo" },
    { icon: "cup-hot", text: "Café y té incluidos" },
    { icon: "lightning-charge", text: "Energía verde" },
    { icon: "thermometer-half", text: "Clima controlado" },
    { icon: "shield-check", text: "Taquillas seguras" }
  ];

  return (
    <Container fluid className="p-0">
      <div className="w-100 bg-primary text-white py-5">
        <Container>
          <Row>
            <Col lg={8}>
              <h1 className="display-5 fw-bold">Espacio Co-Working</h1>
              <p className="lead fs-4">
                Tu espacio de trabajo flexible y profesional en el campus
              </p>
              <p className="fs-5 mb-4">
                Diseñado para estudiantes y profesionales que buscan un ambiente
                productivo y colaborativo.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-5">
        <Row className="mb-5">
          <Col lg={8}>
            <h2 className="mb-4">Nuestros Espacios</h2>
            <p className="lead text-muted">
              Elige el espacio que mejor se adapte a tus necesidades. Todos incluyen
              acceso a amenities compartidos.
            </p>
          </Col>
        </Row>

        <Row className="g-4 mb-5">
          {spaces.map(space => (
            <Col key={space.id} lg={4} md={6}>
              <Card className="h-100 shadow-sm hover-card">
                <div className="card-img-wrapper" style={{ height: "200px" }}>
                  <img
                    src={space.image}
                    alt={space.name}
                    className="card-img-top h-100 w-100 object-fit-cover"
                  />
                  <div className="position-absolute top-0 end-0 p-3">
                    <Badge bg="primary" className="opacity-75">
                      {space.priceHour}/hora
                    </Badge>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title className="mb-3">{space.name}</Card.Title>
                  <Card.Subtitle className="mb-3 text-muted">
                    <i className="bi bi-people me-2"></i>
                    {space.capacity}
                  </Card.Subtitle>
                  <ListGroup variant="flush" className="mb-3">
                    {space.features.map((feature, idx) => (
                      <ListGroup.Item key={idx} className="px-0">
                        <i className="bi bi-check2 text-success me-2"></i>
                        {feature}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
                <Card.Footer className="bg-white border-0 pt-0">
                  <Button variant="outline-primary" className="w-100">
                    Reservar Espacio
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="py-5">
          <Col lg={12} className="text-center mb-4">
            <h3>Amenities Incluidos</h3>
            <p className="text-muted">Todo lo que necesitas para trabajar cómodamente</p>
          </Col>
          {amenities.map((item, idx) => (
            <Col key={idx} md={4} lg={2} className="text-center mb-4">
              <div className="p-3">
                <i className={`bi bi-${item.icon} fs-2 text-primary mb-3`}></i>
                <p className="mb-0 small">{item.text}</p>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="mt-5 py-5 bg-light rounded-3">
          <Col md={7} className="text-center text-md-start">
            <h3>¿Necesitas un espacio para un evento especial?</h3>
            <p className="mb-md-0">
              Ofrecemos tarifas especiales para grupos y eventos. Contáctanos para más información.
            </p>
          </Col>
          <Col md={5} className="text-center text-md-end">
            <Button variant="primary" size="lg" className="me-3">
              Reservar Ahora
            </Button>
            <Button variant="outline-primary" size="lg">
              Más Información
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Coworking;