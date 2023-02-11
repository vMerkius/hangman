import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HeaderTitle } from "./models/props";

export function Header({ title }: HeaderTitle) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let login = localStorage.getItem("login");
  let id = localStorage.getItem("id");
  const navigate = useNavigate();

  if (login) {
    login = JSON.parse(localStorage.getItem("login") || "");
  }
  if (id) {
    id = JSON.parse(localStorage.getItem("id") || "");
  }

  useEffect(() => {
    if (login) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [login]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("login");
    navigate("/login");
  };
  const handleTitle = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <div
      style={{
        background: "#ffea00",
        fontSize: "30px",
        color: "black",
        display: "flex",
        width: "100%",
        position: "fixed",
        top: "0",
        justifyContent: "space-between",
        fontFamily: "serif",
      }}
    >
      <span
        style={{
          fontSize: "60px",
          color: "black",
          cursor: "pointer",
          marginLeft: "10px",
        }}
        onClick={handleTitle}
      >
        {/* <img src={logo} width="60px" alt="Logo" /> */}
        {title}
      </span>
      {isLoggedIn ? (
        <div>
          <span
            style={{
              padding: "15px",
              background: "black",
              borderRadius: "20px",
              marginRight: "20px",
            }}
          >
            <NavLink
              to={`/top`}
              style={{
                color: "yellow",
                margin: "0 20px",
                textDecoration: "none",
              }}
            >
              Top Players
            </NavLink>
          </span>
          <span
            style={{
              padding: "15px",
              background: "black",
              borderRadius: "20px",
            }}
          >
            <NavLink
              to={`/account/${id}`}
              style={{
                color: "yellow",
                margin: "0 15px",
                textDecoration: "none",
              }}
            >
              {login}
            </NavLink>
          </span>
          <span
            style={{
              padding: "15px",
              background: "black",
              borderBottomLeftRadius: "20px",
              marginLeft: "20px",
            }}
            onClick={handleLogout}
          >
            <NavLink
              to={`/login`}
              style={{
                color: "yellow",
                margin: "0 20px",
                textDecoration: "none",
                marginLeft: "20px",
              }}
            >
              Logout
            </NavLink>
          </span>
        </div>
      ) : (
        <div>
          <span
            style={{
              padding: "15px",
              background: "black",
              borderRadius: "20px",
              marginRight: "20px",
            }}
          >
            <NavLink
              to={`/top`}
              style={{
                color: "yellow",
                margin: "0 20px",
                textDecoration: "none",
              }}
            >
              Top Players
            </NavLink>
          </span>

          <span
            style={{
              padding: "15px",
              background: "black",
              borderRadius: "20px",
            }}
          >
            <NavLink
              to={`/login`}
              style={{
                color: "yellow",
                margin: "10px 20px",
                textDecoration: "none",
              }}
            >
              Login
            </NavLink>
          </span>
          <span
            style={{
              padding: "15px",
              background: "black",
              borderBottomLeftRadius: "20px",
              marginLeft: "20px",
            }}
          >
            <NavLink
              to={`/register`}
              style={{
                color: "yellow",
                margin: "0 20px",
                textDecoration: "none",
                marginLeft: "20px",
              }}
            >
              Register
            </NavLink>
          </span>
        </div>
      )}
    </div>
  );
}
