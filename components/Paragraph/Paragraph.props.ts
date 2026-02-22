import { ComponentProps, ReactNode } from 'react';

export interface ParagraphProps extends ComponentProps<'p'> {
  children: ReactNode;
  size?: 's' | 'm' | 'l';
}
