import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Landing = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&auto=format&fit=crop&q=80",
      title: "Biblioteca",
      text: "Explora nuestra extensa colección de libros"
    },
    {
      url: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=1200&auto=format&fit=crop&q=80",
      title: "Co-Working",
      text: "Espacios diseñados para la productividad"
    },
    {
      url: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1200&auto=format&fit=crop&q=80",
      title: "Cafetería",
      text: "Un ambiente acogedor para relajarte"
    }
  ];

  return (
    <div className="landing-page">
      <div className="hero-section bg-primary text-white">
        <div className="hero-carousel-container">
          <Carousel 
            activeIndex={index} 
            onSelect={handleSelect}
            fade
            controls={false}
            indicators={false}
            interval={5000}
          >
            {carouselImages.map((image, idx) => (
              <Carousel.Item key={idx}>
                <div className="carousel-image-container">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="carousel-image"
                  />
                  <div className="carousel-overlay"></div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <Container fluid className="hero-content px-4">
          <Row className="align-items-center justify-content-center min-vh-50">
            <Col lg={8} className="text-center py-5">
              <h1 className="display-3 fw-bold mb-4">
                Bienvenido a Nexus Library
              </h1>
              <p className="lead fs-4 mb-4">
                Tu espacio multifuncional universitario que combina una librería moderna,
                zona de co-working y una acogedora cafetería.
              </p>
              <p className="fs-5 mb-5">
                Descubre nuestro amplio catálogo de libros, reserva tu espacio de trabajo
                o disfruta de un café mientras estudias.
              </p>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                <Button 
                  variant="light" 
                  size="lg" 
                  onClick={() => navigate('/catalogo')}
                  className="px-4 py-2"
                >
                  Explorar Catálogo
                </Button>
                <Button 
                  variant="outline-light" 
                  size="lg" 
                  onClick={() => navigate('/coworking')}
                  className="px-4 py-2"
                >
                  Reservar Espacio
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container fluid className="py-4 px-4">
        <Row className="g-4 justify-content-center">
          <Col lg={4} md={6}>
            <Card 
              className="h-100 shadow-sm hover-card" 
              role="button"
              onClick={() => navigate('/catalogo')}
            >
              <div className="card-img-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&auto=format&fit=crop&q=80" 
                  alt="Librería" 
                  className="card-img-top"
                />
              </div>
              <Card.Body className="text-center p-4">
                <div className="mb-3">
                  <i className="bi bi-book fs-1 text-primary"></i>
                </div>
                <Card.Title as="h3">Librería</Card.Title>
                <Card.Text>
                  Descubre nuestra amplia selección de libros académicos y literatura.
                  Encontrarás todo lo que necesitas para tu formación y entretenimiento.
                </Card.Text>
                <Button variant="outline-primary" className="mt-3">Ver Catálogo</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card 
              className="h-100 shadow-sm hover-card"
              role="button"
              onClick={() => navigate('/coworking')}
            >
              <div className="card-img-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop&q=80" 
                  alt="Co-Working" 
                  className="card-img-top"
                />
              </div>
              <Card.Body className="text-center p-4">
                <div className="mb-3">
                  <i className="bi bi-laptop fs-1 text-primary"></i>
                </div>
                <Card.Title as="h3">Co-Working</Card.Title>
                <Card.Text>
                  Espacios modernos y confortables para estudiar o trabajar.
                  Ambiente tranquilo y profesional con todas las comodidades.
                </Card.Text>
                <Button variant="outline-primary" className="mt-3">Reservar Espacio</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card 
              className="h-100 shadow-sm hover-card"
              role="button"
              onClick={() => navigate('/cafeteria')}
            >
              <div className="card-img-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&auto=format&fit=crop&q=80" 
                  alt="Cafetería" 
                  className="card-img-top"
                />
              </div>
              <Card.Body className="text-center p-4">
                <div className="mb-3">
                  <i className="bi bi-cup-hot fs-1 text-primary"></i>
                </div>
                <Card.Title as="h3">Cafetería</Card.Title>
                <Card.Text>
                  Disfruta de un café y aperitivos mientras estudias o te relajas.
                  El lugar perfecto para hacer una pausa o reunirte con compañeros.
                </Card.Text>
                <Button variant="outline-primary" className="mt-3">Ver Menú</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;