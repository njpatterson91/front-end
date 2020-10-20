import React, {useState, useEffect} from 'react';
import Form from './components/SignupForms'
import {v4 as uuid} from 'uuid'
import * as yup from 'yup'
import './App.css';
import schema from './schema/schema'
import styled from 'styled-components'


/* const initialprofiles = [
  {id: uuid(), name: 'Throckmorton', email:'sk8tercousin@hawtmail.com', password: 'coolsk8'},
  {id: uuid(), name: 'Hue Janus', email:'HueJ@hautmail.com', password: 'hole'},
  {id: uuid(), name: 'Phil Mckracken', email:'Philcrack@hautmail.com', password: 'Davey Jones Locker'},
] */


export default function App() {
  
  
  /* const inputChange = (name, value) => {
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

    setFormValues({
      ...formValues,
      [name]: value, 
    });
  }; */

  

  return Form
}

