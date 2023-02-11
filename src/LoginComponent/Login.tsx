import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getAccounts } from "../Services/Services";
import Error from "../ReusableComponents/Error";

const Login = () => {
  const [data, setData] = useState([]);
  const [account, setAccounts] = useState([]);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [Validators, setValidators] = useState({
    ValidUsername: false,
    MessageUsername: "",
    ValidPassword: false,
    MessagePassword: "",
  });
  useEffect(() => {
    getAccounts().then((data) => {
      setAccounts(data);
    });
  }, []);
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChangeLogin = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    validateUserData(e.target);
    setData(e.target.value);
  };
  const handleChangePassword = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    validateUserData(e.target);
  };

  const handleSubmit = (e: any) => {
    let check = 0;
    const logins = account.map((obj) => Object.values(obj)[1]);
    const id = account.map((obj) => Object.values(obj)[0]);
    const passwords = account.map((obj) => Object.values(obj)[2]);
    const points = account.map((obj) => Object.values(obj)[3]);

    setData(e.target.value);
    for (let i = 0; i < logins.length; i++) {
      if (JSON.stringify(logins[i]) == JSON.stringify(values.username))
        if (JSON.stringify(passwords[i] == JSON.stringify(values.password))) {
          check = 1;
          localStorage.setItem("id", JSON.stringify(id[i]));
          localStorage.setItem("points", JSON.stringify(points[i]));
        }
    }
    if (
      Validators.ValidUsername === true &&
      Validators.ValidPassword === true &&
      check == 1
    ) {
      setIsSubmit(true);
      navigate("/");

      localStorage.setItem("login", JSON.stringify(data));
      console.log(JSON.stringify(data));
      check = 0;
    }
    e.preventDefault();
  };
  const validateUserData = (data: any) => {
    const regex2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i;
    if (data.name === "username") {
      if (!data.value) {
        Validators.ValidUsername = false;
        Validators.MessageUsername = "Username is required";
      } else {
        Validators.ValidUsername = true;
        Validators.MessageUsername = "Correct";
      }
    }
    if (data.name === "password") {
      if (!data.value) {
        Validators.ValidPassword = false;
        Validators.MessagePassword = "Password is required";
      } else if (!regex2.test(data.value)) {
        Validators.ValidPassword = false;
        Validators.MessagePassword = "This is not a valid password format!";
      } else {
        Validators.ValidPassword = true;
        Validators.MessagePassword = "Correct";
      }
    }
  };
  return (
    <div
      style={{
        margin: "110px auto",
        display: "flex",
        justifyContent: "center",
        fontFamily: "sans-serif",
        fontSize: "16px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <label style={{ marginRight: "7px" }}>Username</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChangeLogin}
          value={values.username}
        />
        <Error
          status={Validators.ValidUsername}
          message={Validators.MessageUsername}
        ></Error>
        <label style={{ marginRight: "11px" }}>Password</label>
        <input
          type="text"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChangePassword}
        />
        <Error
          status={Validators.ValidPassword}
          message={Validators.MessagePassword}
        ></Error>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "16px",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              background: "black",
              borderRadius: "20px",
              fontFamily: "sans-serif !important",
            }}
          >
            <button
              style={{
                cursor: "pointer",
                display: "inline-block",
                padding: "10px 30px",
                background: "black",
                borderRadius: "20px",
                color: "yellow",
                textDecoration: "none",
              }}
            >
              Login
            </button>
          </div>
          <div
            style={{
              padding: "10px",
              background: "black",
              borderRadius: "20px",
            }}
          >
            <span
              style={{
                background: "black",
                borderRadius: "20px",
              }}
            >
              <NavLink
                to={`/register`}
                style={{
                  color: "yellow",
                  margin: "20px 20px",
                  textDecoration: "none",
                }}
              >
                Register
              </NavLink>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
