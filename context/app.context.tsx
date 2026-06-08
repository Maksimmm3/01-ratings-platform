'use client';

import { createContext, useContext } from 'react';
import { Category } from '@/app/generated/prisma/client';

interface AppContextType {
  categories: Category[];
}

const AppContext = createContext<AppContextType>({
  categories: [],
});

export function AppContextProvider({
  children,
  categories,
}: {
  children: React.ReactNode;
  categories: Category[];
}) {
  return (
    <AppContext.Provider
      value={{
        categories,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
