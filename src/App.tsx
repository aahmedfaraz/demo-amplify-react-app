import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { withAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import awsexports from "./aws-exports";
Amplify.configure(awsexports);

function App({ signOut, user }: { signOut?: any; user?: any }) {
  const { name, email, phone_number } = user.attributes;
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone_number}</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Test Result
        </a>
        <button onClick={signOut}>Signout</button>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
