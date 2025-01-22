/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

const correctAnswers: { [key: number]: number[] } = {
  1: [2],
  2: [1],
  3: [1],
  4: [3],
  5: [0],
  6: [1],
  7: [0],
  8: [1],
  9: [2],
  10: [0],
  11: [0],
  12: [1],
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, selectedAnswers }: { id: number; selectedAnswers: number[] } =
      body;

    if (!id || !Array.isArray(selectedAnswers)) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    const correct = correctAnswers[id];

    if (!correct) {
      return NextResponse.json(
        { error: 'Question not found' },
        { status: 404 }
      );
    }

    const isCorrect =
      selectedAnswers.every((answer) => correct.includes(answer)) &&
      selectedAnswers.length === correct.length;

    return NextResponse.json({ isCorrect });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
