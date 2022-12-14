import { createContext, useState } from "react";

const SideNavContext = createContext(undefined);

const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <SideNavContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </SideNavContext.Provider>
  );
};

export { SidebarProvider, SideNavContext };
