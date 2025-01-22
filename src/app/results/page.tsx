'use client';

import MainPageContent from '../components/MainPageContent/MainPageContent';
import { COLORS } from '../constants/colors';
import useGameStore from '../store/gameStore';
import styles from './page.module.css';

export default function Results() {
  const { score } = useGameStore();
  const mainContent = (
    <div className={styles.mainContent}>
      <div className={styles.smallText}>Total score:</div>
      <div>$ {score} earned</div>
    </div>
  );
  return (
    <MainPageContent
      style={{ background: COLORS.black[5] }}
      mainContent={mainContent}
      buttonText="Try again"
    />
  );
}
