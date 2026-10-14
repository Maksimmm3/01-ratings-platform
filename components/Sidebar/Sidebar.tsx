import { SidebarProps } from './Sidebar.props';
import { Menu } from '@/components/Menu/Menu';

export const Sidebar = ({ ...props }: SidebarProps) => {
  return (
    <aside {...props}>
      <Menu />
    </aside>
  );
};
