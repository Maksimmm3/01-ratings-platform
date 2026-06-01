'use client';

import { createContext, useContext, useState } from 'react';
import { Category } from '@/app/generated/prisma/client';

interface AppContextType {
  categories: Category[];
  openedCategory: string | null;
  setOpenedCategory: (alias: string | null) => void;
}

const AppContext = createContext<AppContextType>({
  categories: [],
  openedCategory: null,
  setOpenedCategory: () => {},
});

export function AppContextProvider({
  children,
  categories,
}: {
  children: React.ReactNode;
  categories: Category[];
}) {
  const [openedCategory, setOpenedCategory] = useState<string | null>(null);

  return (
    <AppContext.Provider
      value={{ categories, openedCategory, setOpenedCategory }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
