'use client';

import { createContext, useContext, useState } from 'react';
import { Category } from '@/app/generated/prisma/client';

interface AppContextType {
  categories: Category[];
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType>({
  categories: [],
  isMobileMenuOpen: false,
  setIsMobileMenuOpen: () => {},
});

export function AppContextProvider({
  children,
  categories,
}: {
  children: React.ReactNode;
  categories: Category[];
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        categories,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
