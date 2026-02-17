import { Htag } from '@/components/Htag/Htag';
import styles from './page.module.css';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  // actions
  return {
    title: 'Computed metadata',
  };
}

export default function Home() {
  return (
    <div>
      <h1>Hello from Next.js</h1>
      <Htag tag="h1">Text</Htag>
    </div>
  );
}
