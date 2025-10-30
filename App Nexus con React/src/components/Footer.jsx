import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <Row className="gy-4">
          <Col md={4}>
            <h5 className="mb-3">Nexus Library</h5>
            <p className="mb-0">
              Tu espacio universitario multifuncional para estudiar, trabajar y relajarte.
            </p>
          </Col>
          <Col md={4}>
            <h5 className="mb-3">Enlaces Rápidos</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/catalogo" className="text-light text-decoration-none">Librería</Link>
              </li>
              <li className="mb-2">
                <Link to="/coworking" className="text-light text-decoration-none">Co-Working</Link>
              </li>
              <li className="mb-2">
                <Link to="/cafeteria" className="text-light text-decoration-none">Cafetería</Link>
              </li>
              <li className="mb-2">
                <Link to="/eventos" className="text-light text-decoration-none">Eventos</Link>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="mb-3">Contacto</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-geo-alt me-2"></i>
                Campus Universitario, Edificio B
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope me-2"></i>
                info@nexuslibrary.com
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone me-2"></i>
                +34 900 123 456
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="my-4" />
        <div className="text-center">
          <small>
            © {currentYear} Nexus Library. Todos los derechos reservados.
          </small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;