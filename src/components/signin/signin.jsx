import React, { useState } from "react";
import "./signin.styles.scss";

import { FormInput } from '../../components/form-input/form-input';
import {  CustomButton } from "../../components/custom-button/custom-button";

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    console.log(email, password);
  };

  const handleChange = event => {
       const { value, name } = event.target;
          if(name === 'email') setEmail(value);
          if(name === 'password') setPassword(value);
  };

  return (
    <div className="sing-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit} action>
        <FormInput
          name="email"
          label="email"
          value={email}
          type="email"
          onChange={handleChange}
          required
          autoFocus
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        < CustomButton type='submit' children='Sign in' />
      </form>
    </div>
  );
};
