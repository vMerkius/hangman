import { KeyProps } from "../models/props";

export const Key = ({ letter, addGuessedLetter }: KeyProps) => {
  return <button onClick={() => addGuessedLetter(letter)}>{letter}</button>;
};
