import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0 
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push('/home')
  }

 handleClick = event => {
   event.preventDefault();
   this.props.history.push("./register");
 }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large" className="emailbtn">
            <ControlLabel className="controllabel">EMAIL:</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large" className="passwordbtn">
            <ControlLabel className="controllabel">PASSWORD:</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button className="loginbtn"
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit">Login
          </Button>
        </form>
        <Button className="registerbtn"
            onClick={this.handleClick}
            block
            bsSize="large"
            type="Register">Register
          </Button>
      </div>
    );
  }
}

export default Login;