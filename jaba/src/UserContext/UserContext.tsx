import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserContextType {
  isUserLoggedIn: boolean;
  logIn: (userProfile: any) => void;
  logOut: () => void;
  user: any;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useAuth = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useAuth must be used within a UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const loginState = localStorage.getItem('isLoggedIn') === 'true'
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(loginState);
  const [user, setUser] = useState<any|null>(null);


  const logIn = (userProfile:any) => {
    localStorage.setItem('isLoggedIn', 'true');
    setUser(userProfile)
    setIsUserLoggedIn(true);
  };

  const logOut = () => {
    setIsUserLoggedIn(false);
  };

  const value = {
    isUserLoggedIn,
    logIn,
    logOut,
    user
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
