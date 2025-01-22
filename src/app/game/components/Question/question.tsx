'use client';

import useGameStore from '@/app/store/gameStore';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './question.module.css';
import Variant from '../Variant';
import { HexagonType } from '../../types/hexagon.types';

const VARIANTS = ['A', 'B', 'C', 'D'];

const delay = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export default function Question() {
  const { currentQuestionIndex, questions, nextQuestion } = useGameStore();
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
  const router = useRouter();

  const [typeByStep, setTypeByStep] = useState<{
    [index: number]: HexagonType;
  }>();

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    if (!currentQuestion) {
      router.push('/results');
    }
  }, [currentQuestion, router]);

  const { question, variants } = currentQuestion ?? {};

  const renderVariants = variants?.map((variant, index) => {
    const value = (
      <div className={styles.variantValue}>
        <span className={styles.variantLabel}>{VARIANTS[index]}</span>
        {variant}
      </div>
    );

    const handleMouseEnter = () => {
      if (!selectedVariant) {
        setTypeByStep({ [index]: 'active' });
      }
    };
    const handleMouseLeave = () => {
      if (!selectedVariant) {
        setTypeByStep({ [index]: 'default' });
      }
    };
    const handleClick = async () => {
      if (!selectedVariant) {
        setSelectedVariant(variant);
        setTypeByStep({ ...typeByStep, [index]: 'selected' });

        await delay(500);

        const isCorrect = currentQuestion.correctAnswers[0] === index;

        setTypeByStep({
          ...typeByStep,
          [index]: isCorrect ? 'correct' : 'wrong',
        });
        await delay(500);

        if (!isCorrect) {
          nextQuestion(isCorrect, currentQuestion.sum);
          router.push('/results');
        } else {
          nextQuestion(isCorrect, currentQuestion.sum);
          setTypeByStep({ ...typeByStep, [index]: 'default' });
        }
        setSelectedVariant(null);
      }
    };

    return (
      <Variant
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        value={value}
        type={typeByStep?.[index] ?? 'default'}
        lineStyle={{ maxWidth: '17px' }}
        hexagonStyle={{ flex: 1 }}
        key={variant}
      />
    );
  });

  return (
    <div className={styles.questionBlock}>
      <div className={styles.question}>{question}</div>
      <div className={styles.variantsBlock}>{renderVariants}</div>
    </div>
  );
}
