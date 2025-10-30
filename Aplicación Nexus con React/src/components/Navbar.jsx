import { Navbar as BNavbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <BNavbar expand="lg" bg="dark" variant="dark" className="py-3">
      <Container fluid className="px-4">
        <BNavbar.Brand as={Link} to="/" className="fs-4">
          Nexus Library
        </BNavbar.Brand>
        <BNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BNavbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-1">
            <Nav.Link 
              as={Link} 
              to="/" 
              active={location.pathname === '/'}
              className="px-3"
            >
              Inicio
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/catalogo" 
              active={location.pathname === '/catalogo'}
              className="px-3"
            >
              Catálogo
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/coworking" 
              active={location.pathname === '/coworking'}
              className="px-3"
            >
              Co-Working
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/cafeteria" 
              active={location.pathname === '/cafeteria'}
              className="px-3"
            >
              Cafetería
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/eventos" 
              active={location.pathname === '/eventos'}
              className="px-3"
            >
              Eventos
            </Nav.Link>
          </Nav>
          <Nav className="gap-2">
            {user ? (
              <>
                <Nav.Link 
                  as={Link} 
                  to="/perfil" 
                  active={location.pathname === '/perfil'}
                  className="px-3"
                >
                  Mi Perfil
                </Nav.Link>
                <Button 
                  variant="outline-light" 
                  onClick={handleLogout}
                  className="px-4"
                >
                  Cerrar Sesión
                </Button>
              </>
            ) : (
              <Button 
                as={Link} 
                to="/login" 
                variant="outline-light"
                className="px-4"
              >
                Iniciar Sesión
              </Button>
            )}
          </Nav>
        </BNavbar.Collapse>
      </Container>
    </BNavbar>
  );
};

export default Navbar;