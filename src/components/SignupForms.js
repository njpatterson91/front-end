import React from 'react';
import '../components/SignupForms';
import styled from 'styled-components'


const NiceDiv = styled.div `
margin:10%;
font-weight: bold;

`
const StyledInput = styled.input`
border: solid 10px steelblue;
border-radius: 20px;
&:hover {
    color:blue;
    transform: scale(1.1);
     transition: all .5s ease-in-out;

}
transition: all .5s ease-in-out;

`
const StyledBtn = styled.button`
font-size: 2rem;
border-radius: 15px;
border: solid skyblue ;
background: steelblue;
color: white;
font-weight: bolder;
&:hover {
    color:blue;
    transform: scale(1.1);
     transition: all .5s ease-in-out;

}
transition: all .5s ease-in-out;

`

export default function Form(props){
  
    const { values, submit, change, disabled, errors } = props;
 
    
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
    <form id ='theform' onSubmit = {onSubmit}>
        <div className="App">

            <div className="errors">
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
            </div>

            <NiceDiv>
                <label htmlFor = 'name'> Name </label>
                    <StyledInput 
                    type = 'text'
                    name = 'name'
                    value = {values.name}
                    onChange={onChange}
                />
            </NiceDiv>

            <NiceDiv>
                <label htmlFor = 'email'>Email </label>
                    <StyledInput 
                        type = 'text'
                        name = 'email'
                        id = 'email'
                        value = {values.email}
                        onChange={onChange}
                    />
            </NiceDiv>

            <NiceDiv>
            <label htmlFor = 'password'> Password</label>
                <StyledInput 
                    type ='text'
                    id = 'password' 
                    name = 'password'
                    value = {values.password}
                    onChange={onChange}

                />
            </NiceDiv>

            <StyledBtn id= 'signupBtn' type = 'signup' disabled = {disabled}>Sign Up!</StyledBtn>
        </div>
    </form>
  );
}
