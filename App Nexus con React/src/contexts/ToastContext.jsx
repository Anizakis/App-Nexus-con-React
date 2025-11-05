import { createContext, useContext, useMemo, useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const show = (message, variant = 'success') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, variant }]);
  };

  const remove = (id) => setToasts((prev) => prev.filter(t => t.id !== id));

  const value = useMemo(() => ({ show }), []);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1080 }}>
        {toasts.map(t => (
          <Toast key={t.id} onClose={() => remove(t.id)} bg={t.variant}
                 autohide delay={2000}>
            <Toast.Body className="text-white">
              {t.message}
            </Toast.Body>
          </Toast>
        ))}
      </ToastContainer>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast debe usarse dentro de un ToastProvider');
  return ctx;
};
