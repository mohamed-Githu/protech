import { createContext, useState } from "react";

const drawerContext = createContext({ open: false });

const DrawerProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <drawerContext.Provider value={{ open, setOpen }}>
      {children}
    </drawerContext.Provider>
  );
};

export { drawerContext, DrawerProvider };
