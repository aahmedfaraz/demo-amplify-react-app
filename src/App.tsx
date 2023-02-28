import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { withAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import awsexports from "./aws-exports";
Amplify.configure(awsexports);

function App(props: any) {
  console.log(props);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Test Result.</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Test Result
        </a>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
