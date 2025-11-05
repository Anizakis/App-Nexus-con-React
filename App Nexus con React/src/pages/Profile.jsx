import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { PersonCircle, CalendarEvent, Book, Gear, Award } from 'react-bootstrap-icons';

const Profile = () => {
  const { user } = useAuth();
  const username = user?.username || "Usuario";

  return (
    <div className="profile-page bg-light">
      {/* Hero superior */}
      <div className="profile-hero position-relative text-white text-center py-5">
        <div className="overlay"></div>
        <Container className="position-relative">
          <PersonCircle size={100} className="mb-3 text-white opacity-75" />
          <h1 className="display-5 fw-bold">{username}</h1>
          <p className="lead mb-0">Miembro de Nexus Library desde marzo de 2024</p>
          <small>Tipo de cuenta: Estándar</small>
        </Container>
      </div>

      {/* Sección de información */}
      <Container className="py-5">
        <Row className="g-4 justify-content-center">
          {/* Datos personales */}
          <Col lg={4} md={6}>
            <Card className="shadow-sm border-0 h-100 hover-card">
              <Card.Body>
                <Card.Title className="mb-3 d-flex align-items-center">
                  <PersonCircle className="me-2 text-primary" /> Información personal
                </Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item><strong>Nombre:</strong> {username}</ListGroup.Item>
                  <ListGroup.Item><strong>Email:</strong> usuario@nexus.edu</ListGroup.Item>
                  <ListGroup.Item><strong>Ubicación:</strong> Jerez de la Frontera</ListGroup.Item>
                  <ListGroup.Item><strong>Estado:</strong> Activo</ListGroup.Item>
                </ListGroup>
                <div className="d-grid mt-4">
                  <Button variant="outline-primary">Editar perfil</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Actividad reciente */}
          <Col lg={4} md={6}>
            <Card className="shadow-sm border-0 h-100 hover-card">
              <Card.Body>
                <Card.Title className="mb-3 d-flex align-items-center">
                  <Book className="me-2 text-primary" /> Actividad reciente
                </Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item><CalendarEvent className="me-2 text-primary" /> Reserva coworking (05/11/2025)</ListGroup.Item>
                  <ListGroup.Item><Book className="me-2 text-primary" /> Compra: “Diseño UX Avanzado”</ListGroup.Item>
                  <ListGroup.Item><Book className="me-2 text-primary" /> Renovación Nexus+</ListGroup.Item>
                </ListGroup>
                <div className="d-grid mt-4">
                  <Button variant="outline-primary">Ver historial</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Logros / membresía */}
          <Col lg={4} md={6}>
            <Card className="shadow-sm border-0 h-100 hover-card">
              <Card.Body>
                <Card.Title className="mb-3 d-flex align-items-center">
                  <Award className="me-2 text-primary" /> Membresía Nexus+
                </Card.Title>
                <Card.Text>
                  ¡Eres miembro activo de **Nexus+**, con acceso a beneficios exclusivos:
                  <ul>
                    <li>10% de descuento en libros</li>
                    <li>Reservas prioritarias en coworking</li>
                    <li>Bebida gratuita semanal</li>
                  </ul>
                </Card.Text>
                <div className="d-grid mt-4">
                  <Button variant="primary">Renovar membresía</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
