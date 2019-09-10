import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birth_date: "",
      gender: ""
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
    this.props.signup(user).then(() => {
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
          <div>{this.handleErrors()}</div>
          <h3>Connect with friends and the world around you with friendZone</h3>
        </div>
        <div id="signup-box-blue">
          <div id="signup-box-white">
            <h2>Sign up</h2>
            <p>It's quick and easy.</p>
            <form onSubmit={this.handleSubmit} id="signup-form">
              <div id="name">
                <label value="First name">
                  <input type="text" value={this.state.first_name} placeholder="First name" onChange={this.handleInput("first_name")} />
                </label>
                <label value="Last name">
                  <input type="text" value={this.state.last_name} placeholder="Last name" onChange={this.handleInput("last_name")} />
                </label>
              </div>
              <label value="email">
                <input type="email" value={this.state.email} placeholder="Email" onChange={this.handleInput("email")} />
              </label>
              <br/>
              <label value="Password">
                <input type="password" value={this.state.password} placeholder="New password" onChange={this.handleInput("password")} />
              </label>
              <div id="birthday">
                <p>Birthday</p>
                <input type="date" value={this.state.birth_date} onChange={this.handleInput("birth_date")}/>
              </div>
              <div id="gender">
                <p>Gender</p>
                <div >
                  <input type="radio" name="gender" value="Male" onChange={this.handleInput("gender")} /> &nbsp;Male&nbsp;&nbsp;&nbsp;
                  <input type="radio" name="gender" value="Female" onChange={this.handleInput("gender")} /> &nbsp;Female&nbsp;&nbsp;&nbsp;
                  <input type="radio" name="gender" value="Other" onChange={this.handleInput("gender")} /> &nbsp;Other&nbsp;
                </div>
              </div>
              <div id="signup-buttons">
                <input type="submit" value="Sign Up" />
                <span>or</span>
                <Link to="/login"><button>Sign In</button></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}