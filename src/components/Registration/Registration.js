import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Registration.css";

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0 && this.state.username.length > 0
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup className="emailbtn" controlId="email" bsSize="large">
            <ControlLabel className="controllabel">EMAIL:</ControlLabel>
            <FormControl
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
            />
          </FormGroup>
          <FormGroup className="passwordbtn" controlId="password" bsSize="large">
            <ControlLabel className="controllabel">PASSWORD:</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"/>
          </FormGroup>
          <Button 
            className="registerbtn"
            block
            bsSize="large"
            type="submit">
            Register
          </Button>
        </form>
      </div>
    );
  }
}

export default Registration;