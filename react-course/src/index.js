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
//import ListComponents from './components/listcomponents/ListComponents';
//import Blog from './components/blog/Blog';
//import NameForm from './components/nameform/NameForm';
//import EasyForm from './components/easyform/EasyForm';
//import FlavorForm from './components/flavorform/FlavorForm';
//import Reservation from './components/reservation/Reservation';
import Calculator from './components/calculator/Calculator';

//const messages = ['React', 'Re: React', 'Re:Re: React'];
//const numbers = [1, 2, 3, 4, 5];
/* const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
]; */

ReactDOM.render(
  <Calculator />
  /*
  <Reservation />
  <FlavorForm />
  <EasyForm />
  <NameForm />
  <Blog posts={posts} />
  <ListComponents numbers={numbers}/>
   <LoginControl />
     <WarningBanner />
     <MailBox unreadMessages={messages} />
     <Greeting isLoggedIn={false} />
     <Toggle />
     <Clock />
  */, document.getElementById(
    "root"
  )
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
