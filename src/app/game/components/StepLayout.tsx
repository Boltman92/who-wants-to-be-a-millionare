import React from 'react';
import { HexagonProps } from '../types/hexagon.types';
import { COLOR_SCHEMES } from '../constants';

function Hexagon({
  className = '',
  type = 'default',
  width = '75%',
  height = 'auto',
  style,
  children,
  textStyle,
}: HexagonProps) {
  const colorScheme = COLOR_SCHEMES[type];

  const containerStyles: React.CSSProperties = {
    display: 'inline-block',
    width,
    height,
    position: 'relative',
    ...style,
  };

  const textContainerStyles: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    width: '100%',
    padding: '0 10px',
    boxSizing: 'border-box',
    fontSize: '2vh',
    color: colorScheme.textColor,
    ...textStyle,
  };

  return (
    <div style={containerStyles} className={className}>
      <svg
        viewBox="0 0 240 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M13.4526 4.63788C15.6376 2.01596 18.8742 0.5 22.2872 0.5H217.713C221.126 0.5 224.362 2.01597 226.547 4.63788L239.349 20L226.547 35.3621C224.362 37.984 221.126 39.5 217.713 39.5H22.2872C18.8742 39.5 15.6376 37.984 13.4526 35.3621L0.650853 20L13.4526 4.63788Z"
          fill={colorScheme.fill}
          stroke={colorScheme.stroke}
        />
      </svg>
      {children && <div style={textContainerStyles}>{children}</div>}
    </div>
  );
}

export default Hexagon;
