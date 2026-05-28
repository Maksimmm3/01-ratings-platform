import { getCategories } from './api/categories';

export default async function Home() {
  const categories = await getCategories();

  return (
    <main>
      Home page
      <div>
        <div>{JSON.stringify(categories)}</div>
        <div>{categories.length}</div>
      </div>
    </main>
  );
}

// className={styles.main} - Add styles to the main tag ??

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
