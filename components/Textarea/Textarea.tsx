'use client';

import cn from 'classnames';
import { useId } from 'react';
import styles from './Textarea.module.css';
import { TextareaProps } from './Textarea.props';

export const Textarea = ({
  label,
  error,
  className,
  ...props
}: TextareaProps) => {
  const id = useId();

  return (
    <div className={cn(styles.wrapper, className)}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={cn(styles.textarea, { [styles.error]: error })}
        {...props}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};
