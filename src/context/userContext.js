import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [refresh, setRefresh] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser, setRefresh, refresh }}>
      {children}
    </UserContext.Provider>
  );
};
