import { ComponentProps, ReactNode } from 'react';

// extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> - legacy, use ComponentProps<'button'> instead

export interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
  appearance: 'primary' | 'ghost';
  arrow?: 'right' | 'down' | 'none';
}
