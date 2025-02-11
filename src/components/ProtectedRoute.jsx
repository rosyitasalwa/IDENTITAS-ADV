import { Navigate } from 'react-router-dom';
import { useAdmin } from '../contexts/AdminContext';

export const ProtectedAdminRoute = ({ children }) => {
  const { isAdmin, loading } = useAdmin();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAdmin) {
    return <Navigate to="/" />;
  }

  return children;
}; 