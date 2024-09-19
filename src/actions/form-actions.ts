'use server';

import prisma from '@/lib/db';
import { FontFaceType, FontSizeType, TextAlignmentType } from '@/types/types';
import { Prisma } from '@prisma/client';

export async function createForm(
  title: string,
  selectedTitleFontFace: FontFaceType | null,
  selectedTitleFontSize: FontSizeType | null,
  titleTextColor: string,
  titleTextAlignment: TextAlignmentType | null,
  // Subtitle
  subtitle: string,
  selectedSubtitleFontFace: FontFaceType | null,
  selectedSubtitleFontSize: FontSizeType | null,
  subtitleTextColor: string,
  subtitleTextAlignment: TextAlignmentType | null,
  // Inputs
  isFirstNameRequired: boolean,
  isLastNameRequired: boolean,
  isEmailRequired: boolean,
  // Button
  buttonText: string,
  selectedButtonTextFontFace: FontFaceType | null,
  selectedButtonTextFontSize: FontSizeType | null,
  buttonColor: string
) {
  return await prisma.form.create({
    data: {
      title: title,
      titleFontFace: selectedTitleFontFace
        ? selectedTitleFontFace
        : Prisma.DbNull,
      titleFontSize: selectedTitleFontSize
        ? selectedTitleFontSize
        : Prisma.DbNull,
      titleTextColor: titleTextColor,
      titleTextAlignment: titleTextAlignment
        ? titleTextAlignment
        : Prisma.DbNull,
      // Subtitle
      subtitle: subtitle,
      subtitleFontFace: selectedSubtitleFontFace
        ? selectedSubtitleFontFace
        : Prisma.DbNull,
      subtitleFontSize: selectedSubtitleFontSize
        ? selectedSubtitleFontSize
        : Prisma.DbNull,
      subtitleTextColor: subtitleTextColor,
      subtitleTextAlignment: subtitleTextAlignment
        ? subtitleTextAlignment
        : Prisma.DbNull,
      // Inputs
      isFirstNameRequired: isFirstNameRequired,
      isLastNameRequired: isLastNameRequired,
      isEmailRequired: isEmailRequired,
      // Button
      buttonText: buttonText,
      buttonTextFontFace: selectedButtonTextFontFace
        ? selectedButtonTextFontFace
        : Prisma.DbNull,
      buttonTextFontSize: selectedButtonTextFontSize
        ? selectedButtonTextFontSize
        : Prisma.DbNull,
      buttonColor: buttonColor,
    },
  });
}

export async function getFormsMatchingTitle(titleOrId: string) {
  return await prisma.form.findMany({
    where: {
      OR: [
        {
          title: {
            contains: titleOrId,
            mode: 'insensitive',
          },
        },
        {
          id: {
            contains: titleOrId,
            mode: 'insensitive',
          },
        },
      ],
    },
  });
}
