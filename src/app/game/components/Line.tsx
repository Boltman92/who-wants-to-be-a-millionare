import React from 'react';
import styles from '../page.module.css';

interface Props {
  borderColor?: string;
  style?: React.CSSProperties;
}
function Line({ borderColor = '#D0D0D8', style = undefined }: Props) {
  return (
    <div
      className={styles.line}
      style={{ border: `1px solid ${borderColor}`, ...style }}
    />
  );
}

export default Line;
