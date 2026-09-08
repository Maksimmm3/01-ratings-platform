import { ComponentProps } from 'react';

export interface LogoProps extends ComponentProps<'div'> {
  size?: 'small' | 'large';
}
