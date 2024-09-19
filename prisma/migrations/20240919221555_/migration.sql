-- CreateTable
CREATE TABLE "Form" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "titleFontFace" JSONB,
    "titleFontSize" JSONB,
    "titleTextColor" TEXT,
    "titleTextAlignment" JSONB,
    "subtitle" TEXT NOT NULL,
    "subtitleFontFace" JSONB,
    "subtitleFontSize" JSONB,
    "subtitleTextColor" TEXT,
    "subtitleTextAlignment" JSONB,
    "isFirstNameRequired" BOOLEAN DEFAULT false,
    "isLastNameRequired" BOOLEAN DEFAULT false,
    "isEmailRequired" BOOLEAN DEFAULT true,
    "buttonText" TEXT NOT NULL,
    "buttonTextFontFace" JSONB,
    "buttonTextFontSize" JSONB,
    "buttonColor" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Form_pkey" PRIMARY KEY ("id")
);
