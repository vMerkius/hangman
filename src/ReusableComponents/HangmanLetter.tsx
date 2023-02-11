import { HangmanLetterProps } from "../models/props";

export function HangmanLetter({ letter, guessed }: HangmanLetterProps) {
  return (
    <span style={{ borderBottom: "10px solid black" }}>
      <span style={{ visibility: guessed ? "visible" : "hidden" }}>
        {letter}
      </span>
    </span>
  );
}
