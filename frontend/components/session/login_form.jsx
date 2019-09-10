import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  };

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const user = Object.assign({}, this.state);
    this.props.login(user).then(() => {
      <Redirect to="/" />
    });
  }

  handleErrors() {
    if (this.props.errors.length !== 0) {
      return (
        <ul>
          {(this.props.errors.map((err, idx) => <li key={idx}> {err} </li>))}
        </ul>
      )
    }
  }
  render() {
    return (
      <div id="signup-page">
        <div id="left-comments">
          <h1>friendZone</h1>
          <h3>Connect with friends and the world around you with friendZone</h3>
        </div>
        <div id="signup-box-blue">
          <div id="signup-box-white">
            
            <h2>Sign In</h2>
            <p>Welcome back.</p>
            <form onSubmit={this.handleSubmit} id="signup-form">
              <label value="email">
                <input type="email" value={this.state.email} placeholder="Email" onChange={this.handleInput("email")} />
              </label>
              <label value="Password">
                <input type="password" value={this.state.password} placeholder="New password" onChange={this.handleInput("password")} />
              </label>
              <div id="signup-buttons">
                <input type="submit" value="Sign In" />
                <span>or</span>
                <Link to="/signup"><button>Sign Up</button></Link>
              </div>
              <div>
                <button id="demo">Demo Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}