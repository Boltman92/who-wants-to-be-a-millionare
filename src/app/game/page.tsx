import Question from './components/Question/question';
import Steps from './components/Steps/steps';
import styles from './page.module.css';

export default function Game() {
  return (
    <main className={styles.page}>
      <Question />
      <Steps />
    </main>
  );
}
