import { Container, Row, Col } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  return (
    <Container fluid className="p-0">
      <div className="w-100 bg-primary text-white py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="display-5">Mi Perfil</h1>
              <p className="lead">
                Bienvenido, {user?.username}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="py-5">
        <Row>
          <Col>
            <h2 className="mb-4">Tu Cuenta</h2>
            <p>
              Esta es tu área personal donde podrás gestionar tus reservas,
              préstamos y preferencias.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Profile;