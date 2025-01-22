/* eslint-disable import/prefer-default-export */
import { COLORS } from '@/app/constants/colors';
import { HexagonType, ColorScheme } from '../types/hexagon.types';

export const COLOR_SCHEMES: Record<HexagonType, ColorScheme> = {
  default: {
    stroke: COLORS.black[40],
    fill: COLORS.white[100],
    textColor: COLORS.black[100],
  },
  inactive: {
    stroke: COLORS.black[40],
    fill: COLORS.white[100],
    textColor: COLORS.black[40],
  },
  selected: {
    stroke: COLORS.orange[100],
    fill: COLORS.orange[5],
    textColor: COLORS.black[100],
  },
  correct: {
    stroke: COLORS.green[100],
    fill: COLORS.green[5],
    textColor: COLORS.black[100],
  },
  wrong: {
    stroke: COLORS.red[100],
    fill: COLORS.red[5],
    textColor: COLORS.black[100],
  },
  active: {
    stroke: COLORS.orange[100],
    fill: COLORS.white[100],
    textColor: COLORS.orange[100],
  },
};
