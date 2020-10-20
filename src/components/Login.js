import React, { useState } from 'react'
import * as yup from "yup";

const initialFormValues = {
    username:"",
    password:"",
}
const initialFormErrors = {
    username:"",
    password:"",
}

export default function Login() {
const [formValues, setFormValues] = useState(initialFormValues);
const [formErrors, setFormErrors] = useState(initialFormErrors);

    // form validaion using yup
    const validationSchema = yup.object().shape({
        username:yup
            .string()
            .required("Username is required")
            .min(5, "Username must be atleast 5 characters"),

        password:yup
            .string()
            .required("Password is required")
            .min(8, "Password must be atleast 8 characters"),
    })

    // event handler that maps input and input errors to state
    const onChange = (evt) => {
        const { name, value } = evt.target;
        setFormValues({
            ...formValues,
            [name]: value, 
        });
        yup 
            .reach(validationSchema, name)
            .validate(value).then(()=>{
                setFormErrors({
                    ...formErrors, [name]: "",
                })
            })
            .catch((err)=>{
                setFormErrors({
                    ...formErrors, [name]: err.errors[0],
                })
        })
    };

    return (
        // login form
        <div>
            <h1>Login</h1>
            <form>
                <label>Username: 
                    <input type="text" name="username" onChange={onChange} value={formValues.username}  />
                    <div>{formErrors.username}</div>
                </label>
                <label>Password: 
                    <input type="password" name="password" onChange={onChange} value={formValues.password} />
                    <div>{formErrors.password}</div>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}
