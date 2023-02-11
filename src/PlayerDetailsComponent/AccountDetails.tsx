import { NavLink, useParams } from "react-router-dom";
import { deleteUser, getAccounts } from "../Services/Services";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Prop_User } from "../models/props";

export function AccountDetails() {
  const [accounts, setAccounts] = useState<Prop_User[]>([]);

  useEffect(() => {
    getAccounts().then((data) => {
      setAccounts(data);
    });
  }, []);

  const id_user = JSON.parse(localStorage.getItem("id") || "");
  const { id } = useParams();
  const user = accounts.find((account) => account.id === Number(id));
  const navigate = useNavigate();
  const handleDelete = async (id: number) => {
    try {
      if (user) {
        deleteUser(user.id);
        localStorage.removeItem("login");
        navigate("/login");
      } else {
        console.error("user is not defined");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      style={{
        margin: "110px auto",
        display: "flex",
        justifyContent: "center",
        fontFamily: "sans-serif",
      }}
    >
      <div>
        <h1>Account Details</h1>
        {user && (
          <div>
            <p>ID: {user.id}</p>
            <p>Username: {user.username}</p>
            <p
              style={{
                marginTop: "10px",
                marginBottom: "30px",
              }}
            >
              Points: {user.points}
            </p>
            {id_user === Number(id) && (
              <span
                style={{
                  padding: "7px",
                  background: "black",
                  borderRadius: "20px",
                  marginLeft: "20px",
                }}
                onClick={() => handleDelete(user.id)}
              >
                <NavLink
                  to={`/`}
                  style={{
                    color: "yellow",
                    margin: "10px 20px",
                    textDecoration: "none",
                  }}
                >
                  Delete Account
                </NavLink>
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
export default AccountDetails;
