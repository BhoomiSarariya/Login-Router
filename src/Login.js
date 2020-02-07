import React from 'react';
import './App.css'
class Login extends React.Component {
  componentDidMount(){
    if(localStorage.getItem('username') == null){
      this.props.history.replace('/login');
    }
  }
  handleClickSignUp = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    this.props.history.replace('/login');
    }
  render() {
    return (
      <div>
        hello {localStorage.getItem("username")}
        <button onClick={() => this.handleClickSignUp()}>Sign Up</button>
      </div>
    )
  }
}
export default Login;