import { Container, Table, Button, Form, Image, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { items, total, removeItem, updateQty, clear } = useCart();

  const productos = items.filter(item => item.tipo === 'producto');
  const libros = items.filter(item => item.tipo === 'libro');

  const totalProductos = productos.reduce((acc, i) => acc + (Number(i.precio) || 0) * i.qty, 0);
  const totalLibros = libros.reduce((acc, i) => acc + (Number(i.precio) || 0) * i.qty, 0);

  if (!items.length) {
    return (
      <Container className="py-5">
        <h2>Carrito</h2>
        <p>Tu carrito está vacío.</p>
        <Link to="/catalogo" className="btn btn-primary">Ir al catálogo</Link>
      </Container>
    );
  }

  const renderQuantityControls = (item) => (
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
  );

  return (
    <Container className="py-5">
      <h2 className="mb-4">Carrito de Compras</h2>

      {productos.length > 0 && (
        <>
          <h4 className="mt-4 mb-3">
            <Badge bg="success" className="me-2">Cafetería</Badge>
          </h4>
          <Table hover responsive className="align-middle mb-4">
            <thead>
              <tr>
                <th></th>
                <th>Producto</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th style={{minWidth: 120}}>Cantidad</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {productos.map(item => (
                <tr key={item.id}>
                  <td style={{width: 70}}>
                    {item.imagen ? (
                      <Image src={item.imagen} alt={item.titulo} thumbnail style={{width: 50, height: 50, objectFit: 'cover'}}/>
                    ) : null}
                  </td>
                  <td><strong>{item.titulo}</strong></td>
                  <td>{item.descripcion || item.categoria}</td>
                  <td>{Number(item.precio || 0).toFixed(2)} €</td>
                  <td>{renderQuantityControls(item)}</td>
                  <td><strong>{(Number(item.precio || 0) * item.qty).toFixed(2)} €</strong></td>
                  <td>
                    <Button variant="outline-danger" size="sm" onClick={() => removeItem(item.id)}>
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="text-end mb-4">
            <h5>Subtotal Cafetería: <span className="text-success">{totalProductos.toFixed(2)} €</span></h5>
          </div>
        </>
      )}

      {/* Tabla de Libros */}
      {libros.length > 0 && (
        <>
          <h4 className="mt-4 mb-3">
            <Badge bg="primary" className="me-2">Libros</Badge>
          </h4>
          <Table hover responsive className="align-middle mb-4">
            <thead>
              <tr>
                <th></th>
                <th>Título</th>
                <th>Autor</th>
                <th>Precio</th>
                <th style={{minWidth: 120}}>Cantidad</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {libros.map(item => (
                <tr key={item.id}>
                  <td style={{width: 70}}>
                    {item.imagen ? (
                      <Image src={item.imagen} alt={item.titulo} thumbnail style={{width: 50, height: 50, objectFit: 'cover'}}/>
                    ) : null}
                  </td>
                  <td><strong>{item.titulo}</strong></td>
                  <td>{item.autor || 'Desconocido'}</td>
                  <td>${Number(item.precio || 0).toFixed(2)}</td>
                  <td>{renderQuantityControls(item)}</td>
                  <td><strong>${(Number(item.precio || 0) * item.qty).toFixed(2)}</strong></td>
                  <td>
                    <Button variant="outline-danger" size="sm" onClick={() => removeItem(item.id)}>
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="text-end mb-4">
            <h5>Subtotal Libros: <span className="text-primary">${totalLibros.toFixed(2)}</span></h5>
          </div>
        </>
      )}

      {/* Total General */}
      <hr className="my-4" />
      <div className="d-flex justify-content-between align-items-center">
        <Button variant="outline-secondary" onClick={clear}>Vaciar carrito completo</Button>
        <h3>Total General: <span className="text-success">${total.toFixed(2)}</span></h3>
      </div>
    </Container>
  );
};

export default Cart;
