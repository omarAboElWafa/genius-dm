import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  return <AuthContext.Provider value={{ admin, setAdmin }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
