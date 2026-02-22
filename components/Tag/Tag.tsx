import cn from 'classnames';
import styles from './Tag.module.css';
import { TagProps } from './Tag.props';

export const Tag = ({
  size = 's',
  children,
  color = 'ghost',
  href,
  className,
  ...props
}: TagProps) => {
  return (
    <p
      className={cn(styles.tag, className, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.ghost]: color === 'ghost',
        [styles.red]: color === 'red',
        [styles.grey]: color === 'grey',
        [styles.green]: color === 'green',
        [styles.primary]: color === 'primary',
      })} // size and color classes can be applied directly via styles[size] and styles[color] since values are predefined string literals
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </p>
  );
};
