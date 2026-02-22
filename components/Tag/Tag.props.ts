import { ComponentProps, ReactNode } from 'react';

export interface TagProps extends ComponentProps<'div'> {
  children: ReactNode;
  size?: 's' | 'm';
  color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
  href?: string;
}
