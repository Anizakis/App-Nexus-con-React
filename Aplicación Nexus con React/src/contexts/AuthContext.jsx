import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Recuperar usuario del localStorage al iniciar
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Guardar usuario en localStorage cuando cambie
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
    setIsLoading(false);
  }, [user]);

  const login = async (credentials) => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Simulación de delay de red
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (credentials.username === 'usuario' && credentials.password === 'password') {
        const userData = {
          username: credentials.username,
          name: 'Usuario Demo',
          email: 'usuario@demo.com',
          role: 'user',
          lastLogin: new Date().toISOString()
        };
        setUser(userData);
        return true;
      }
      
      throw new Error('Credenciales inválidas');
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setError(null);
  };

  const value = {
    user,
    login,
    logout,
    isLoading,
    error
  };

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};