import { ComponentProps } from 'react';

export interface TextareaProps extends ComponentProps<'textarea'> {
  label?: string;
  error?: string;
}
