import { Container, Table, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { items, total, removeItem, updateQty, clear } = useCart();

  if (!items.length) {
    return (
      <Container className="py-5">
        <h2>Carrito</h2>
        <p>Tu carrito está vacío.</p>
        <Link to="/catalogo" className="btn btn-primary">Ir al catálogo</Link>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h2 className="mb-4">Carrito</h2>
      <Table hover responsive>
        <thead>
          <tr>
            <th>Libro</th>
            <th>Autor</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>${Number(item.price || 0).toFixed(2)}</td>
              <td style={{ maxWidth: 120 }}>
                <Form.Control
                  type="number"
                  min={1}
                  value={item.qty}
                  onChange={e => updateQty(item.id, parseInt(e.target.value || '1', 10))}
                />
              </td>
              <td>${(Number(item.price || 0) * item.qty).toFixed(2)}</td>
              <td>
                <Button variant="outline-danger" size="sm" onClick={() => removeItem(item.id)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-between align-items-center">
        <Button variant="outline-secondary" onClick={clear}>Vaciar carrito</Button>
        <h4>Total: ${total.toFixed(2)}</h4>
      </div>
    </Container>
  );
};

export default Cart;
