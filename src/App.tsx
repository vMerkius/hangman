import Register from "./RegisterComponent/Register";
import { Route, Routes } from "react-router-dom";
import Hangman from "./HangmanComponent/Hangman";
import Login from "./LoginComponent/Login";
import AccountDetails from "./PlayerDetailsComponent/AccountDetails";
import { PrintTopAccounts } from "./TopPlayersComponents/PrintTopAccounts";
import { Header } from "./Header";

function App() {
  return (
    <div>
      <Header title="Hangman" />
      <Routes>
        <Route path="/" element={<Hangman />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account/:id" element={<AccountDetails />} />
        <Route path="/top" element={<PrintTopAccounts />} />
      </Routes>
    </div>
  );
}

export default App;
