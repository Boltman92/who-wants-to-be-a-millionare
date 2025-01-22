import { COLORS } from '@/app/constants/colors';
import React from 'react';

export type HexagonType =
  | 'default'
  | 'inactive'
  | 'active'
  | 'correct'
  | 'wrong'
  | 'selected';

export interface HexagonProps {
  className?: string;
  color?: string;
  type?: HexagonType;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  textStyle?: React.CSSProperties;
}

type ColorValues = {
  [K in keyof typeof COLORS]: (typeof COLORS)[K][keyof (typeof COLORS)[K]];
}[keyof typeof COLORS];

export interface ColorScheme {
  stroke: ColorValues;
  fill: ColorValues;
  textColor: ColorValues;
}
