import React from 'react';
import './App.css';
import { Link } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';

class App extends React.Component {
  state = {
    username: [],
    password: ''
  }
  componentDidMount() {
    if (localStorage.getItem('username') !== null) {
      this.props.history.push('/home');
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = e => {
    localStorage.setItem("username", this.state.username);
    localStorage.setItem("password", this.state.password);
    this.props.history.replace('/home');
  }
  render() {
    return (
      <div>
        <div className="container">
          <Form className="form">
            <h4>Login</h4><hr></hr>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="text" name="username" placeholder="Enter email" onChange={(e) => this.handleChange(e)} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password" onChange={(e) => this.handleChange(e)} />
            </Form.Group>
            <Link to='/home'>
              <Button variant="primary" type="submit" onClick={(e) => this.handleSubmit(e)}>
                Submit
                </Button>
            </Link>
          </Form>
        </div>
      </div>
    )
  }
}

export default App;
