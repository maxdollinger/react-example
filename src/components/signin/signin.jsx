import React, { useState } from "react";
import "./signin.styles.scss";
import { FormInput } from "../../components/form-input/form-input";
import { CustomButton } from "../../components/custom-button/custom-button";
import { auth, signInWithGoole } from "../../firebase/firebase.utils";
import { useHistory } from "react-router-dom";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('')
      history.push('/shop');
      
    } catch(err) {
      alert(err.message)
    }
    console.log(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const googleSignIn = async () => {
    await signInWithGoole();
    history.push('/shop');
  }

  return (
    <div className="sing-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          label="email"
          value={email}
          type="email"
          onChange={handleChange}
          autoComplete="email"
          required
          autoFocus
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          autoComplete="current-password"
          value={password}
          onChange={handleChange}
          required
        />
        <div className="buttons">
        <CustomButton onClick={handleSubmit} children="Sign in" />
        <CustomButton
          onClick={googleSignIn}
          google={true}
          children="Sign in with Google"
        />
        </div>
      </form>
    </div>
  );
}
