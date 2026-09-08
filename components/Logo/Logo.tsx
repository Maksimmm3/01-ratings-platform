import { FaBook } from 'react-icons/fa';
import cn from 'classnames';
import styles from './Logo.module.css';
import { LogoProps } from './Logo.props';

export const Logo = ({ size = 'large', className, ...props }: LogoProps) => {
  return (
    <div className={cn(styles.logo, className)} {...props}>
      <FaBook
        className={cn(styles.icon, {
          [styles.smallIcon]: size === 'small',
          [styles.largeIcon]: size === 'large',
        })}
      />
      <span
        className={cn(styles.name, {
          [styles.smallText]: size === 'small',
          [styles.largeText]: size === 'large',
        })}
      >
        CourseHub
      </span>
    </div>
  );
};
