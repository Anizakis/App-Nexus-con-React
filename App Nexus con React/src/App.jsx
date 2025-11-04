import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Catalog from './pages/Catalog';
import Coworking from './pages/Coworking';
import Cafeteria from './pages/Cafeteria';
import Events from './pages/Events';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
        <CartProvider>
          <Router>
            <div className="d-flex flex-column min-vh-100 w-100 m-0 p-0">
              <Navbar />
              <main className="flex-grow-1 w-100 m-0 p-0">
                <Routes>
                  <Route path="/" element={<Landing />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/catalogo" element={<Catalog />} />
                  <Route path="/coworking" element={<Coworking />} />
                  <Route path="/cafeteria" element={<Cafeteria />} />
                  <Route path="/eventos" element={<Events />} />
                  <Route path="/perfil" element={
                    <ProtectedRoute>
                        <Profile />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </CartProvider>
    </AuthProvider>
  );
}

export default App;
