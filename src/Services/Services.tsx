import axios from "axios";
import { Prop_User } from "../models/props";

export const getAccounts = async () => {
  try {
    const { data } = await axios.get("http://localhost:8000/accounts");
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const increasePoints = async (id: number) => {
  try {
    let user;
    const { data } = await axios.get(`http://localhost:8000/accounts/${id}`);
    user = data;
    user.points += 1;
    const { data: result } = await axios.put(
      `http://localhost:8000/accounts/${id}`,
      user
    );
    console.log(result);
  } catch (err) {
    console.error(err);
  }
};

export const createAccount = async (account: Prop_User) => {
  try {
    const { data } = await axios.post(
      "http://localhost:8000/accounts",
      account
    );
    console.log("Success:", data);
  } catch (error) {
    console.error("Error:", error);
  }
};

export const deleteUser = async (id: number) => {
  try {
    const { data } = await axios.delete(`http://localhost:8000/accounts/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

//https://dictionaryapi.dev/

export const getWordDefinition = async (word: string) => {
  try {
    const { data } = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const firstDefinition = data[0].meanings[0].definitions[0].definition;
    return firstDefinition;
  } catch (error) {
    console.error(error);
  }
};
