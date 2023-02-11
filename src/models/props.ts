export type My_Prop_error = {
  message: string;
  status: boolean;
};

export type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
};

export type HungmanDrawingProps = {
  numberofGuesses: number;
};

export type HeaderTitle = {
  title: string;
};
export type Prop_User = {
  id: number;
  username: string;
  password: string;
  points: number;
};

export type Prop_Acc = {
  accounts: Array<Prop_User>;
  columns: string[];
};
export type Prop_Message = {
  message: string;
  messageColor: string;
};
export type HangmanLetterProps = {
  letter: string;
  guessed: boolean;
};
export type KeyProps = {
  letter: string;
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean;
};
export type KeyBoardProps = {
  disabled?: boolean;
  addGuessedLetter: (letter: string) => void;
};
