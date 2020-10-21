import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  username: "",
  password: "",
};

export default function TempSignUp() {
  const [signup, setSignUp] = useState(initialValues);

  const onChange = (evt) => {
    const { name, value } = evt.target;
    setSignUp({
      ...signup,
      [name]: value,
    });
  };
  const history = useHistory();
  const onSignUp = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://potluck-planner-api.herokuapp.com/api/auth/register`,
        signup
      )
      .then((res) => {
        history.push("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Sign Up</h1>
      <form action="">
        <label htmlFor="first_name">
          First Name
          <input
            type="text"
            name="first_name"
            onChange={onChange}
            value={signup.first_name}
          />
        </label>
        <br />
        <label htmlFor="last_name">
          Last Name
          <input
            type="text"
            name="last_name"
            onChange={onChange}
            value={signup.last_name}
          />
        </label>
        <br />
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            onChange={onChange}
            value={signup.email}
          />
        </label>
        <br />
        <label htmlFor="username">
          Username
          <input
            type="text"
            name="username"
            onChange={onChange}
            value={signup.username}
          />
        </label>
        <br />
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            onChange={onChange}
            value={signup.password}
          />
        </label>
        <br />
        <button onClick={onSignUp}>Sign Up</button>
      </form>
    </div>
  );
}
