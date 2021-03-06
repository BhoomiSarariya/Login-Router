import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import App from './App';
import Login from './Login';

class Index extends React.Component{
  render(){
    return(
      <Router>
        <Redirect to='/login'/>
      <Switch>
      <Route exact path='/login' component={App}></Route>
      <Route exact path='/home' component={Login}></Route>
      </Switch>
    </Router>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
