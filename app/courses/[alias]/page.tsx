interface Props {
  params: Promise<{
    alias: string;
  }>;
}

export default async function CoursePage({ params }: Props) {
  const { alias } = await params;

  return <div>Course page: {alias}</div>;
}
