import React from 'react';
import { Redirect } from 'react-router-dom';
import NewsfeedContainer from '../newsfeed/newsfeed_container';

const MainContent = ({ currentUser }) => {
  const display = currentUser ? (
    <div>
      {/* <NewsfeedContainer /> */}
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