import { Htag } from '@/components/Htag/Htag';
// import styles from './page.module.css';
import { Metadata } from 'next';
import { Button } from '@/components';

export async function generateMetadata(): Promise<Metadata> {
  // actions
  return {
    title: 'Computed metadata',
  };
}

export default function Home() {
  return (
    <div>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary" arrow="right">
        Button
      </Button>
      <Button appearance="ghost" arrow="down">
        Button
      </Button>
    </div>
  );
}
