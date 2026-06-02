'use client';

import { useAppContext } from '@/context/app.context';

export const Menu = () => {
  const { categories, openedCategory, setOpenedCategory } = useAppContext();

  return (
    <div>
      <ul>
        {categories.map((cat) => (
          <li key={cat.id} onClick={() => setOpenedCategory(cat.alias)}>
            {cat.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
