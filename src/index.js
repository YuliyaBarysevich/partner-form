import React from "react";
import  ReactDOM  from "react-dom";



import App from "./app";

import './styles/reset.css';
import './styles/style.css';

import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends React.Component {
  render() {
    return <App />;
  }
}

const rootEl = document.getElementById('root');
ReactDOM.render(<Main />, rootEl);