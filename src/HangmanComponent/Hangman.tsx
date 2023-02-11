import { useState, useCallback, useEffect } from "react";
import words from "../words.json";
import { HangmanDrawing } from "./HangmanDrawing";
import { PrintWord } from "../ReusableComponents/PrintWord";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";
import {
  getAccounts,
  getWordDefinition,
  increasePoints,
} from "../Services/Services";
import { Prop_User } from "../models/props";

function Hangman() {
  const [message, setMessage] = useState("");
  const [definition, setDefinition] = useState("");
  const [messageColor, setMessageColor] = useState("");
  const [accounts, setAccounts] = useState<Prop_User[]>([]);

  let login = localStorage.getItem("login");
  if (login) {
    login = JSON.parse(localStorage.getItem("login") || "");
  }
  const id = JSON.parse(localStorage.getItem("id") || "");

  const [wordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter:string) => guessedLetters.includes(letter));
  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );
  //console.log(guessedLetters);

  useEffect(() => {
    getAccounts().then((data: Prop_User[]) => {
      setAccounts(data);
    });
  }, []);

  useEffect(() => {
    if (isWinner) {
      getWordDefinition(wordToGuess).then((first_definition) => {
        setDefinition(first_definition);
      });
      increasePoints(id);
      setMessage("Winner!");
      setMessageColor("green");
    }
    if (isLoser) {
      setMessage("Nice try...");
      setMessageColor("red");
    }
  }, [isWinner, isLoser, id, wordToGuess]);
  console.log(accounts);
  console.log(wordToGuess);

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "110px auto",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>
        <PrintWord message={message} messageColor={messageColor} />
      </div>
      <HangmanDrawing numberofGuesses={incorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <span style={{ fontSize: "20px" }}>{definition}</span>
      <div
        style={{
          alignSelf: "stretch",
        }}
      >
        <Keyboard
          disabled={isWinner || isLoser}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default Hangman;
