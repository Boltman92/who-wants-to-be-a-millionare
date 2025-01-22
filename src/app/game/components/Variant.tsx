import React from 'react';
import styles from '../page.module.css';
import { HexagonType } from '../types/hexagon.types';
// import Line from './Line';
// import Hexagon from './StepLayout';
import Step from './Step';

interface Props {
  value: React.ReactNode;
  type: HexagonType;
  lineStyle?: React.CSSProperties;
  hexagonStyle?: React.CSSProperties;
  onMouseEnter: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave: React.MouseEventHandler<HTMLButtonElement>;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function Variant({
  value,
  type,
  lineStyle = undefined,
  hexagonStyle = undefined,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: Props) {
  return (
    <button
      className={styles.step}
      type="button"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <Step
        value={value}
        type={type}
        lineStyle={lineStyle}
        hexagonStyle={hexagonStyle}
      />
    </button>
  );
}

export default Variant;
