import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('unity_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Mock login
    const mockUser = { id: '1', name: 'John Doe', email, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John' };
    setUser(mockUser);
    localStorage.setItem('unity_user', JSON.stringify(mockUser));
    return true;
  };

  const register = (name, email, password) => {
    // Mock register
    const mockUser = { id: '1', name, email, avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}` };
    setUser(mockUser);
    localStorage.setItem('unity_user', JSON.stringify(mockUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('unity_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
