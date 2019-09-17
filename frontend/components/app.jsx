import React from "react";
import { Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from './session/signup_form_container'
import MainContentContainer from './main_content/maint_content_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import NewsfeedContainer from './newsfeed/newsfeed_container';
import UserShowContainer from './user/user_show_container';
import UserAboutContainer from './user/user_about_container';
import UserFriendsContainer from './user/user_friend_component';
import UserPhotosContainer from './user/user_photo_container';
import UserEditContainer from './user/user_edit_form_container';

const App = () => (
  <div>
    <header>
      <NavBarContainer />
      <MainContentContainer />
    </header>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <ProtectedRoute exact path="/users/:userId/about" component={UserAboutContainer} />
    <ProtectedRoute exact path="/users/:userId/friends" component={UserFriendsContainer} />
    <ProtectedRoute exact path="/users/:userId/photos" component={UserPhotosContainer} />
    <ProtectedRoute exact path="/users/:userId/edit" component={UserEditContainer} />
    <ProtectedRoute exact path="/users/:userId" component={UserShowContainer} />
    <ProtectedRoute exact path="/" component={NewsfeedContainer} />

  </div>
)

export default App;