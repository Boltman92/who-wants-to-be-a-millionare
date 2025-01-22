import Image from 'next/image';
import React from 'react';
import styles from './mainPageContent.module.css';
import TextBlock from '../TextBlock/TextBlock';

interface Props {
  style?: React.CSSProperties;
  mainContent: React.ReactNode;
  buttonText: string;
}

function MainPageContent({
  style = undefined,
  buttonText,
  mainContent,
}: Props) {
  return (
    <div className={styles.page} style={style}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/hand-start-game.svg"
          alt="start game icon"
          width={624}
          height={367}
          priority
        />
        <TextBlock mainContent={mainContent} buttonText={buttonText} />
      </main>
    </div>
  );
}

export default MainPageContent;
