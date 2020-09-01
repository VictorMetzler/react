import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
/*import App from "./App"; */
import * as serviceWorker from "./serviceWorker";
//import Clock from './components/clock/Clock';
//import Toggle from './components/toggle/Toggle';
//import Greeting from './components/greeting/Greeting';
//import LoginControl from "./components/login/LoginControl";
//import MailBox from "./components/mailbox/MailBox";
//import WarningBanner from './components/warning/WarningBanner';
import ListComponents from './components/listcomponents/ListComponents';

//const messages = ['React', 'Re: React', 'Re:Re: React'];
const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
  <ListComponents numbers={numbers}/>,
  /* <LoginControl />
     <WarningBanner />
     <MailBox unreadMessages={messages} />
     <Greeting isLoggedIn={false} />
     <Toggle />
     <Clock />
  */ document.getElementById(
    "root"
  )
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
