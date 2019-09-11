import React from "react";
import { Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from './session/signup_form_container'
import MainContentContainer from './main_content/maint_content_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import NewsfeedContainer from './newsfeed/newsfeed_container';

const App = () => (
  <div>
    <header>
      <NavBarContainer />
      <MainContentContainer />
    </header>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <ProtectedRoute exact path="/" component={NewsfeedContainer} />

  </div>
)

export default App;