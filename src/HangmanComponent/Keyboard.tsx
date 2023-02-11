import { KeyBoardProps } from "../models/props";
import { Key } from "../ReusableComponents/Key";

const KEYS = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];

export function Keyboard({ addGuessedLetter }: KeyBoardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(50px,75px))",

        gap: "5px",
      }}
    >
      {KEYS.map((key) => {
        return (
          <Key letter={key} addGuessedLetter={addGuessedLetter} key={key} />
        );
      })}
    </div>
  );
}
