import cn from 'classnames';
import { format } from 'date-fns';
import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';

export const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <span>
        Rating Platform © 2023-{format(new Date(), 'yyyy')}. All rights reserved
      </span>
      <nav>
        <a href="#" target="_blank">
          User Agreement
        </a>
        <a href="#" target="_blank">
          Privacy Policy
        </a>
      </nav>
    </footer>
  );
};
