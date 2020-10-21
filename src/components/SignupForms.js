import React, { useState, useEffect } from "react";
import "../components/SignupForms";
import styled from "styled-components";
import schema from "../schema/schema";
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
const initialprofiles = [];

const initialFormValues = {
  fName: "",
  lName: "",
  email: "",
  userName: "",
  password: "",
};
const initialFormErrors = {
  fName: "",
  lName: "",
  userName: "",
  email: "",
  password: "",
  terms: "",
};
const initialDisabled = false;

export default function Form(props) {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [profiles, setprofiles] = useState(initialprofiles);

  const { submit, change } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value} = evt.target;
    /* const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse); */
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

  const formSubmit = () => {
    const newProfile = {
      fName: formValues.name.trim(),
      lName: formValues.name.trim(),
      email: formValues.email.trim(),
      userName:formValues.userName.trim(),
      password: formValues.password.trim(),
    };
    setprofiles(...profiles, newProfile);
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, []);

  return (
    <div className="body">
      <div className="App">
        <header className="App-header">
          <Title>Potluck Planner</Title>
        </header>
      </div>

      <AppHead className="App">
        <form id="theform" onSubmit={onSubmit}>
          <div className="errors">
            <div>{formErrors.fName}</div>
            <div>{formErrors.lName}</div>
            <div>{formErrors.email}</div>
            <div>{formErrors.userName}</div>
            <div>{formErrors.password}</div>
          </div>

          <NiceDiv>
            <label htmlFor="name">First Name </label>
            <StyledInput
              type="text"
              name="fName"
              value={formValues.fname}
              onChange={onChange}
            />
          </NiceDiv>
          <NiceDiv>
            <label htmlFor="name"> Last Name </label>
            <StyledInput
              type="text"
              name="lName"
              value={formValues.lName}
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
              name="userName"
              value={formValues.userName}
              onChange={onChange}
            />
          </NiceDiv>
          <NiceDiv>
            <label htmlFor="password"> Password</label>
            <StyledInput
              type="text"
              id="password"
              name="password"
              value={formValues.password}
              onChange={onChange}
            />
          </NiceDiv>

          <StyledBtn id="signupBtn" type="signup" disabled={disabled}>
            Sign Up!
          </StyledBtn>
        </form>
      </AppHead>
    </div>
  );
}
