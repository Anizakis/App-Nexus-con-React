import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Container, Row, Col, Card, Form, Button, Alert, Spinner } from 'react-bootstrap';

const Login = () => {
  const navigate = useNavigate();
  const { login, isLoading } = useAuth();
  const [error, setError] = useState('');
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    console.log('Credenciales enviadas:', credentials);
    const success = await login(credentials);
    console.log('Resultado login:', success);
    if (success) {
      navigate('/perfil');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-vh-100 w-100 d-flex align-items-center justify-content-center bg-light py-5 px-3">
      <div className="w-100" style={{ maxWidth: '480px' }}>
        <Card className="shadow-lg border-0">
          <Card.Body className="p-4 p-sm-5">
            <h2 className="text-center fw-bold mb-4">Iniciar Sesión</h2>

            <Alert variant="info" className="mb-4">
              <small>
                <strong>Credenciales de prueba:</strong><br />
                Usuario: <code>usuario</code><br />
                Contraseña: <code>password</code>
              </small>
            </Alert>

            {error && (
              <Alert variant="danger" className="mb-4">
                {error}
              </Alert>
            )}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  required
                  autoComplete="username"
                  value={credentials.username}
                  onChange={handleChange}
                  size="lg"
                  className="bg-light"
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  required
                  autoComplete="current-password"
                  value={credentials.password}
                  onChange={handleChange}
                  size="lg"
                  className="bg-light"
                />
              </Form.Group>

              <div className="d-grid">
                <Button
                  variant="primary"
                  type="submit"
                  size="lg"
                  className="py-3 fw-semibold"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        className="me-2"
                      />
                      Iniciando sesión...
                    </>
                  ) : (
                    'Iniciar Sesión'
                  )}
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Login;
