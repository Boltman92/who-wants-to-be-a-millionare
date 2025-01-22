import Link from 'next/link';
import React from 'react';
import useGameStore from '@/app/store/gameStore';
import styles from './textBlock.module.css';

interface Props {
  mainContent: React.ReactNode;
  buttonText: string;
}

function TextBlock({ mainContent, buttonText }: Props) {
  const { setScore } = useGameStore();
  return (
    <div className={styles.textBlock}>
      <span className={`${styles.mainText} ${styles.boldFont}`}>
        {mainContent}
      </span>
      <Link href="/game" className={styles.button}>
        <button
          type="button"
          className={`${styles.startButton} ${styles.boldFont}`}
          onClick={() => setScore()}
        >
          {buttonText}
        </button>
      </Link>
    </div>
  );
}

export default TextBlock;
