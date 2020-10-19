import React from 'react';
import '../components/SignupForms';


export default function Form(props){
  
    const { values, submit, change, disabled } = props;
 
    
    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
      };

    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
    };
  return (
    <div className="App">
        <form id ='theform' onSubmit = {onSubmit}>

            <div>
                <label htmlFor = 'name'> Name </label>
                    <input 
                    type = 'text'
                    name = 'name'
                    value = {values.name}
                    onChange={onChange}
                />
            </div>

            <div>
                <label htmlFor = 'email'>Email </label>
                    <input 
                        type = 'text'
                        name = 'email'
                        id = 'email'
                        value = {values.email}
                        onChange={onChange}
                    />
            </div>

            <div>
            <label htmlFor = 'password'> Password</label>
                <input 
                    type ='text'
                    id = 'password' 
                    name = 'password'
                    value = {values.password}
                    onChange={onChange}

                />
            </div>

            <button id= 'submitBtn' type = 'submit' disabled = {disabled}>Submit</button>
        </form>
    </div>
  );
}
