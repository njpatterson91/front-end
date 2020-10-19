import React from 'react';
import '../components/SignupForms';
import styled from 'styled-components'

const AppHead = styled.div`
background-image: url('https://images.unsplash.com/photo-1575879911904-ca5d889c6c7e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800');

background-size: 100%;
`

const NiceDiv = styled.div `
margin:3% 5% 5% 5%;
font-weight: bold;
`
const StyledInput = styled.input`
border: solid 10px steelblue;
border-radius: 20px;
margin-top: 5%;
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
margin-bottom: 5%;
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
        <AppHead className="App">

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
        </AppHead>
    </form>
  );
}
