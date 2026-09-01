'use client';

import cn from 'classnames';
import styles from './Textarea.module.css';
import { TextareaProps } from './Textarea.props';

export const Textarea = ({
  label,
  error,
  className,
  ...props
}: TextareaProps) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      {label && <label className={styles.label}>{label}</label>}
      <textarea
        className={cn(styles.textarea, { [styles.error]: error })}
        {...props}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};
