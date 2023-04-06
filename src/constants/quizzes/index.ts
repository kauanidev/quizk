import { brazilianMusic } from "./brazilian-music";
import { breakingBad } from "./breaking-bad";
import { friends } from "./friends";
import { general } from "./general";
import { gameOfThrones } from "./got";
import { react } from "./react";
import { soccer } from "./soccer";
import { supernatural } from "./spn";

export type QuizOption = {
  question: string;
  options: string[];
  answer: string;
};

export type Quiz = {
  title: string;
  slug: string;
  category: "series" | "sports" | "music" | "general" | "coding";
  thumbnail: string;
  quiz: QuizOption[];
};

export const quizzes = [
  gameOfThrones,
  supernatural,
  friends,
  breakingBad,
  react,
  soccer,
  brazilianMusic,
  general,
];
