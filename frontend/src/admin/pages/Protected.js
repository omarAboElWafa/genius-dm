import { Navigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const Protected = ({ children }) => {
  const cookies = new Cookies();

  if (!cookies.get('Admin')) {
    return <Navigate to='/login' />;
  }

  return children;
};

export default Protected;
