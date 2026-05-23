// 'use client';

// TODO: While the component uses state, it's marked with "use client".
// Remove "use client" directive when useState is removed,
// and uncomment the metadata import and metadata generation function.

// import styles from './page.module.css';
// import { Metadata } from 'next';
// import Link from 'next/link'; - зачем этот импорт был
// import { useState } from 'react'; - был импорт когда был юз клиент
// import { Htag, Button, Paragraph, Tag, Rating } from '@/components'; - пока не всраивал, убрал
import { API } from './api';
import { MenuItem } from '@/interfaces/menu.interface';

// export async function generateMetadata(): Promise<Metadata> {
//   // actions
//   return {
//     title: 'Computed metadata',
//   };
// }

async function getMenu(firstCategory: number): Promise<MenuItem[]> {
  const res = await fetch(API.topPage.find, {
    method: 'POST',
    body: JSON.stringify({
      firstCategory,
    }),
    headers: new Headers({ 'content-type': 'application/json' }),
  });
  return res.json();
}

// const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
//   firstCategory: 0,
// });

export default async function Home() {
  const menu = await getMenu(0);
  // const [rating, setRating] = useState<number>(4);

  return (
    // className={styles.main} - Add styles to the main tag
    <main>
      Главная страница
      <div>
        <div>{JSON.stringify(menu)}</div>
        <div>{menu.length}</div>
      </div>
    </main>

    // <div>
    //   <Htag tag="h1">Text</Htag>
    //   <Button appearance="primary" arrow="right">
    //     Button
    //   </Button>
    //   <Button appearance="ghost" arrow="down">
    //     Button
    //   </Button>
    //   <Paragraph size="s">
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ratione
    //   </Paragraph>
    //   <Paragraph>
    //     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae rem
    //   </Paragraph>
    //   <Paragraph size="l">
    //     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis totam
    //   </Paragraph>
    //   <Tag size="s">Ghost</Tag>
    //   <Tag size="m" color="red">
    //     Red
    //   </Tag>
    //   <Tag size="s" color="green">
    //     Green
    //   </Tag>
    //   <Tag color="primary">Primary</Tag>
    //   <Rating rating={rating} isEditable setRating={setRating} />
    //   <Link href="/about">About</Link>
    // </div>
  );
}
