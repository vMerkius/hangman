import { NavLink, useNavigate } from "react-router-dom";
import { Prop_Acc } from "../models/props";

export function AccountsTable({ accounts, columns }: Prop_Acc) {
  const navigate = useNavigate();
  return (
    <div
      style={{
        fontFamily: "sans-serif",
      }}
    >
      <table
        style={{
          border: "1px solid black",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {}
          {accounts.map((account, index) => (
            <tr
              key={account.id}
              style={{ backgroundColor: index % 2 === 1 ? "#CCC" : "white" }}
            >
              <td style={{ padding: "20px" }}>{account.id}</td>
              <td style={{ padding: "20px" }}>{account.username}</td>
              <td style={{ padding: "20px" }}>{account.points}</td>
              <td style={{ padding: "20px" }}>
                <span
                  style={{
                    padding: "7px",
                    background: "black",
                    borderRadius: "20px",
                    marginLeft: "20px",
                  }}
                >
                  <NavLink
                    to={`/account/${account.id}`}
                    style={{
                      color: "yellow",
                      margin: "0 20px",
                      textDecoration: "none",
                      marginLeft: "20px",
                    }}
                  >
                    Details
                  </NavLink>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AccountsTable;
