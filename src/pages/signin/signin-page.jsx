import React from 'react';
import './signin-page.styles.scss';

import SignIn from '../../components/signin/signin';
import SignUp from "../../components/sing-up/signup";

const SignInPage = () => (
     <div className="sign-in-and-sign-up">
          <SignIn />
          <SignUp />
     </div>
);

export default SignInPage;