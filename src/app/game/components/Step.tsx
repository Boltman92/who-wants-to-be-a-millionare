import React from 'react';
import styles from '../page.module.css';
import { HexagonType } from '../types/hexagon.types';
import Line from './Line';
import Hexagon from './StepLayout';

interface Props {
  value: React.ReactNode;
  type: HexagonType;
  lineStyle?: React.CSSProperties;
  hexagonStyle?: React.CSSProperties;
}

function Step({
  value,
  type,
  lineStyle = undefined,
  hexagonStyle = undefined,
}: Props) {
  return (
    <div className={styles.step}>
      <Line style={lineStyle} />
      <Hexagon type={type} style={hexagonStyle}>
        <div className={styles.stepValue}>{value}</div>
      </Hexagon>
      <Line style={lineStyle} />
    </div>
  );
}

export default Step;
