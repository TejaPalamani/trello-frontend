'use client';
import React, { createContext, useState } from 'react';

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [todos, setTodos] = useState([]);

  const [isVisible, setIsVisible] = useState(false);

  return (
    <AppContext.Provider
      value={{ todos, setTodos, user, setUser, isVisible, setIsVisible }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
