import { Container, Table, Button, Form, Image } from 'react-bootstrap';
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
      <Table hover responsive className="align-middle">
        <thead>
          <tr>
            <th></th>
            <th>Libro</th>
            <th>Autor</th>
            <th>Precio</th>
            <th style={{minWidth: 120}}>Cantidad</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td style={{width: 70}}>
                {item.imagen ? (
                  <Image src={item.imagen} alt={item.titulo} thumbnail style={{width: 50, height: 50, objectFit: 'cover'}}/>
                ) : null}
              </td>
              <td>{item.titulo}</td>
              <td>{item.autor}</td>
              <td>${Number(item.precio || 0).toFixed(2)}</td>
              <td>
                <div className="d-inline-flex align-items-center" role="group" aria-label="Cambiar cantidad">
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => updateQty(item.id, item.qty - 1)}
                    disabled={item.qty <= 1}
                    aria-label={`Reducir cantidad de ${item.titulo}`}
                    className="p-0 d-inline-flex align-items-center justify-content-center me-2"
                    style={{ width: 28, height: 28, lineHeight: 1 }}
                  >
                    −
                  </Button>

                  <span className="px-2 small" style={{ minWidth: 20, textAlign: 'center' }}>
                    {item.qty}
                  </span>

                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => updateQty(item.id, item.qty + 1)}
                    aria-label={`Aumentar cantidad de ${item.titulo}`}
                    className="p-0 d-inline-flex align-items-center justify-content-center ms-2"
                    style={{ width: 28, height: 28, lineHeight: 1 }}
                  >
                    +
                  </Button>
                </div>

              </td>

              <td>${(Number(item.precio || 0) * item.qty).toFixed(2)}</td>
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
