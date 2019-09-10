import React from 'react';
import { Redirect } from 'react-router-dom';
import SignupFormContainer from '../session/signup_form_container';

const MainContent = ({ currentUser }) => {
  const display = currentUser ? (
    <div>
      {/* <NewsFeedContainer /> */}
    </div>
  ) : (
      <div>
        <Redirect to='/signup' />
      </div>
    )
  return (
    <div>{display}</div>
  )
}

export default MainContent