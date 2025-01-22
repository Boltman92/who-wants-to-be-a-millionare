'use client';

import useIsMobile from '@/app/hooks/useIsMobile';
import { useState } from 'react';
import useGameStore from '@/app/store/gameStore';
import CloseIcon from '@/app/icons/CloseIcon';
import MenuIcon from '@/app/icons/MenuIcon';
import styles from './steps.module.css';
import Step from '../Step';

export default function Steps() {
  const isMobile = useIsMobile();
  const [showSteps, setShowSteps] = useState(false);
  const { currentQuestionIndex, questions } = useGameStore();

  const stepsValue = questions.map((question, index) => {
    const type = (() => {
      if (currentQuestionIndex > index) {
        return 'inactive';
      }
      if (currentQuestionIndex === index) {
        return 'active';
      }
      return 'default';
    })();

    return (
      <Step
        value={question.sum.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
        key={question.id}
        type={type}
      />
    );
  });

  return (
    <>
      <button
        onClick={() => setShowSteps(!showSteps)}
        className={styles.showStepsButton}
        type="button"
      >
        {showSteps ? <CloseIcon /> : <MenuIcon />}
      </button>
      {(showSteps || !isMobile) && (
        <div className={styles.steps}>{stepsValue}</div>
      )}
    </>
  );
}
