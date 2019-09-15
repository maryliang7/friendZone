import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      !loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
    }
  />
);

const UserAuth = ({ component: Component, path, loggedIn, currentUser, user, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      (loggedIn && currentUser === user) ? <Component {...props} /> : <Redirect to={`/users/${user.id}`} />
    }
  />
);



const mapStateToProps = (state, ownProps) => {
  return { 
    loggedIn: Boolean(state.session.id),
    currentUser: state.entities.users[state.session.id],
    user: state.entities.users[ownProps.match.params.userId]
  };
};

export const AuthRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Auth)
);

export const ProtectedRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Protected)
);

export const UserAuthRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(UserAuth)
);