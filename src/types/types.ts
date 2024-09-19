import { ReactNode } from 'react';

export type FontFaceType = {
  displayName: string;
  tailwindName: string;
  styleName: string;
};

export type FontSizeType = {
  displayName: string;
  tailwindName: string;
  styleName: string;
};

export type TextAlignmentType = {
  displayIcon: ReactNode;
  displayName: string;
  tailwindName: string;
  styleName: 'left' | 'center' | 'right';
};
