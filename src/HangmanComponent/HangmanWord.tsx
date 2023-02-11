import { HangmanLetter } from "../ReusableComponents/HangmanLetter";
import { HangmanWordProps } from "../models/props";
export function HangmanWord({ guessedLetters, wordToGuess }: HangmanWordProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        fontSize: "80px",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <HangmanLetter
          key={index}
          letter={letter}
          guessed={guessedLetters.includes(letter)}
        />
      ))}
    </div>
  );
}
