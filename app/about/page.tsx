import { Htag } from '@/components';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
};

export default function Home() {
  return (
    <>
      <Htag tag="h1">About</Htag>
      <Link href="/">Home</Link>
    </>
  );
}
