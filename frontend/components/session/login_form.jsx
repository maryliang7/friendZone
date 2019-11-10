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
    this.loginDemo = this.loginDemo.bind(this);
    this.loginDemoTwo = this.loginDemoTwo.bind(this);
  };

  handleInput(type) {
    return (e) => {
      if (type === "email") {
        this.setState({ [type]: e.target.value.toLowerCase() })
      } else {
        this.setState({ [type]: e.target.value })
      }
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
        <span id="tooltip-errors">
          <ul>
            {(this.props.errors.map((err, idx) => <li key={idx}> {err} </li>))}
          </ul>
        </span>
      )
    }
  }

  handleError(type) {
    if (this.props.errors.includes(type)) {
      return <span id="tooltip-errors">{this.props.errors[this.props.errors.indexOf(type)]}</span>
    }
  }

  loginDemo(e) {
    e.preventDefault();
    // this.addEmail();
    const demoEmail = "niceguy@yahoo.com";
    const demoPassword = "password";
    this.setState({ email: demoEmail, password: demoPassword }, () => {
      const user = Object.assign({}, this.state);
      this.props.login(user).then(() => {
        <Redirect to="/" />
      });

    });
  }

  loginDemoTwo(e) {
    e.preventDefault();
    // this.addEmail();
    const demoEmail = "nicegirl@yahoo.com";
    const demoPassword = "password";
    this.setState({ email: demoEmail, password: demoPassword }, () => {
      const user = Object.assign({}, this.state);
      this.props.login(user).then(() => {
        <Redirect to="/" />
      });

    });
  }

  addEmail() {
    const demoEmail = "niceguy@yahoo.com".split();

    setInterval( () => {
      if (demoEmail.length) {
        this.setState({ email: this.state.email + demoEmail.shift() })
      } else {
        this.addPassword();
      }
    }, 100)
  }

  addPassword() {
    const demoPassword = "password".split();

    setInterval( () => {
      if (demoPassword.length) {
        this.setState({ password: this.state.password + demoPassword.shift() })
      } else {
        const user = Object.assign({}, this.state);
        this.props.login(user).then(() => {
          <Redirect to="/" />
        });
      }   
    }, 100)
  }

  render() {
    return (
      <div id="signup-page">
        <div id="left-comments">
          <div id="logo-header">
            <button onClick={() => window.location.reload()}><img src={window.logoURL} /></button>
            <h1>friendZone</h1>
          </div>
          <h3>Connect with friends and the world around you with friendZone</h3>
        </div>
        <div id="signup-box-blue">
          <div id="signup-box-white">
            <h2>Sign In</h2>
            <p>Welcome back.</p>
            <form onSubmit={this.handleSubmit} onClick={() => this.props.removeErrors()} id="signup-form">
              <label value="email">
                {this.handleErrors()}
                <input type="email" value={this.state.email} placeholder="Email" onChange={this.handleInput("email")} />
              </label>
              <label value="Password">
                <input type="password" value={this.state.password} placeholder="Password" onChange={this.handleInput("password")} />
              </label>
              <div id="signup-buttons">
                <input type="submit" value="Sign In" />
                <span>or</span>
                <Link to="/signup"><button onClick={() => this.props.removeErrors()} >Sign Up</button></Link>
              </div>
              <div id="demo-line"></div>
              <div id="demo">
                <button onClick={this.loginDemo}>Demo: Nice Guy</button>
              </div>
              <div id="demo">
                <button onClick={this.loginDemoTwo}>Demo: Nice Girl</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}