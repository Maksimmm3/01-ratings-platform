'use client';

import cn from 'classnames';
import { useId } from 'react';
import styles from './Input.module.css';
import { InputProps } from './Input.props';

export const Input = ({ label, error, className, ...props }: InputProps) => {
  const id = useId();

  return (
    <div className={cn(styles.wrapper, className)}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(styles.input, { [styles.error]: error })}
        {...props}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};
