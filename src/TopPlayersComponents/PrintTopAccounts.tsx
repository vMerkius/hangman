import { useEffect, useState } from "react";
import AccountsTable from "./AccountsTable";
import { getAccounts } from "../Services/Services";
import { Prop_User } from "../models/props";

export function PrintTopAccounts() {
  const [accounts, setAccounts] = useState<Prop_User[]>([]);
  const columns = ["ID", "Username", "Points"];

  let login = localStorage.getItem("login");
  let id = localStorage.getItem("id");

  if (login) {
    login = JSON.parse(localStorage.getItem("login") || "");
  }
  if (id) {
    id = JSON.parse(localStorage.getItem("id") || "");
  }

  useEffect(() => {
    getAccounts().then((data: Prop_User[]) => {
      setAccounts(data);
    });
  }, []);

  const topFiveAccounts = accounts
    .sort((a, b) => b.points - a.points)
    .slice(0, 5);
  return (
    <div>
      <div
        style={{
          margin: "110px auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <h1 style={{ textAlign: "center", marginBottom: "50px" }}>
            Top 5 Players
          </h1>

          <AccountsTable accounts={topFiveAccounts} columns={columns} />
        </div>
      </div>
    </div>
  );
}
