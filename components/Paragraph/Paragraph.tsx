import cn from 'classnames';
import styles from './Paragraph.module.css';
import { ParagraphProps } from './Paragraph.props';

export const Paragraph = ({
  children,
  size = 'm',
  className,
  ...props
}: ParagraphProps) => {
  return (
    <p className={cn(styles.p, className, styles[size])} {...props}>
      {children}
    </p>
  );
};
