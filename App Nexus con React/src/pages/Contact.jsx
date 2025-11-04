import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col><h2>Contacto</h2></Col>
      </Row>
      <Row>
        <Col md={8}>
          {sent && <Alert variant="success">¡Mensaje enviado! Te responderemos pronto.</Alert>}
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control name="name" value={form.name} onChange={onChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={form.email} onChange={onChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows={5} name="message" value={form.message} onChange={onChange} required />
            </Form.Group>
            <Button type="submit">Enviar</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
