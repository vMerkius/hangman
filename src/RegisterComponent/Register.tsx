import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Error from "../ReusableComponents/Error";
import { createAccount } from "../Services/Services";

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
    confirm_pass: "",
  });
  const [account, setAccount] = useState({
    id: 0,
    username: "",
    password: "",
    points: 0,
  });
  const [Validators, setValidators] = useState({
    ValidUsername: false,
    MessageUsername: "",
    ValidPassword: false,
    MessagePassword: "",
    ValidConfirmPassowrd: false,
    MessageConfirmPassowrd: "",
  });

  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange_1 = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setAccount({ ...account, [e.target.name]: e.target.value });
    validateUserData(e.target);
  };
  const handleChange_2 = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    validateUserData(e.target);
  };

  const handleSubmit = (e: any) => {
    if (
      Validators.ValidConfirmPassowrd === true &&
      Validators.ValidUsername === true &&
      Validators.ValidPassword === true
    ) {
      createAccount(account);
      setIsSubmit(true);
      navigate("/login");
    }
    e.preventDefault();
  };
  const validateUserData = (data: any) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i;
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
      } else if (!regex.test(data.value)) {
        Validators.ValidPassword = false;
        Validators.MessagePassword = "This is not a valid password format!";
      } else {
        Validators.ValidPassword = true;
        Validators.MessagePassword = "Correct";
      }
    }
    if (data.name === "confirm_pass") {
      if (!data.value) {
        Validators.ValidConfirmPassowrd = false;
        Validators.MessageConfirmPassowrd = "Confirm Password is required";
      } else if (values.password === data.value) {
        Validators.ValidConfirmPassowrd = true;
        Validators.MessageConfirmPassowrd = "Correct";
      } else {
        Validators.ValidConfirmPassowrd = false;
        Validators.MessageConfirmPassowrd = "Passwords are not the same";
      }
    }
  };
  return (
    <div
      style={{
        margin: "110px auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        fontSize: "16px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h1 style={{ textAlign: "center" }}>Register Form</h1>
        <label style={{ marginRight: "7px" }}>Username</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange_1}
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
          onChange={handleChange_1}
        />
        <Error
          status={Validators.ValidPassword}
          message={Validators.MessagePassword}
        ></Error>
        <label style={{ marginRight: "7px" }}>Confirm Password</label>
        <input
          type="text"
          name="confirm_pass"
          placeholder="Confirm Password"
          value={values.confirm_pass}
          onChange={handleChange_2}
        />
        <Error
          status={Validators.ValidConfirmPassowrd}
          message={Validators.MessageConfirmPassowrd}
        ></Error>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
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
              Register
            </button>
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            borderRadius: "20px",
            marginTop: "20px",
            alignItems: "center",
          }}
        >
          <span
            style={{
              borderRadius: "20px",
              fontSize: "20px",
            }}
          >
            <NavLink
              to={`/login`}
              style={{
                color: "black",
                textDecoration: "underline",
              }}
            >
              I already have account
            </NavLink>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Register;
