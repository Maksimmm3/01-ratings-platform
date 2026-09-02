import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const reviews = await prisma.review.findMany();
  return NextResponse.json(reviews);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { courseId, name, text, rating } = body;

    if (!courseId || !name || !text || !rating) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 },
      );
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5' },
        { status: 400 },
      );
    }

    const course = await prisma.course.findUnique({
      where: { id: courseId },
    });

    if (!course) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    }

    const review = await prisma.review.create({
      data: {
        name,
        text,
        rating,
        courseId,
      },
    });

    return NextResponse.json(review, { status: 201 });
  } catch (error) {
    console.error('Error creating review:', error);
    return NextResponse.json(
      { error: 'Failed to create review' },
      { status: 500 },
    );
  }
}
