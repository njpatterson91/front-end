import React, { useState, useEffect } from "react";
import "../components/SignupForms";
import styled from "styled-components";
import schema from "../schema/schema";
import axios from "axios";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
const AppHead = styled.div`
  background-image: url("https://images.unsplash.com/photo-1575879911904-ca5d889c6c7e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800");
  background-size: 100%;
`;
const Title = styled.h2`
  margin-bottom: 0%auto;
`;
const NiceDiv = styled.div`
  margin: 3% 5% 5% 5%;
  font-weight: bold;
`;
const StyledInput = styled.input`
  border: solid 10px steelblue;
  border-radius: 20px;
  margin-top: 5%;
  &:hover {
    color: blue;
    transform: scale(1.1);
    transition: all 0.5s ease-in-out;
  }
  transition: all 0.5s ease-in-out;
`;
const StyledBtn = styled.button`
  font-size: 2rem;
  border-radius: 15px;
  border: solid skyblue;
  background: steelblue;
  color: white;
  font-weight: bolder;
  margin-bottom: 5%;
  &:hover {
    color: blue;
    transform: scale(1.1);
    transition: all 0.5s ease-in-out;
  }
  transition: all 0.5s ease-in-out;
`;

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  username: "",
  password: "",
};

const initialFormErrors = {

  first_name: "",
  last_name: "",
  username: "",
  email: "",
  password: "",
};
const initialDisabled = false;

export default function Form(props) {
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const history = useHistory();
  const onSignUp = (e) => {
    e.preventDefault();
    console.log("test");
    axios
      .post(
        `https://potluck-planner-api.herokuapp.com/api/auth/register`,
        formValues
      )
      .then((res) => {
        console.log(res);
        history.push("/login");
      })
      .catch((err) => console.log(err));
  };

  const onChange = (evt) => {

    const { name, value } = evt.target;
    /* const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse); */
    console.log(disabled);

    setFormValues({
      ...formValues,
      [name]: value,
    });
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="body">
      <div className="App">
        <header className="App-header">
          <Title>Potluck Planner</Title>
        </header>
      </div>

      <AppHead className="App">
        <form id="theform">
          <div className="errors">

            <div>{formErrors.first_name}</div>
            <div>{formErrors.last_name}</div>
            <div>{formErrors.email}</div>
            <div>{formErrors.username}</div>

            <div>{formErrors.password}</div>
          </div>

          <NiceDiv>
            <label htmlFor="name">First Name </label>
            <StyledInput
              type="text"

              name="first_name"
              value={formValues.first_name}

              onChange={onChange}
            />
          </NiceDiv>
          <NiceDiv>
            <label htmlFor="name"> Last Name </label>
            <StyledInput
              type="text"

              name="last_name"
              value={formValues.last_name}

              onChange={onChange}
            />
          </NiceDiv>

          <NiceDiv>
            <label htmlFor="email">Email </label>
            <StyledInput
              type="text"
              name="email"
              id="email"
              value={formValues.email}
              onChange={onChange}
            />
          </NiceDiv>
          <NiceDiv>
            <label htmlFor="name"> Username </label>
            <StyledInput
              type="text"
              name="username"
              value={formValues.username}
              onChange={onChange}
            />
          </NiceDiv>
          <NiceDiv>
            <label htmlFor="password"> Password</label>
            <StyledInput
              type="password"
              id="password"
              name="password"
              value={formValues.password}
              onChange={onChange}
            />
          </NiceDiv>

          <StyledBtn id="signupBtn" onClick={onSignUp} disabled={disabled}>
            Sign Up!
          </StyledBtn>
        </form>
      </AppHead>
    </div>
  );
}
