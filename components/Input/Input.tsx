'use client';

import cn from 'classnames';
import styles from './Input.module.css';
import { InputProps } from './Input.props';

export const Input = ({ label, error, className, ...props }: InputProps) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        className={cn(styles.input, { [styles.error]: error })}
        {...props}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};
