import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Club de Lectura: 'Cien años de soledad'",
      date: "15 de Noviembre, 2025",
      time: "17:00 - 19:00",
      category: "Club de Lectura",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=80",
      description: "Únete a nuestra discusión mensual del club de lectura. Este mes analizaremos la obra maestra de Gabriel García Márquez.",
      location: "Sala de Eventos Principal"
    },
    {
      id: 2,
      title: "Taller de Escritura Creativa",
      date: "20 de Noviembre, 2025",
      time: "16:00 - 18:00",
      category: "Taller",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80",
      description: "Aprende técnicas de escritura creativa con la escritora María González. Trae tu libreta y bolígrafo favoritos.",
      location: "Sala de Workshops"
    },
    {
      id: 3,
      title: "Presentación: 'El futuro de la IA'",
      date: "25 de Noviembre, 2025",
      time: "18:30 - 20:00",
      category: "Conferencia",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80",
      description: "Charla sobre inteligencia artificial y su impacto en la sociedad moderna, por el Dr. Juan Pérez.",
      location: "Auditorio"
    }
  ];

  return (
    <Container fluid className="p-0">
      <div className="w-100 bg-primary text-white py-5">
        <Container>
          <Row>
            <Col lg={8}>
              <h1 className="display-5 fw-bold">Eventos y Actividades</h1>
              <p className="lead fs-4">
                Descubre nuestra programación cultural y únete a nuestra comunidad de aprendizaje
              </p>
              <p className="fs-5 mb-4">
                Desde clubs de lectura hasta conferencias especializadas, siempre hay algo interesante sucediendo en Nexus.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-5">
        <Row className="mb-5">
          <Col>
            <h2 className="mb-4">Próximos Eventos</h2>
            <p className="lead text-muted">
              Reserva tu lugar en nuestros próximos eventos. Todos los eventos son gratuitos para miembros.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {upcomingEvents.map(event => (
            <Col key={event.id} lg={4} md={6}>
              <Card className="h-100 shadow-sm hover-card">
                <div className="card-img-wrapper" style={{ height: "200px" }}>
                  <img
                    src={event.image}
                    alt={event.title}
                    className="card-img-top h-100 w-100 object-fit-cover"
                  />
                </div>
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <Badge bg="primary" className="mb-2">
                      {event.category}
                    </Badge>
                    <small className="text-muted">{event.date}</small>
                  </div>
                  <Card.Title as="h5" className="mb-3">{event.title}</Card.Title>
                  <Card.Text>{event.description}</Card.Text>
                  <div className="mt-3">
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-clock me-2"></i>
                      <small>{event.time}</small>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-geo-alt me-2"></i>
                      <small>{event.location}</small>
                    </div>
                  </div>
                </Card.Body>
                <Card.Footer className="bg-white border-0 pt-0">
                  <Button variant="outline-primary" className="w-100">
                    Reservar Plaza
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-5 py-5 bg-light rounded-3">
          <Col md={6} className="text-center text-md-start">
            <h3>¿Quieres organizar un evento?</h3>
            <p className="mb-md-0">
              Ponemos nuestros espacios a disposición de la comunidad para eventos culturales y educativos.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <Button variant="primary" size="lg">
              Solicitar Información
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Events;